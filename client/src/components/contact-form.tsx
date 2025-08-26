import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";

interface ContactFormProps {
  className?: string;
  onSubmitSuccess?: () => void;
}

export default function ContactForm({ className = "", onSubmitSuccess }: ContactFormProps) {
  const { toast } = useToast();
  
  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      packageType: undefined,
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Bericht verzonden!",
        description: data.message,
      });
      form.reset();
      onSubmitSuccess?.();
    },
    onError: (error) => {
      toast({
        title: "Fout bij verzenden",
        description: "Er is een fout opgetreden. Probeer het later opnieuw.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    contactMutation.mutate(data);
  };

  return (
    <div className={className}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-contact">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Naam *</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Je volledige naam" 
                    {...field} 
                    data-testid="input-name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mailadres *</FormLabel>
                <FormControl>
                  <Input 
                    type="email"
                    placeholder="je@email.nl" 
                    {...field} 
                    data-testid="input-email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="packageType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Interesse in pakket (optioneel)</FormLabel>
                <Select onValueChange={field.onChange} value={field.value || ""}>
                  <FormControl>
                    <SelectTrigger data-testid="select-package">
                      <SelectValue placeholder="Kies een pakket" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="starter">Starter - €199</SelectItem>
                    <SelectItem value="plus">Plus - €399</SelectItem>
                    <SelectItem value="premium">Premium - €699</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bericht *</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Vertel ons over je project..."
                    rows={5}
                    {...field} 
                    data-testid="input-message"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            disabled={contactMutation.isPending}
            className="w-full bg-websitemaatje-accent hover:bg-orange-600 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            data-testid="button-submit"
          >
            <Send className="mr-2 w-5 h-5" />
            {contactMutation.isPending ? "Verzenden..." : "Verstuur bericht"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
