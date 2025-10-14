import { useState } from 'react';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { toast, Toaster } from 'sonner';
import { Mail, MessageSquare, Send } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-['EB_Garamond',serif] text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-[color:var(--muted-ink)] max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-[color:var(--surface)] rounded-[var(--r-lg)] shadow-[var(--shadow-md)] border border-[color:var(--border)] text-center">
            <div className="w-12 h-12 rounded-full bg-[color:var(--primary)]/10 flex items-center justify-center mx-auto mb-3">
              <Mail className="w-6 h-6 text-[color:var(--primary)]" />
            </div>
            <h3 className="font-semibold mb-1">Email</h3>
            <p className="text-sm text-[color:var(--muted-ink)]">support@heartrisk.health</p>
          </Card>

          <Card className="p-6 bg-[color:var(--surface)] rounded-[var(--r-lg)] shadow-[var(--shadow-md)] border border-[color:var(--border)] text-center">
            <div className="w-12 h-12 rounded-full bg-[color:var(--accent)]/10 flex items-center justify-center mx-auto mb-3">
              <MessageSquare className="w-6 h-6 text-[color:var(--accent)]" />
            </div>
            <h3 className="font-semibold mb-1">Response Time</h3>
            <p className="text-sm text-[color:var(--muted-ink)]">Within 24-48 hours</p>
          </Card>

          <Card className="p-6 bg-[color:var(--surface)] rounded-[var(--r-lg)] shadow-[var(--shadow-md)] border border-[color:var(--border)] text-center">
            <div className="w-12 h-12 rounded-full bg-[color:var(--secondary)]/10 flex items-center justify-center mx-auto mb-3">
              <Send className="w-6 h-6 text-[color:var(--secondary)]" />
            </div>
            <h3 className="font-semibold mb-1">Feedback</h3>
            <p className="text-sm text-[color:var(--muted-ink)]">We value your input</p>
          </Card>
        </div>

        <Card className="p-8 bg-[color:var(--surface)] rounded-[var(--r-lg)] shadow-[var(--shadow-md)] border border-[color:var(--border)]">
          <h2 className="font-['EB_Garamond',serif] text-2xl font-bold mb-6">Send a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  data-testid="contact-name-input"
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  data-testid="contact-email-input"
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input
                data-testid="contact-subject-input"
                id="subject"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
              />
            </div>

            <div>
              <Label htmlFor="message">Message *</Label>
              <Textarea
                data-testid="contact-message-textarea"
                id="message"
                placeholder="Your message here..."
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
                className="resize-none"
              />
            </div>

            <Button
              data-testid="contact-submit-button"
              type="submit"
              disabled={loading}
              className="w-full bg-[color:var(--primary)] text-[color:var(--primary-ink)] hover:bg-[#0C8F9B] transition-colors duration-200"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </Card>

        <div className="mt-8 p-6 rounded-[var(--r-lg)] bg-[color:var(--warning)]/10 border border-[color:var(--warning)]/30">
          <h3 className="font-semibold text-[color:var(--warning)] mb-2">Medical Emergencies</h3>
          <p className="text-sm text-[color:var(--muted-ink)]">
            If you are experiencing a medical emergency, please call your local emergency services immediately. This contact form is not monitored 24/7 and should not be used for urgent medical situations.
          </p>
        </div>
      </div>
      <Toaster position="top-right" richColors />
    </div>
  );
};