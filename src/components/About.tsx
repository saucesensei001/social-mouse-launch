import { useEffect, useRef } from "react";
import anime from "animejs";
import { Zap, Target, TrendingUp, Users } from "lucide-react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: ".about-card",
              opacity: [0, 1],
              translateY: [40, 0],
              delay: anime.stagger(150),
              duration: 800,
              easing: "easeOutExpo",
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Zap,
      title: "Agile Execution",
      description: "We move fast without breaking things. Our agile approach ensures quick iterations and rapid results.",
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Every campaign is laser-focused on your ideal audience, maximizing engagement and conversions.",
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Growth",
      description: "We let the numbers guide us. Every decision is backed by analytics and real-world performance.",
    },
    {
      icon: Users,
      title: "Community Building",
      description: "We don't just grow followers—we build engaged communities that become brand advocates.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 md:py-32 bg-background relative"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            About Us
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            We're Not Your Average{" "}
            <span className="text-gradient">Marketing Agency</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Social Mouse was born from a simple belief: every brand has a story worth
            sharing. We combine creative storytelling with cutting-edge strategy to
            help brands find their voice and amplify it across the digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="about-card opacity-0 bg-card rounded-2xl p-6 shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/50"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-3xl" />
          <div className="relative bg-card/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-border/50">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                "To empower brands with the tools, strategies, and creativity they need
                to thrive in the ever-evolving digital ecosystem. We're not just
                building campaigns—we're building legacies."
              </p>
              <div className="mt-6 flex items-center justify-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10" />
                <div>
                  <p className="font-semibold text-foreground">The Social Mouse Team</p>
                  <p className="text-sm text-muted-foreground">Founders & Dreamers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
