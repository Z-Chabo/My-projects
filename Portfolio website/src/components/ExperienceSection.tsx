import { Briefcase, Calendar, MapPin } from "lucide-react";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Real-world experience building enterprise software solutions
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {/* Genetec Experience */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>

            <div className="relative flex items-start space-x-8 pb-12">
              {/* Timeline dot */}
              <div className="flex-shrink-0 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center border-4 border-primary">
                <Briefcase className="w-7 h-7 text-primary" />
              </div>

              {/* Experience content */}
              <div className="flex-1 bg-card border border-border rounded-xl p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">
                      Software Developer Intern
                    </h3>
                    <div className="text-xl font-semibold text-foreground mb-2">
                      Genetec Inc.
                    </div>
                    <div className="flex items-center text-foreground/70 text-sm mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      Global Leader in Security & Surveillance Technology
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-primary font-semibold">
                        Fall 2025
                      </span>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                      Current Position
                    </span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      Real-World Project Experience:
                    </h4>
                    <ul className="space-y-3 text-foreground/80">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Worked on Genetec website project with modular React
                          architecture - each page as separate project with own
                          constants, utils, types, among other folders
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                        Implemented APIs for Genetec website in web templates
                          with testing through local (Mocker servers with fake
                          data), dev, QA, UAT environments before production
                          deployment with CRM-integrated APIs
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Built individual React projects using pnpm, generated
                          CSS/JS dist files for CRM web files integration
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                        Managed pull requests through Microsoft platforms with
                          colleague code reviews in professional environment
                        </span>
                      </li>
                    </ul>
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
