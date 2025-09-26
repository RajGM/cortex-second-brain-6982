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
  researchTopic: z.string().trim().min(1, { message: "Research topic is required" }).max(500, { message: "Research topic must be less than 500 characters" }),
  submissionUrl: z.string().url({ message: "Please enter a valid URL" }).optional().or(z.literal('')),
});

type ResearchFormData = z.infer<typeof researchFormSchema>;

interface ResearchFormProps {
  show?: boolean;
}

export const ResearchForm: React.FC<ResearchFormProps> = ({ show = true }) => {
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
      submissionUrl: 'https://jsonplaceholder.typicode.com/posts', // Default URL - user can change
    },
  });

  const onSubmit = async (data: ResearchFormData) => {
    setIsSubmitting(true);
    
    try {
      const submissionUrl = data.submissionUrl || 'https://jsonplaceholder.typicode.com/posts';
      
      // Prepare the payload
      const payload = {
        name: data.name,
        phone: data.phone,
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
          title: "Success!",
          description: "Your research request has been submitted successfully.",
        });
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Failed to submit your research request. Please try again.",
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
            <h3 className="text-2xl font-bold text-foreground mb-2">Congratulations!</h3>
            <p className="text-muted-foreground mb-4">
              Your exhaustive research & business report will be in your email soon.
            </p>
            <p className="text-sm text-muted-foreground">
              Please check your email for initial conversation details.
            </p>
            <Button 
              variant="outline" 
              onClick={() => setIsSubmitted(false)}
              className="mt-6"
            >
              Submit Another Request
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
            Request Research Report
          </CardTitle>
          <p className="text-center text-muted-foreground">
            Get a comprehensive research and business report tailored to your needs
          </p>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter your full name" 
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
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter your phone number" 
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input 
                        type="email"
                        placeholder="Enter your email address" 
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
                    <FormLabel>Research Topic</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe the research topic or business area you need analyzed..."
                        rows={4}
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
                name="submissionUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Submission URL (Optional)</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="https://your-endpoint.com/api/research"
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
                    Submitting...
                  </>
                ) : (
                  'Submit Research Request'
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};