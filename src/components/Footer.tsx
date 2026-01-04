import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Services: [
      { label: "Social Media Strategy", href: "#services" },
      { label: "Analytics & Insights", href: "#services" },
      { label: "Brand Growth", href: "#services" },
      { label: "Creative Content", href: "#services" },
    ],
    Company: [
      { label: "About Us", href: "#about" },
      { label: "Case Studies", href: "#case-studies" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  };

  return (
    <footer className="bg-secondary text-secondary-foreground py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-hero rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">S</span>
              </div>
              <span className="font-display font-bold text-xl">
                Social<span className="text-primary">Mouse</span>
              </span>
            </a>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed mb-4">
              Transforming brands into digital powerhouses through strategic social media marketing.
            </p>
            <div className="flex gap-3">
              {["T", "L", "I", "Tk"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center text-xs font-medium transition-all"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-secondary-foreground/70 hover:text-primary text-sm transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-secondary-foreground/60 text-sm">
            © {new Date().getFullYear()} Social Mouse. All rights reserved.
          </p>
          <p className="text-secondary-foreground/60 text-sm">
            Made with ❤️ for brands that dare to stand out
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
