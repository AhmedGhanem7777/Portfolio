import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Github, Linkedin } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-4 gradient-text">Get In Touch</h2>
          <div className="w-20 h-1 gradient-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="font-poppins font-semibold text-2xl mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary mt-1" size={24} />
                  <div>
                    <p className="font-inter font-semibold text-foreground">Location</p>
                    <p className="font-inter text-muted-foreground">Cairo, Egypt</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-primary mt-1" size={24} />
                  <div>
                    <p className="font-inter font-semibold text-foreground">Phone</p>
                    <a href="tel:+201559434566" className="font-inter text-muted-foreground hover:text-primary transition-colors">
                      +20 1559434566
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-primary mt-1" size={24} />
                  <div>
                    <p className="font-inter font-semibold text-foreground">Email</p>
                    <a href="mailto:ahmedfadeghanem012@gmail.com" className="font-inter text-muted-foreground hover:text-primary transition-colors">
                      ahmedfadeghanem012@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-poppins font-semibold text-xl mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/AhmedGhanem7777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300 hover:scale-105"
                >
                  <Github className="text-primary" size={20} />
                  <span className="font-inter text-sm">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/ahmedfadelghanem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300 hover:scale-105"
                >
                  <Linkedin className="text-primary" size={20} />
                  <span className="font-inter text-sm">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="font-inter text-sm font-semibold text-foreground mb-2 block">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="bg-card border-border focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="font-inter text-sm font-semibold text-foreground mb-2 block">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="bg-card border-border focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="font-inter text-sm font-semibold text-foreground mb-2 block">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message..."
                  rows={6}
                  className="bg-card border-border focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button type="submit" variant="gradient" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
