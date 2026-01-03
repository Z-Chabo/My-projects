import { Mail, Phone, MapPin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-background/50">
      <div className="container max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Let's connect and discuss how we can work together!
          </p>
        </div>

        {/* Contact Information - Centered */}
        <div className="max-w-lg mx-auto text-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Let's Connect
              </h3>
              <p className="text-foreground/70 mb-8">
                Feel free to reach out for collaborations, job opportunities, or
                just to say hello!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6 max-w-md mx-auto">
              {/* Email */}
              <div className="flex items-center space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left flex-1">
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <a
                    href="mailto:zeidanchabo@gmail.com"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    zeidanchabo@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left flex-1">
                  <h4 className="font-semibold text-foreground">Phone</h4>
                  <a
                    href="tel:+15149280804"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    514-928-0804
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left flex-1">
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <span className="text-foreground/70">
                    Montreal, QC, Canada
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
              <a
                href="mailto:zeidanchabo@gmail.com"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                <Mail className="w-4 h-4" />
                Send Email
              </a>
              <a
                href="tel:+15149280804"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg hover:bg-background/50 transition-colors font-medium"
              >
                <Phone className="w-4 h-4" />
                Call Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
