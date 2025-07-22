import { Code, Database, Globe, Zap } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Mastery",
      description: "Java, React, Node.js"
    },
    {
      icon: Database,
      title: "Data Architecture",
      description: "MongoDB, SQL, APIs"
    },
    {
      icon: Globe,
      title: "Web Excellence",
      description: "Responsive, Modern UIs"
    },
    {
      icon: Zap,
      title: "Performance Focus",
      description: "Optimized Solutions"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            The Code Shaman's Path
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Description */}
          <div className="space-y-6">
            <div className="text-lg leading-relaxed">
              <p className="mb-6 text-foreground/90">
                A <span className="text-glow-primary font-semibold">Full-Stack Developer</span> with 
                strong proficiency in Java and experience in building robust web applications across 
                diverse tech stacks.
              </p>
              
              <p className="mb-6 text-foreground/90">
                Possessing a background in <span className="text-glow-secondary font-semibold">Electronics 
                and Communication Engineering</span>, I excel at developing high-performance solutions, 
                managing complex backend systems, and crafting intuitive user interfaces.
              </p>
              
              <p className="text-foreground/90">
                Committed to delivering <span className="text-glow-energy font-semibold">seamless digital 
                experiences</span> through effective API integration and efficient database management.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="text-center p-4 card-hover">
                <div className="text-3xl font-bold text-glow-primary">150k+</div>
                <div className="text-sm text-muted-foreground">Lines of Code</div>
              </div>
              <div className="text-center p-4 card-hover">
                <div className="text-3xl font-bold text-glow-secondary">50%</div>
                <div className="text-sm text-muted-foreground">Performance Boost</div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="card-hover text-center group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 mx-auto mb-4 p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                    <Icon className="w-6 h-6 text-primary group-hover:text-primary-glow transition-smooth" />
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground group-hover:text-primary transition-smooth">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;