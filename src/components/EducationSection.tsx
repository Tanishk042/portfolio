import { GraduationCap, MapPin, Calendar } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-6 bg-background-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Academy Records
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            Foundation of knowledge and continuous learning
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full" />
        </div>

        <div className="card-hover bg-secondary/5 border-secondary/20 border-l-4 relative">
          {/* Floating Background Elements */}
          <div className="absolute top-4 right-4 opacity-10">
            <GraduationCap className="w-24 h-24 text-secondary" />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-4 rounded-full bg-secondary/10 flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-secondary" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-glow-secondary mb-2">
                  Bachelor of Technology (B.Tech)
                </h3>
                <p className="text-xl text-foreground font-medium mb-4">
                  Electronics and Communication Engineering
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-foreground">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <span className="font-medium">Bhagwan Parshuram Institute of Technology, GGSIPU</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Delhi, India</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>August 2023 - Present</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Additional Info */}
            <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-border/50">
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground mb-3">
                  Core Focus Areas
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-secondary/50 rounded-full" />
                    Digital Signal Processing
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-secondary/50 rounded-full" />
                    Microprocessors & Microcontrollers
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-secondary/50 rounded-full" />
                    Communication Systems
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-secondary/50 rounded-full" />
                    VLSI Design
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground mb-3">
                  Skills Developed
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-secondary/50 rounded-full" />
                    Analytical Problem Solving
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-secondary/50 rounded-full" />
                    System Design & Architecture
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-secondary/50 rounded-full" />
                    Mathematical Modeling
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-secondary/50 rounded-full" />
                    Technical Documentation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Continuous Learning Section */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-card rounded-full border border-border">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              Currently pursuing advanced knowledge in Full-Stack Development
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;