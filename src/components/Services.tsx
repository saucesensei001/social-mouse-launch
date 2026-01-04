import { useEffect, useRef } from "react";
import anime from "animejs";
import { 
  Share2, 
  BarChart3, 
  Rocket, 
  Palette, 
  MessageSquare, 
  Video,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: ".service-card",
              opacity: [0, 1],
              scale: [0.9, 1],
              delay: anime.stagger(100, { grid: [3, 2], from: "center" }),
              duration: 700,
              easing: "easeOutElastic(1, .8)",
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Share2,
      title: "Social Media Strategy",
      description: "Custom-tailored social media blueprints designed to elevate your brand presence and drive engagement across all platforms.",
      features: ["Platform Analysis", "Content Calendar", "Growth Roadmap"],
      color: "from-primary to-primary/70",
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Deep-dive analytics that transform raw data into actionable insights, helping you understand what truly moves the needle.",
      features: ["Performance Tracking", "Audience Insights", "ROI Reports"],
      color: "from-accent to-accent/70",
    },
    {
      icon: Rocket,
      title: "Brand Growth",
      description: "Accelerate your brand's digital footprint with proven growth strategies that turn followers into loyal customers.",
      features: ["Viral Campaigns", "Influencer Collabs", "Paid Media"],
      color: "from-secondary to-secondary/70",
    },
    {
      icon: Palette,
      title: "Creative Content",
      description: "Scroll-stopping content that captures attention and sparks conversations. From graphics to videos, we create it all.",
      features: ["Visual Design", "Copywriting", "Brand Voice"],
      color: "from-primary to-accent",
    },
    {
      icon: MessageSquare,
      title: "Community Management",
      description: "Build and nurture thriving online communities that become your brand's biggest advocates and organic amplifiers.",
      features: ["Engagement", "Crisis Management", "Moderation"],
      color: "from-accent to-primary",
    },
    {
      icon: Video,
      title: "Video Production",
      description: "Cinematic storytelling that brings your brand to life. From short-form reels to full production campaigns.",
      features: ["Reels & TikToks", "Brand Films", "Live Events"],
      color: "from-secondary to-accent",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-24 md:py-32 bg-muted/30 relative"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.05),transparent_50%),radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.05),transparent_50%)]" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Our Services
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Everything You Need to{" "}
            <span className="text-gradient">Dominate Social</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We offer a full suite of digital marketing services designed to help your
            brand stand out, connect with audiences, and drive real business results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="service-card opacity-0 group bg-card rounded-2xl p-6 shadow-card hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border/50 relative overflow-hidden"
            >
              {/* Gradient Overlay on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              
              <a
                href="#contact"
                className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button variant="hero" size="lg" className="group" asChild>
            <a href="#contact">
              Get a Custom Strategy
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
