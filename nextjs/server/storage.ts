import { type Project, type Skill, type InsertProject, type InsertSkill } from "@shared/schema";

export interface IStorage {
  getProjects(): Promise<Project[]>;
  getSkills(): Promise<Skill[]>;
  initialize(): Promise<void>;
}

export class MemStorage implements IStorage {
  private projects: Project[] = [];
  private skills: Skill[] = [];

  async initialize() {
    // Initialize with sample data
    this.projects = [
      {
        id: 1,
        title: "Revenge of a Samurai",
        description: "An immersive JavaScript game with stunning visuals and smooth gameplay.",
        image: "https://images.unsplash.com/photo-1534527489986-3e3394ca569c",
        technologies: ["JavaScript", "HTML5", "Tailwind CSS"],
        demoUrl: "https://demo.example.com/samurai",
        githubUrl: "https://github.com/example/samurai",
      },
      {
        id: 2,
        title: "Quiz Website",
        description: "Interactive quiz platform with real-time scoring and leaderboards.",
        image: "https://images.unsplash.com/photo-1515923256482-1c04580b477c",
        technologies: ["Tailwind CSS", "HTML5"],
        demoUrl: "https://demo.example.com/quiz",
        githubUrl: "https://github.com/example/quiz",
      },
      {
        id: 3,
        title: "Table Tennis Hobby Site",
        description: "Community platform for table tennis enthusiasts.",
        image: "https://images.unsplash.com/photo-1529678407585-55ac0053aa47",
        technologies: ["HTML", "Tailwind CSS"],
        demoUrl: "https://demo.example.com/tabletennis",
        githubUrl: "https://github.com/example/tabletennis",
      },
      {
        id: 4,
        title: "Weather Forecast App",
        description: "Real-time weather forecasting with OpenWeather API integration.",
        image: "https://images.unsplash.com/photo-1491816324943-a9fbbe0e83e7",
        technologies: ["Next.js", "OpenWeather API"],
        demoUrl: "https://demo.example.com/weather",
        githubUrl: "https://github.com/example/weather",
      }
    ];

    this.skills = [
      // Programming Languages & Frameworks
      { id: 1, name: "Java", category: "Programming" },
      { id: 2, name: "MATLAB", category: "Programming" },
      { id: 3, name: "JavaScript", category: "Programming" },
      { id: 4, name: "Node.js", category: "Programming" },
      { id: 5, name: "Next.js", category: "Programming" },
      { id: 6, name: "ReactJS", category: "Programming" },
      { id: 7, name: "JSX", category: "Programming" },
      { id: 8, name: "Tailwind CSS", category: "Programming" },
      { id: 9, name: "TypeScript", category: "Programming" },
      { id: 10, name: "C#", category: "Programming" },
      { id: 11, name: ".NET", category: "Programming" },
      { id: 12, name: "Dart", category: "Programming" },
      { id: 13, name: "HTML5", category: "Programming" },

      // Database Management
      { id: 14, name: "MySQL", category: "Database Management" },
      { id: 15, name: "MongoDB", category: "Database Management" },
      { id: 16, name: "SQL", category: "Database Management" },
      { id: 17, name: "Excel", category: "Database Management" },

      // Cloud Services
      { id: 18, name: "AWS EC2", category: "Cloud Services" },
      { id: 19, name: "AWS S3", category: "Cloud Services" },
      { id: 20, name: "AWS RDS", category: "Cloud Services" },
      { id: 21, name: "Render", category: "Cloud Services" },

      // Development Methodologies
      { id: 22, name: "Agile", category: "Development Methodologies" },
      { id: 23, name: "Test-Driven Development (TDD)", category: "Development Methodologies" },

      // Development Tools
      { id: 24, name: "Spring Boot", category: "Development Tools" },
      { id: 25, name: "Kubernetes", category: "Development Tools" },
      { id: 26, name: "JUnit", category: "Development Tools" },
      { id: 27, name: "CI/CD", category: "Development Tools" },
      { id: 28, name: "Git", category: "Development Tools" },
      { id: 29, name: "Flutter", category: "Development Tools" }
    ];
  }

  async getProjects(): Promise<Project[]> {
    return this.projects;
  }

  async getSkills(): Promise<Skill[]> {
    return this.skills;
  }
}

export const storage = new MemStorage();
await storage.initialize();