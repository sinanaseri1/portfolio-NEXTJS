import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";

// Define your skill categories.
export const skillCategories = {
  programming: "Programming",
  database: "Database Management",
  cloud: "Cloud Services",
  methodologies: "Development Methodologies",
  tools: "Development Tools",
};

// Updated Skill interface, removing logos.
interface Skill {
  id: number; // numeric ID to avoid string vs. number issues
  name: string;
  category: keyof typeof skillCategories;
}

// Static list of skills, each with an integer ID and category.
const staticSkills: Skill[] = [
  // Programming
  { id: 1, name: "Java", category: "programming" },
  { id: 2, name: "MATLAB", category: "programming" },
  { id: 3, name: "JavaScript", category: "programming" },
  { id: 4, name: "Node.js", category: "programming" },
  { id: 5, name: "Next.js", category: "programming" },
  { id: 6, name: "ReactJS", category: "programming" },
  { id: 7, name: "JSX", category: "programming" },
  { id: 8, name: "Tailwind CSS", category: "programming" },
  { id: 9, name: "TypeScript", category: "programming" },
  { id: 10, name: "C#", category: "programming" },
  { id: 11, name: ".NET", category: "programming" },
  { id: 12, name: "Dart", category: "programming" },
  { id: 13, name: "HTML5", category: "programming" },

  // Database Management
  { id: 14, name: "MySQL", category: "database" },
  { id: 15, name: "MongoDB", category: "database" },
  { id: 16, name: "SQL", category: "database" },
  { id: 17, name: "Excel", category: "database" },

  // Cloud Services
  { id: 18, name: "AWS (EC2, S3, RDS)", category: "cloud" },
  { id: 19, name: "Render", category: "cloud" },

  // Development Methodologies
  { id: 20, name: "Agile", category: "methodologies" },
  { id: 21, name: "Test Driven Development (TDD)", category: "methodologies" },

  // Development Tools
  { id: 22, name: "Spring Boot", category: "tools" },
  { id: 23, name: "Kubernetes", category: "tools" },
  { id: 24, name: "JUnit", category: "tools" },
  { id: 25, name: "CI/CD", category: "tools" },
  { id: 26, name: "Git", category: "tools" },
  { id: 27, name: "Flutter", category: "tools" },
];

export default function About() {
  // Group skills by category.
  const skillsByCategory = staticSkills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<keyof typeof skillCategories, Skill[]>);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SectionHeading
        title="About Me"
        subtitle="Dedicated to delivering innovative software solutions with precision"
      />

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Hello, I’m a Professional Software Engineer
            </h3>
            <p className="mb-4 text-muted-foreground">
              I specialize in designing and developing robust, scalable web applications. 
              With a strong foundation in full-stack development, I transform complex 
              requirements into efficient, maintainable solutions.
            </p>
            <p className="mb-4 text-muted-foreground">
              My approach emphasizes clean architecture, rigorous testing, and continuous 
              improvement. I stay current with industry trends to ensure my work not only 
              meets but exceeds modern standards.
            </p>
            <p className="text-muted-foreground">
              Outside of coding, I actively contribute to open-source projects and engage 
              with the tech community to foster collaboration and innovation.
            </p>
          </div>
        </motion.div>

        {/* Profile Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
            alt="Professional Portrait"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>

      <SectionHeading
        title="Technical Expertise"
        subtitle="Proficiencies and tools I excel in"
      />

      <div className="space-y-8">
        {Object.entries(skillCategories).map(([key, label]) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">{label}</h3>
            <div className="flex flex-wrap gap-3">
              {skillsByCategory[key as keyof typeof skillCategories]?.map((skill) => (
                <motion.div
                  key={skill.id}
                  className="p-2 px-4 bg-secondary rounded-lg text-secondary-foreground cursor-pointer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}      // zoom effect on hover
                  whileTap={{ scale: 0.95 }}        // slight "shrink" on click
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
