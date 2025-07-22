import { useState, useEffect } from "react";
import { Code, Database, Globe, Wrench, Brain, Users, Zap } from "lucide-react";

const SkillsSection = () => {
  const [skillsVisible, setSkillsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "primary",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Java", level: 85 },
        { name: "C/C++", level: 80 }
      ]
    },
    {
      title: "Frontend Technologies", 
      icon: Globe,
      color: "spirit",
      skills: [
        { name: "React", level: 95 },
        { name: "HTML/CSS", level: 90 },
        { name: "Responsive Design", level: 85 }
      ]
    },
    {
      title: "Backend Technologies",
      icon: Database,
      color: "secondary", 
      skills: [
        { name: "Spring Boot", level: 80 },
        { name: "Node.js/Express", level: 88 },
        { name: "RESTful APIs", level: 92 },
        { name: "FastAPI", level: 75 }
      ]
    },
    {
      title: "Databases",
      icon: Database,
      color: "energy",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "SQL", level: 80 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      color: "accent",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 85 },
        { name: "AI Tools", level: 88 }
      ]
    },
    {
      title: "Core Concepts",
      icon: Brain,
      color: "primary",
      skills: [
        { name: "Data Structures & Algorithms", level: 85 },
        { name: "UI/UX Principles", level: 80 },
        { name: "Agile Methodologies", level: 88 }
      ]
    },
    {
      title: "Soft Skills",
      icon: Users,
      color: "spirit",
      skills: [
        { name: "Leadership", level: 90 },
        { name: "Team Collaboration", level: 95 },
        { name: "Problem Solving", level: 92 },
        { name: "Communication", level: 88 }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          glow: "text-glow-primary",
          bg: "bg-primary/10",
          progress: "from-primary to-primary-glow",
          icon: "text-primary"
        };
      case "secondary":
        return {
          glow: "text-glow-secondary",
          bg: "bg-secondary/10", 
          progress: "from-secondary to-secondary-glow",
          icon: "text-secondary"
        };
      case "energy":
        return {
          glow: "text-glow-energy",
          bg: "bg-energy/10",
          progress: "from-energy to-energy-glow", 
          icon: "text-energy"
        };
      case "spirit":
        return {
          glow: "text-spirit",
          bg: "bg-spirit/10",
          progress: "from-spirit to-spirit-glow",
          icon: "text-spirit"
        };
      case "accent":
        return {
          glow: "text-accent",
          bg: "bg-accent/10",
          progress: "from-accent to-accent-glow",
          icon: "text-accent"
        };
      default:
        return {
          glow: "text-glow-primary",
          bg: "bg-primary/10",
          progress: "from-primary to-primary-glow",
          icon: "text-primary"
        };
    }
  };

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Jutsu Repertoire
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            Mastered techniques and power levels
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-energy mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const colors = getColorClasses(category.color);
            const Icon = category.icon;
            
            return (
              <div 
                key={categoryIndex}
                className={`card-hover ${colors.bg} group`}
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-full ${colors.bg} group-hover:shadow-primary transition-smooth`}>
                    <Icon className={`w-5 h-5 ${colors.icon}`} />
                  </div>
                  <h3 className={`font-bold ${colors.glow}`}>
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="skill-progress">
                        <div 
                          className={`skill-progress-bar bg-gradient-to-r ${colors.progress} transition-all duration-1000 ease-out`}
                          style={{ 
                            width: skillsVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 100) + (skillIndex * 100)}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Power Level Indicator */}
                <div className="mt-6 pt-4 border-t border-border/50">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-medium">
                      CATEGORY MASTERY
                    </span>
                    <div className="flex items-center gap-1">
                      <Zap className={`w-3 h-3 ${colors.icon}`} />
                      <span className="text-xs font-mono text-foreground">
                        {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Overall Power Level */}
        <div className="mt-16 text-center">
          <div className="max-w-md mx-auto card-hover bg-primary/5 border-primary/20">
            <h3 className="text-lg font-bold text-glow-primary mb-4">
              OVERALL POWER LEVEL
            </h3>
            <div className="text-4xl font-bold gradient-text mb-2">
              LEVEL 92
            </div>
            <div className="text-sm text-muted-foreground mb-4">
              Full-Stack Mastery Achieved
            </div>
            <div className="skill-progress h-3">
              <div 
                className="skill-progress-bar bg-gradient-to-r from-primary via-secondary to-energy"
                style={{ 
                  width: skillsVisible ? '92%' : '0%',
                  transitionDelay: '800ms'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;