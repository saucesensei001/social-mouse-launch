import { useState, useEffect, useRef } from "react";
import anime from "animejs";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const CaseStudies = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const caseStudies = [
    {
      brand: "TechFlow",
      industry: "SaaS",
      result: "340% increase in social engagement",
      description: "We transformed TechFlow's social presence from dormant to dominant. Through strategic content pillars and community engagement, we built a thriving ecosystem of tech enthusiasts.",
      stats: { followers: "150K+", engagement: "8.5%", leads: "2.3K" },
      color: "from-blue-500 to-cyan-500",
    },
    {
      brand: "GreenLeaf",
      industry: "Sustainable Fashion",
      result: "5x growth in 6 months",
      description: "GreenLeaf needed to reach eco-conscious millennials. We crafted a storytelling strategy that highlighted their sustainability mission, resulting in viral organic growth.",
      stats: { followers: "89K", engagement: "12.1%", revenue: "+180%" },
      color: "from-green-500 to-emerald-500",
    },
    {
      brand: "FitPro",
      industry: "Fitness & Wellness",
      result: "1M+ video views monthly",
      description: "We turned FitPro into a content powerhouse with viral workout reels, trainer spotlights, and community challenges that kept their audience coming back for more.",
      stats: { views: "1.2M", subscribers: "45K", signups: "8.7K" },
      color: "from-orange-500 to-red-500",
    },
    {
      brand: "Luxe Living",
      industry: "Real Estate",
      result: "78% increase in qualified leads",
      description: "Premium real estate demands premium content. We created a sophisticated social presence that attracted high-net-worth individuals and drove serious buyer inquiries.",
      stats: { reach: "2.1M", inquiries: "+78%", closings: "32" },
      color: "from-purple-500 to-pink-500",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: ".case-study-content",
              opacity: [0, 1],
              translateX: [-30, 0],
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

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % caseStudies.length);
    animateSlide();
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
    animateSlide();
  };

  const animateSlide = () => {
    anime({
      targets: ".case-study-card",
      opacity: [0, 1],
      scale: [0.95, 1],
      duration: 500,
      easing: "easeOutExpo",
    });
  };

  const currentCase = caseStudies[activeIndex];

  return (
    <section
      ref={sectionRef}
      id="case-studies"
      className="py-24 md:py-32 bg-background relative overflow-hidden"
    >
      {/* Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${currentCase.color} opacity-5 transition-all duration-700`} />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16 case-study-content">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            Case Studies
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Real Results for{" "}
            <span className="text-gradient">Real Brands</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. See how we've helped brands like yours
            achieve extraordinary growth through strategic social marketing.
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-5xl mx-auto">
          <div className="case-study-card bg-card rounded-3xl shadow-card overflow-hidden border border-border/50">
            <div className="grid lg:grid-cols-2">
              {/* Visual Side */}
              <div className={`bg-gradient-to-br ${currentCase.color} p-8 md:p-12 flex flex-col justify-between min-h-[300px] lg:min-h-[450px]`}>
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
                    {currentCase.industry}
                  </span>
                  <h3 className="font-display font-bold text-3xl md:text-4xl text-white mb-2">
                    {currentCase.brand}
                  </h3>
                  <p className="text-white/80 text-lg">
                    {currentCase.result}
                  </p>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {Object.entries(currentCase.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="font-display font-bold text-2xl text-white">
                        {value}
                      </div>
                      <div className="text-white/60 text-xs uppercase tracking-wider">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <h4 className="font-display font-semibold text-xl text-foreground mb-4">
                    The Challenge & Solution
                  </h4>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {currentCase.description}
                  </p>
                  <Button variant="outline" size="sm" className="group">
                    View Full Case Study
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Button>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                  <div className="flex gap-2">
                    {caseStudies.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setActiveIndex(index);
                          animateSlide();
                        }}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          index === activeIndex
                            ? "bg-primary w-8"
                            : "bg-muted hover:bg-muted-foreground/50"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={prevSlide}
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
