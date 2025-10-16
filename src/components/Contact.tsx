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
    <section id="contact" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in font-playfair">
              Contact me
            </h2>
            <p className="text-lg text-muted-foreground">
              Want to see how to transform your ideas into AI solutions? Send me a message
            </p>
          </div>
          
          <div className="bg-card rounded-3xl p-8 md:p-12 border-4 border-foreground shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] animate-slide-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold mb-2">Name</label>
                  <Input
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-2xl bg-background border-2 border-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all font-medium"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold mb-2">Email</label>
                  <Input
                    name="email"
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-2xl bg-background border-2 border-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all font-medium"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold mb-2">Message</label>
                <Textarea
                  name="message"
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl bg-background border-2 border-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none font-medium"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full rounded-full bg-foreground text-background hover:bg-foreground/90 border-2 border-foreground font-bold text-lg py-6"
              >
                Send us message
              </Button>
            </form>
            
            <div className="mt-12 pt-8 border-t-2 border-foreground">
              <h3 className="text-xl font-bold mb-6 text-center font-playfair">Connect with me</h3>
              <div className="flex justify-center gap-4">
                <a 
                  href="https://www.linkedin.com/in/srija-pilli/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-4 rounded-full border-2 border-foreground bg-background hover:bg-foreground hover:text-background transition-all"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a 
                  href="https://github.com/PilliSrija" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-4 rounded-full border-2 border-foreground bg-background hover:bg-foreground hover:text-background transition-all"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a 
                  href="mailto:srijapilli12@gmail.com" 
                  className="p-4 rounded-full border-2 border-foreground bg-background hover:bg-foreground hover:text-background transition-all"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;