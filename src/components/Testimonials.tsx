import { useEffect, useRef } from "react";
import anime from "animejs";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: ".testimonial-card",
              opacity: [0, 1],
              translateY: [30, 0],
              delay: anime.stagger(150),
              duration: 800,
              easing: "easeOutExpo",
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

  const testimonials = [
    {
      quote: "Social Mouse didn't just manage our social media—they transformed it into our most powerful marketing channel. The ROI has been incredible.",
      author: "Sarah Chen",
      role: "CMO, TechFlow",
      rating: 5,
    },
    {
      quote: "Their creative team is absolutely phenomenal. Every piece of content they create resonates with our audience and drives real engagement.",
      author: "Marcus Johnson",
      role: "Founder, GreenLeaf",
      rating: 5,
    },
    {
      quote: "We've worked with many agencies, but Social Mouse is different. They genuinely care about our success and it shows in every campaign.",
      author: "Emily Rodriguez",
      role: "Marketing Director, FitPro",
      rating: 5,
    },
    {
      quote: "The analytics and insights they provide have completely changed how we approach our digital strategy. Game-changing partnership.",
      author: "David Park",
      role: "CEO, Luxe Living",
      rating: 5,
    },
    {
      quote: "From day one, they understood our brand voice perfectly. Our community has grown 10x and engagement is through the roof.",
      author: "Lisa Thompson",
      role: "Brand Manager, StyleHouse",
      rating: 5,
    },
    {
      quote: "Professional, creative, and results-driven. Social Mouse delivers on every promise and then some. Highly recommend!",
      author: "Alex Rivera",
      role: "Co-founder, NexGen",
      rating: 5,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-24 md:py-32 bg-muted/30 relative"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.03),transparent_70%)]" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Testimonials
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Loved by Brands{" "}
            <span className="text-gradient">Worldwide</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our clients have to say
            about working with Social Mouse.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card opacity-0 bg-card rounded-2xl p-6 shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border/50 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Quote className="w-5 h-5 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.author[0]}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground text-sm mb-8">
            Trusted by innovative brands worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-50">
            {["TechFlow", "GreenLeaf", "FitPro", "Luxe Living", "StyleHouse", "NexGen"].map(
              (brand) => (
                <span
                  key={brand}
                  className="font-display font-bold text-xl md:text-2xl text-foreground"
                >
                  {brand}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
