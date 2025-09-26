import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Loader2, CheckCircle } from 'lucide-react';

const researchFormSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100, { message: "Name must be less than 100 characters" }),
  phone: z.string().trim().min(1, { message: "Phone number is required" }).max(20, { message: "Phone number must be less than 20 characters" }),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  researchTopic: z.string().trim().min(1, { message: "Research area is required" }).max(500, { message: "Research area must be less than 500 characters" }),
});

type ResearchFormData = z.infer<typeof researchFormSchema>;

interface ResearchFormProps {
  show?: boolean;
  submissionUrl?: string;
}

export const ResearchForm: React.FC<ResearchFormProps> = ({ 
  show = true, 
  submissionUrl = 'https://jsonplaceholder.typicode.com/posts' 
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<ResearchFormData>({
    resolver: zodResolver(researchFormSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      researchTopic: '',
    },
  });

  const onSubmit = async (data: ResearchFormData) => {
    setIsSubmitting(true);
    
    try {
      // Prepare the payload
      const payload = {
        name: data.name,
        contact: data.phone,
        email: data.email,
        researchTopic: data.researchTopic,
        timestamp: new Date().toISOString(),
      };

      console.log('Submitting research form to:', submissionUrl);
      console.log('Payload:', payload);

      const response = await fetch(submissionUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        toast({
          title: "Welcome to AgenticX Lab!",
          description: "You're now part of the revolution. Check your email for next steps.",
        });
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
        toast({
          title: "Error",
          description: "Failed to join AgenticX Lab. Please try again.",
          variant: "destructive",
        });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!show) return null;

  if (isSubmitted) {
    return (
      <div className="w-full max-w-2xl mx-auto mb-16">
        <Card className="glass-panel">
          <CardContent className="p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">Welcome to AgenticX Lab! 🚀</h3>
            <p className="text-muted-foreground mb-4">
              You've joined the future of research. Where great ideas come to life, not to die.
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>What happens next:</strong>
            </p>
            <ul className="text-sm text-muted-foreground text-left space-y-1 mb-4">
              <li>• Check your email for onboarding details</li>
              <li>• Join our exclusive researcher community</li>
              <li>• Get early access to AgenticX Lab platform</li>
              <li>• Transform your research into business reality</li>
            </ul>
            <p className="text-xs text-muted-foreground">
              Research to reality. One click. 🎯
            </p>
            <Button 
              variant="outline" 
              onClick={() => setIsSubmitted(false)}
              className="mt-6"
            >
              Invite Another Researcher
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto mb-16">
      <Card className="glass-panel">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-foreground">
            Join AgenticX Lab
          </CardTitle>
          <p className="text-center text-muted-foreground mb-4">
            Transform your research into business reality with just one click.
          </p>
          <div className="text-sm text-muted-foreground space-y-2">
            <p className="text-center">
              <strong>Join 2 TU-Munich professors, 3 social scientists, 5 Parliament members, and 10+ research labs</strong>
            </p>
            <p className="text-center">
              Stop watching brilliant research collect dust. Bridge the gap to real-world impact.
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Dr. Jane Smith or Your Lab Name" 
                        {...field} 
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Number</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your direct contact number" 
                        {...field} 
                        disabled={isSubmitting}
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
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input 
                        type="email"
                        placeholder="professor@university.edu or lab@institution.org" 
                        {...field} 
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="researchTopic"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Research Area & Current Challenge</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="What research are you working on? What's the biggest challenge in bridging your research to real-world impact? (e.g., AI ethics, sustainable energy, biotech innovations...)"
                        rows={4}
                        {...field} 
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit" 
                className="w-full" 
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Joining AgenticX Lab...
                  </>
                ) : (
                  'Join the Research Revolution →'
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};