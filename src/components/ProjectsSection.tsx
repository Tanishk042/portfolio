import { ExternalLink, Github, Sparkles, Database, Brain, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "BudgetBuddy",
      subtitle: "Smart Expense Tracking App",
      description: "A modern, user-friendly expense tracking application built with React and TypeScript, designed to empower users to effectively manage their finances. Features interactive dashboards providing clear spending insights, robust tools for tracking expenses and income, and comprehensive monthly and yearly budget planning capabilities.",
      techStack: [
        "React 18 with TypeScript",
        "Vite for fast development", 
        "ShadcnUI components",
        "TailwindCSS for styling",
        "React Query for data management",
        "React Router for navigation"
      ],
      features: [
        "Interactive dashboards with spending insights",
        "Expense and income tracking tools",
        "Monthly and yearly budget planning",
        "Fully responsive design",
        "Secure data management"
      ],
      color: "primary",
      icon: TrendingUp
    },
    {
      title: "ChainMorph",
      subtitle: "AI-Driven Retail & Logistics Platform",
      description: "A cutting-edge, AI-powered full-stack platform for retail and logistics, designed to optimize inventory management, demand forecasting, and delivery operations. Leverages advanced AI for demand forecasting and features blockchain-backed delivery systems.",
      techStack: [
        "Frontend: React (Vite, TypeScript)",
        "Tailwind CSS, Recharts, React-Leaflet",
        "Backend: Python 3.10+, FastAPI",
        "AI: Prophet (ML), pandas, scikit-learn",
        "Database: SQLite with persistent storage"
      ],
      features: [
        "AI demand forecasting using Prophet",
        "Dynamic inventory heatmaps",
        "Smart stock redistribution recommendations", 
        "Live animated dashboards",
        "Blockchain-backed delivery jobs",
        "AI-powered eco-friendly route optimization",
        "Gamification system with eco-bonuses"
      ],
      color: "secondary",
      icon: Brain
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          glow: "text-glow-primary",
          bg: "bg-primary/5",
          border: "border-primary/20",
          icon: "text-primary",
          button: "btn-primary"
        };
      case "secondary":
        return {
          glow: "text-glow-secondary",
          bg: "bg-secondary/5", 
          border: "border-secondary/20",
          icon: "text-secondary",
          button: "btn-spirit"
        };
      default:
        return {
          glow: "text-glow-primary",
          bg: "bg-primary/5",
          border: "border-primary/20", 
          icon: "text-primary",
          button: "btn-primary"
        };
    }
  };

  return (
    <section id="projects" className="py-20 px-6 bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Technique Library
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            Masterpieces crafted with precision and innovation
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-spirit to-energy mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            const Icon = project.icon;
            
            return (
              <div 
                key={index}
                className={`card-hover ${colors.bg} ${colors.border} border group relative overflow-hidden`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-full ${colors.bg} group-hover:shadow-[var(--shadow-primary)] transition-smooth`}>
                      <Icon className={`w-6 h-6 ${colors.icon}`} />
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold ${colors.glow} mb-1`}>
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground font-medium">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                  <Sparkles className={`w-5 h-5 ${colors.icon} opacity-60 group-hover:opacity-100 transition-smooth`} />
                </div>

                {/* Description */}
                <p className="text-foreground/90 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Database className={`w-4 h-4 ${colors.icon}`} />
                    Tech Stack
                  </h4>
                  <div className="space-y-1">
                    {project.techStack.map((tech, techIndex) => (
                      <div 
                        key={techIndex}
                        className="text-sm text-muted-foreground flex items-center gap-2"
                      >
                        <div className={`w-1 h-1 ${colors.bg} rounded-full`} />
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Sparkles className={`w-4 h-4 ${colors.icon}`} />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.slice(0, 4).map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <div className={`w-1 h-1 ${colors.bg} rounded-full mt-2 flex-shrink-0`} />
                        {feature}
                      </div>
                    ))}
                  </div>
                  {project.features.length > 4 && (
                    <div className="text-xs text-muted-foreground mt-2">
                      +{project.features.length - 4} more features
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-border/50">
                  <Button className={colors.button} size="sm">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                  <Button variant="outline" size="sm" className="hover:shadow-primary transition-smooth">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;