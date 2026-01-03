import {
  Code,
  Briefcase,
  Target,
  Monitor,
  Server,
  Users,
  Heart,
  MessageCircle,
  Lightbulb,
  Crown,
  Puzzle,
  Cloud,
  Settings,
} from "lucide-react";

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-background/50">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Skills & <span className="text-primary">Abilities</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Frontend & Backend */}
          <div className="space-y-8">
            {/* Frontend Development */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Monitor className="w-6 h-6 text-primary mr-3" />
                <h4 className="text-xl font-semibold text-foreground">
                  Frontend Development
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "TypeScript",
                  "JavaScript",
                  "HTML5",
                  "CSS3",
                  "Tailwind CSS",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend & Tools */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Server className="w-6 h-6 text-primary mr-3" />
                <h4 className="text-xl font-semibold text-foreground">
                  Backend & Tools
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Node.js",
                  "Python",
                  "Databases",
                  "API Development",
                  "Liquid Templates",
                  "JSON APIs",
                  "Git",
                  "Version Control",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Microsoft CRM & Templates */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Cloud className="w-6 h-6 text-primary mr-3" />
                <h4 className="text-xl font-semibold text-foreground">
                  Microsoft CRM & Templates
                </h4>
              </div>
              <div className="space-y-3 mb-4">
                <p className="text-sm text-foreground/70">
                  Create and manage APIs with Liquid Templates integrated into
                  Microsoft CRM web templates
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Liquid Templates",
                  "Microsoft CRM",
                  "Web Templates",
                  "Page Templates",
                  "API Creation",
                  "JSON Manipulation",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Power Platform & Data */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Settings className="w-6 h-6 text-primary mr-3" />
                <h4 className="text-xl font-semibold text-foreground">
                  Power Platform & Data Management
                </h4>
              </div>
              <div className="space-y-3 mb-4">
                <p className="text-sm text-foreground/70">
                  Manipulate Power Apps data tables and sync with CRM-hosted
                  websites
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Power Apps",
                  "Data Tables",
                  "CRM Integration",
                  "Website Sync",
                  "Data Manipulation",
                  "Microsoft Web Files",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="space-y-8">
            {/* Development Tools */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 text-primary mr-3" />
                <h4 className="text-xl font-semibold text-foreground">
                  Development Tools
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "VS Code",
                  "Git & GitHub",
                  "pnpm",
                  "npm & yarn",
                  "Mocker Server",
                  "Chrome DevTools",
                  "Postman",
                  "Terminal",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases & APIs */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Target className="w-6 h-6 text-primary mr-3" />
                <h4 className="text-xl font-semibold text-foreground">
                  Databases & APIs
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "REST APIs",
                  "JSON",
                  "SQL",
                  "Database Design",
                  "API Integration",
                  "Data Modeling",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Methodologies */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Briefcase className="w-6 h-6 text-primary mr-3" />
                <h4 className="text-xl font-semibold text-foreground">
                  Development Practices
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Agile Development",
                  "Pull Requests",
                  "Code Review",
                  "Testing",
                  "Local/Dev/UAT/QA/Prod",
                  "Debugging",
                  "Version Control",
                  "Clean Code",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Soft <span className="text-primary">Skills</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Team Collaboration */}
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-primary/15 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                Team Player
              </h4>
              <p className="text-sm text-foreground/70">
                Works exceptionally well with teams, fostering collaboration and
                mutual support
              </p>
            </div>

            {/* Positive Attitude */}
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-primary/15 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                Positive & Friendly
              </h4>
              <p className="text-sm text-foreground/70">
                Brings positive energy and friendliness to every interaction and
                project
              </p>
            </div>

            {/* Communication */}
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-primary/15 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                Clear Communicator
              </h4>
              <p className="text-sm text-foreground/70">
                Excellent at articulating ideas and explaining complex concepts
                clearly
              </p>
            </div>

            {/* Problem Solving */}
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-primary/15 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                Persistent Problem Solver
              </h4>
              <p className="text-sm text-foreground/70">
                Never leaves a problem unsolved - determined to find solutions
                no matter the challenge
              </p>
            </div>

            {/* Chess Passion */}
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-primary/15 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                Strategic Thinker
              </h4>
              <p className="text-sm text-foreground/70">
                Passionate chess player - develops strategic thinking and
                pattern recognition skills
              </p>
            </div>

            {/* Analytical Mind */}
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-primary/15 rounded-full flex items-center justify-center mx-auto mb-4">
                <Puzzle className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                Analytical Mind
              </h4>
              <p className="text-sm text-foreground/70">
                Approaches challenges systematically with logical thinking and
                attention to detail
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
