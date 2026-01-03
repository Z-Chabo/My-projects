import { Briefcase, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            software developer with hands-on industry experience and a love for
            creating innovations that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Personal Introduction */}
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                <User className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  Me in a nutshell
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                I'm a{" "}
                <span className="text-primary font-semibold">
                  Software Developer
                </span>{" "}
                that loves building modern, user-friendly applications. My
                journey in software development has been driven by curiosity and
                a constant desire to learn and grow.
              </p>

              <p>
                Recently, I had the incredible opportunity to work as a{" "}
                <span className="text-primary font-semibold">
                  Software Developer Intern at Genetec
                </span>{" "}
                during Fall 2025, where I gained valuable real-world experience
                in professional software development.
              </p>

              <p>
                I love tackling complex problems, which is something I became
                aware of when I started playing chess. I also love turning my
                ideas into reality through clean, efficient code. Whether it's
                building responsive web applications, creating interactive
                games, or developing management systems, I approach each project
                with enthusiasm and attention to detail.
              </p>
            </div>
          </div>

          {/* Personal Qualities */}
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                <Briefcase className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  What Drives Me
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-foreground/80">
              <p>
                I believe in writing clean, maintainable code and creating
                solutions that truly make a difference. Every project is an
                opportunity to learn something new and push the boundaries of
                what's possible.
              </p>
              <p>
                My approach to software development always prioritizes the end
                user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
