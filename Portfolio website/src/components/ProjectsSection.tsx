interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  features: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Cuisine Recipes App",
    description:
      "React-based recipe search application with API integration, allowing users to browse recipes and view detailed cooking instructions and ingredients.",
    technologies: ["React", "JavaScript", "Vite", "CSS Modules"],
    category: "Web Application",
    features: [
      "Recipe Search API",
      "Detailed Food Information",
      "Ingredient Lists",
      "LocalStorage Caching",
    ],
  },
  {
    id: 2,
    title: "Student Management System",
    description:
      "Java-based student information system for managing student records, GPA tracking, course enrollment, and academic year progression.",
    technologies: ["Java", "OOP", "Data Structures"],
    category: "Desktop Application",
    features: [
      "Student Records Management",
      "GPA Calculation",
      "Course Tracking",
      "Credit Management",
    ],
  },
  {
    id: 3,
    title: "Email Application",
    description:
      "Java console application for generating company email addresses with department selection and custom mailbox capacity.",
    technologies: ["Java", "Scanner", "OOP"],
    category: "Console Application",
    features: [
      "Email Generation",
      "Department Selection",
      "Mailbox Capacity",
      "Password Management",
    ],
  },
  {
    id: 4,
    title: "Pacman Game",
    description:
      "Classic Pacman game recreation using Java Swing with collision detection, ghost AI, and scoring system.",
    technologies: ["Java", "Swing", "AWT", "Game Logic"],
    category: "Game Development",
    features: [
      "Classic Gameplay",
      "Collision Detection",
      "Ghost Animations",
      "Pacman Animation",
      "Score Tracking",
    ],
  },
  {
    id: 5,
    title: "ToDo List App",
    description:
      "React-based task management application with add, delete, and complete functionality for organizing daily tasks.",
    technologies: ["React", "JavaScript", "Vite", "CSS Modules"],
    category: "Productivity",
    features: [
      "Task Management",
      "Add/Delete Tasks",
      "Task Completion",
      "Responsive Design",
    ],
  },
  {
    id: 6,
    title: "Random Password Generator",
    description:
      "JavaScript utility for generating secure random passwords with customizable options for length and character types.",
    technologies: ["JavaScript", "Random Generation", "Security"],
    category: "Utility",
    features: [
      "Customizable Length",
      "Character Set Options",
      "Lowercase/Uppercase",
      "Numbers & Symbols",
    ],
  },
  {
    id: 7,
    title: "Mario Club Website",
    description:
      "Static fan website for Mario games featuring responsive design, navigation menu, and image gallery.",
    technologies: ["HTML", "CSS", "Responsive Design"],
    category: "Website",
    features: [
      "Welcome Banner",
      "Navigation Menu",
      "Image Gallery",
      "Email Form",
    ],
  },
  {
    id: 8,
    title: "Dice Rolling Website",
    description:
      "Simple interactive dice rolling application that lets users roll multiple dice with dynamic image display.",
    technologies: ["JavaScript", "HTML", "CSS"],
    category: "Web Utility",
    features: [
      "Multiple Dice Rolling",
      "Dynamic Image Display",
      "User Input",
      "Random Generation",
    ],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Here are some of the projects I've built, showing my skills in
            web development, game development, and creative problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Project Header */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-foreground mb-2">
                  Technologies:
                </h4>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-background/50 text-foreground/80 px-2 py-1 rounded border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-foreground mb-2">
                  Key Features:
                </h4>
                <ul className="text-xs text-foreground/70 space-y-1">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16">
          <p className="text-foreground/60 mb-4">
            Interested in working together or want to see more projects?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};
