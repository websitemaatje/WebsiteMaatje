import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, MessageCircle, Send, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";

export default function Contact() {
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
    <div className="pt-20 pb-16" data-testid="page-contact">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-websitemaatje-light to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-websitemaatje-dark mb-6" data-testid="text-contact-title">
              Neem contact op
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-testid="text-contact-subtitle">
              Heb je vragen over onze pakketten of wil je direct starten? We horen graag van je!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Stuur ons een bericht</CardTitle>
              </CardHeader>
              <CardContent>
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
                              placeholder="Vertel ons over je project, vragen of wensen..."
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
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Direct contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-websitemaatje-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-websitemaatje-dark mb-1">E-mail</h4>
                      <p className="text-gray-600" data-testid="text-email">hallo@websitemaatje.nl</p>
                      <p className="text-sm text-gray-500">We reageren binnen 24 uur</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-websitemaatje-accent rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-websitemaatje-dark mb-1">Telefoon</h4>
                      <p className="text-gray-600" data-testid="text-phone">06 - 12 34 56 78</p>
                      <p className="text-sm text-gray-500">Ma-vr 9:00 - 17:00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-websitemaatje-dark mb-1">WhatsApp</h4>
                      <p className="text-gray-600">06 - 12 34 56 78</p>
                      <p className="text-sm text-gray-500">Voor snelle vragen</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Kantoorgegevens</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-websitemaatje-primary w-5 h-5 mt-1" />
                    <div>
                      <p className="font-semibold text-websitemaatje-dark">Adres</p>
                      <p className="text-gray-600">
                        WebsiteMaatje<br />
                        Voorbeeldstraat 123<br />
                        1234 AB Amsterdam
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="text-websitemaatje-primary w-5 h-5 mt-1" />
                    <div>
                      <p className="font-semibold text-websitemaatje-dark">Openingstijden</p>
                      <p className="text-gray-600">
                        Maandag - Vrijdag: 9:00 - 17:00<br />
                        Weekend: Op afspraak
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-websitemaatje-primary to-websitemaatje-accent text-white">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Gratis kennismaking</h4>
                  <p className="text-sm opacity-90 mb-4">
                    Geen verplichtingen, gewoon een vriendelijk gesprek over jouw website wensen.
                  </p>
                  <Button 
                    className="bg-white text-websitemaatje-primary hover:bg-gray-100 w-full"
                    data-testid="button-consultation"
                  >
                    Plan gesprek in
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
