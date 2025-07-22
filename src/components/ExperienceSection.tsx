import { Calendar, MapPin, TrendingUp, Users, Code, Award } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "CricJaankar",
      type: "Freelance Project",
      location: "Remote",
      period: "March 2025 - Present",
      description: "Spearheaded the development and launch of Cric Info, a cricket platform providing real-time scores, points tables, match stats, and analytics.",
      achievements: [
        "Developed a web app that provides real-time cricket scores and updates using CricAPI",
        "Led a 3-member developer team, managing backend (Node.js), frontend (React), and API integrations",
        "Optimized data fetching and UI responsiveness, increasing user retention by 40%",
        "Enhanced user engagement and session duration, driving a 25% increase in ad revenue"
      ],
      color: "primary"
    },
    {
      title: "Full-Stack Developer",
      company: "Digilok",
      type: "Freelance Project", 
      location: "Remote",
      period: "January 2025 - March 2025",
      description: "Redesigned and implemented a fully functional Digiloknews platform with a Node.js-powered server, improving UI/UX design.",
      achievements: [
        "Managed development of over 150k lines of code across multiple projects",
        "Enabled users to manually write and publish news articles, boosting content production by 30%",
        "Reduced page load times by 50% through advanced JavaScript optimization",
        "Increased client satisfaction by 15% through effective project management",
        "Achieved significant increase in Google search ranking, driving higher organic traffic",
        "Boosted site revenue by 45% through improved monetization and traffic"
      ],
      color: "secondary"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          glow: "text-glow-primary",
          bg: "bg-primary/10",
          border: "border-primary/30",
          icon: "text-primary"
        };
      case "secondary":
        return {
          glow: "text-glow-secondary", 
          bg: "bg-secondary/10",
          border: "border-secondary/30",
          icon: "text-secondary"
        };
      default:
        return {
          glow: "text-glow-primary",
          bg: "bg-primary/10", 
          border: "border-primary/30",
          icon: "text-primary"
        };
    }
  };

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Battle Logs
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            Professional missions and achievements
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-energy to-spirit mx-auto rounded-full" />
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const colors = getColorClasses(exp.color);
            
            return (
              <div 
                key={index}
                className={`card-hover ${colors.bg} ${colors.border} border-l-4`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Header Info */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Code className={`w-5 h-5 ${colors.icon}`} />
                      <h3 className={`text-xl font-bold ${colors.glow}`}>
                        {exp.title}
                      </h3>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-foreground font-medium">
                        <Award className="w-4 h-4" />
                        {exp.company}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="w-4 h-4" />
                        {exp.type}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                    </div>
                  </div>

                  {/* Description & Achievements */}
                  <div className="lg:col-span-2">
                    <p className="text-foreground/90 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                        <TrendingUp className={`w-4 h-4 ${colors.icon}`} />
                        Key Achievements
                      </div>
                      
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li 
                            key={achIndex}
                            className="flex items-start gap-3 text-sm text-foreground/80"
                          >
                            <div className={`w-1.5 h-1.5 ${colors.bg} rounded-full mt-2 flex-shrink-0`} />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;