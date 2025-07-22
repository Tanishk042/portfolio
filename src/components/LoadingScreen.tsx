import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);

  const phases = [
    "Awakening Power...",
    "Loading Techniques...",
    "Establishing Domain...",
    "Ready for Battle!"
  ];

  useEffect(() => {
    const duration = 3000; // 3 seconds total
    const interval = 50; // Update every 50ms
    const totalSteps = duration / interval;
    
    let currentStep = 0;
    
    const timer = setInterval(() => {
      currentStep++;
      const newProgress = (currentStep / totalSteps) * 100;
      setProgress(newProgress);
      
      // Update phase based on progress
      if (newProgress < 25) setPhase(0);
      else if (newProgress < 50) setPhase(1);
      else if (newProgress < 75) setPhase(2);
      else setPhase(3);
      
      if (currentStep >= totalSteps) {
        clearInterval(timer);
        setTimeout(onComplete, 500);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
      {/* Background Animation */}
      <div className="absolute inset-0 hero-background opacity-20" />
      
      {/* Floating Energy Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
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

      {/* Main Loading Content */}
      <div className="relative z-10 text-center max-w-md mx-auto px-6">
        {/* Main Title */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-2 pulse-glow">
            TANISK
          </h1>
          <div className="text-lg text-muted-foreground">
            Code Shaman
          </div>
        </div>

        {/* Power Circle */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
            {/* Background Circle */}
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="hsl(var(--muted))"
              strokeWidth="4"
              opacity="0.3"
            />
            {/* Progress Circle */}
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="url(#progressGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="314"
              strokeDashoffset={314 - (314 * progress) / 100}
              className="transition-all duration-300 ease-out"
            />
            {/* Gradient Definition */}
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="50%" stopColor="hsl(var(--secondary))" />
                <stop offset="100%" stopColor="hsl(var(--energy))" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Progress Percentage */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-glow-primary">
              {Math.round(progress)}%
            </span>
          </div>
        </div>

        {/* Phase Text */}
        <div className="text-center">
          <div className="text-lg font-medium text-foreground mb-2">
            {phases[phase]}
          </div>
          
          {/* Phase Indicators */}
          <div className="flex justify-center space-x-2">
            {phases.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index <= phase
                    ? "bg-primary shadow-primary"
                    : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Power Level Bar */}
        <div className="mt-8">
          <div className="skill-progress">
            <div 
              className="skill-progress-bar bg-gradient-to-r from-primary via-secondary to-energy"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-xs text-muted-foreground mt-2">
            INITIALIZING FULL-STACK POWERS
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;