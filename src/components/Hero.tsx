import { useEffect, useRef } from "react";
import anime from "animejs";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  const headlineRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = anime.timeline({ easing: "easeOutExpo" });

    // Animate headline words
    timeline
      .add({
        targets: ".hero-word",
        opacity: [0, 1],
        translateY: [60, 0],
        rotateX: [90, 0],
        duration: 1200,
        delay: anime.stagger(100),
      })
      .add(
        {
          targets: subtitleRef.current,
          opacity: [0, 1],
          translateY: [30, 0],
          duration: 800,
        },
        "-=600"
      )
      .add(
        {
          targets: ctaRef.current,
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 600,
        },
        "-=400"
      )
      .add(
        {
          targets: ".hero-float",
          translateY: [-10, 10],
          duration: 3000,
          direction: "alternate",
          loop: true,
          easing: "easeInOutSine",
        },
        "-=200"
      );
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl hero-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl hero-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Leading Digital Growth Agency
          </div>

          {/* Headline */}
          <div ref={headlineRef} className="mb-6">
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-foreground [perspective:1000px]">
              <span className="hero-word inline-block opacity-0">We</span>{" "}
              <span className="hero-word inline-block opacity-0">Make</span>{" "}
              <span className="hero-word inline-block opacity-0">Your</span>{" "}
              <span className="hero-word inline-block opacity-0 text-gradient">Brand</span>
              <br />
              <span className="hero-word inline-block opacity-0">Go</span>{" "}
              <span className="hero-word inline-block opacity-0 text-gradient">Viral</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0"
          >
            Social Mouse transforms brands into digital powerhouses. From strategy to
            execution, we craft social experiences that captivate audiences and drive
            measurable growth.
          </p>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0"
          >
            <Button variant="hero" size="xl" className="group">
              Start Your Growth Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="group">
              <Play className="w-5 h-5" />
              Watch Our Story
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Brands Grown" },
              { value: "50M+", label: "Reach Generated" },
              { value: "98%", label: "Client Retention" },
              { value: "12x", label: "Average ROI" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${1.5 + index * 0.1}s` }}
              >
                <div className="font-display font-bold text-3xl md:text-4xl text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "2s" }}>
        <span className="text-xs text-muted-foreground">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
