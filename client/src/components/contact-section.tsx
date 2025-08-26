import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";

export default function ContactSection() {
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
    <section id="contact" className="py-20 bg-gradient-to-br from-websitemaatje-light to-blue-50" data-testid="contact-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-websitemaatje-dark mb-4" data-testid="text-contact-title">
              Klaar om te beginnen?
            </h2>
            <p className="text-xl text-gray-600" data-testid="text-contact-subtitle">
              Stuur ons een berichtje en we nemen snel contact met je op voor een vrijblijvend gesprek.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-websitemaatje-dark mb-6" data-testid="text-form-title">
                Stuur je vraag aan je WebsiteMaatje
              </h3>
              
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
            
            <div>
              <h3 className="text-2xl font-semibold text-websitemaatje-dark mb-6" data-testid="text-contact-info-title">
                Direct contact
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-websitemaatje-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-websitemaatje-dark mb-1">E-mail</h4>
                    <p className="text-gray-600" data-testid="text-email">hallo@websitemaatje.nl</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-websitemaatje-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-websitemaatje-dark mb-1">Telefoon</h4>
                    <p className="text-gray-600" data-testid="text-phone">06 - 12 34 56 78</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-websitemaatje-dark mb-1">WhatsApp</h4>
                    <p className="text-gray-600">Stuur ons een berichtje</p>
                  </div>
                </div>
              </div>
              
              <Card className="mt-8 bg-white shadow-sm">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-websitemaatje-dark mb-2">Reactietijd</h4>
                  <p className="text-gray-600">We reageren binnen 24 uur op je bericht, vaak veel sneller!</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
