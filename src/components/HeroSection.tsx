import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          className="absolute top-1/2 left-1/2 w-[177.77vh] h-[56.25vw] min-w-full min-h-full opacity-20 pointer-events-none"
          src="https://www.youtube.com/embed/nKV6nvCKcyo?autoplay=1&mute=1&loop=1&playlist=nKV6nvCKcyo&controls=0&showinfo=0&modestbranding=1&iv_load_policy=3&rel=0"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{ transform: 'translate(-50%, -50%)' }}
        />
      </div>
      
      {/* Floating Energy Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="energy-orb"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className={`relative z-10 text-center max-w-4xl mx-auto px-6 transition-all duration-1000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Name with Glow Effect */}
        <h1 className="text-6xl md:text-8xl font-bold mb-4 gradient-text pulse-glow">
          TANISK
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-glow-secondary">
          BHADAURIYA
        </h2>
        
        {/* Role Title */}
        <div className="text-xl md:text-2xl text-accent mb-8 font-medium tracking-wider">
          JAVA FULL-STACK DEVELOPER
        </div>
        
        {/* Power Level Indicator */}
        <div className="mb-8 space-y-2">
          <div className="text-sm text-muted-foreground">POWER LEVEL</div>
          <div className="skill-progress w-64 mx-auto">
            <div 
              className="skill-progress-bar" 
              style={{ width: '92%' }}
            />
          </div>
          <div className="text-xs text-primary font-mono">FULL-STACK MASTERY: 92%</div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            className="btn-primary"
            onClick={() => scrollToSection('projects')}
          >
            View My Techniques
          </Button>
          <Button 
            className="btn-energy"
            onClick={() => scrollToSection('contact')}
          >
            Connect with Me
          </Button>
        </div>

        {/* Quick Links */}
        <div className="flex justify-center space-x-6">
          <a 
            href="https://github.com/tanishk042" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card hover:bg-card-hover transition-smooth hover:shadow-primary group"
          >
            <Github className="w-6 h-6 group-hover:text-primary transition-smooth" />
          </a>
          <a 
            href="https://www.linkedin.com/in/tanisk-bhadauriya-57b6a5275" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card hover:bg-card-hover transition-smooth hover:shadow-spirit group"
          >
            <Linkedin className="w-6 h-6 group-hover:text-spirit transition-smooth" />
          </a>
          <a 
            href="mailto:tanisk72@gmail.com"
            className="p-3 rounded-full bg-card hover:bg-card-hover transition-smooth hover:shadow-energy group"
          >
            <Mail className="w-6 h-6 group-hover:text-energy transition-smooth" />
          </a>
          <a 
            href="tel:+918532909934"
            className="p-3 rounded-full bg-card hover:bg-card-hover transition-smooth hover:shadow-secondary group"
          >
            <Phone className="w-6 h-6 group-hover:text-secondary transition-smooth" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 floating-animation">
        <div className="w-1 h-12 bg-gradient-to-b from-primary to-transparent rounded-full" />
      </div>
    </section>
  );
};

export default HeroSection;