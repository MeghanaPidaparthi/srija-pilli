import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-in">
          Get In Touch
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Let's Connect</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, projects, or just connecting with fellow developers. Feel free to reach out through any of these channels:
            </p>
            <div className="space-y-4">
              <a
                href="mailto:srijapilli@example.com"
                className="flex items-center gap-4 p-4 bg-card rounded-2xl hover:shadow-[var(--shadow-card)] transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-gradient-to-r from-primary to-accent">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">Email</p>
                  <p className="text-sm text-muted-foreground">srijapilli@example.com</p>
                </div>
              </a>
              <a
                href="https://linkedin.com/in/srijapilli"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card rounded-2xl hover:shadow-[var(--shadow-card)] transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-gradient-to-r from-accent to-primary">
                  <Linkedin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">Connect with me</p>
                </div>
              </a>
              <a
                href="https://github.com/srijapilli"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card rounded-2xl hover:shadow-[var(--shadow-card)] transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-gradient-to-r from-primary to-accent">
                  <Github className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">GitHub</p>
                  <p className="text-sm text-muted-foreground">View my code</p>
                </div>
              </a>
            </div>
          </div>
          <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="rounded-2xl"
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="rounded-2xl"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="rounded-2xl"
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">
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