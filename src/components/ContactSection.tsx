import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone, Instagram, Send, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before sending.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/tanishk042",
      color: "hover:text-primary hover:shadow-primary",
      description: "@tanishk042"
    },
    {
      name: "LinkedIn", 
      icon: Linkedin,
      url: "https://www.linkedin.com/in/tanisk-bhadauriya-57b6a5275",
      color: "hover:text-spirit hover:shadow-spirit",
      description: "Tanishk Bhadauriya"
    },
    {
      name: "Instagram",
      icon: Instagram, 
      url: "https://instagram.com/tanishk04",
      color: "hover:text-energy hover:shadow-energy", 
      description: "@tanishk04"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:tanisk72@gmail.com", 
      color: "hover:text-secondary hover:shadow-secondary",
      description: "tanisk72@gmail.com"
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8532909934",
      link: "tel:+918532909934"
    },
    {
      icon: Mail,
      label: "Email", 
      value: "tanisk72@gmail.com",
      link: "mailto:tanisk72@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Delhi, India",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Summon the Developer
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            Ready to collaborate? Let's create something amazing together
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-spirit mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card-hover bg-primary/5 border-primary/20">
            <h3 className="text-2xl font-bold text-glow-primary mb-6">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="bg-background/50 border-border focus:border-primary transition-smooth"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email" 
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className="bg-background/50 border-border focus:border-primary transition-smooth"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or just say hello!"
                  rows={5}
                  className="bg-background/50 border-border focus:border-primary transition-smooth resize-none"
                />
              </div>
              
              <Button type="submit" className="btn-primary w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div className="card-hover bg-secondary/5 border-secondary/20">
              <h3 className="text-2xl font-bold text-glow-secondary mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-background/30 transition-smooth group">
                      <div className="p-2 rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-smooth">
                        <Icon className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        <div className="font-medium text-foreground group-hover:text-secondary transition-smooth">
                          {info.value}
                        </div>
                      </div>
                    </div>
                  );
                  
                  return info.link ? (
                    <a key={index} href={info.link} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={index}>
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="card-hover bg-spirit/5 border-spirit/20">
              <h3 className="text-2xl font-bold text-spirit mb-6">
                Connect Online
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-4 rounded-lg bg-background/30 hover:bg-background/50 transition-smooth group ${social.color}`}
                    >
                      <Icon className="w-5 h-5 transition-smooth" />
                      <div className="text-left">
                        <div className="font-medium text-sm">{social.name}</div>
                        <div className="text-xs text-muted-foreground">{social.description}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability Status */}
            <div className="text-center p-6 card-hover bg-energy/5 border-energy/20">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-3 h-3 bg-energy rounded-full animate-pulse" />
                <span className="font-medium text-energy">Available for Projects</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Currently accepting freelance projects and full-time opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;