import { useQuery } from "@tanstack/react-query";
import { type Project } from "@shared/schema";
import ProjectCard from "@/components/project-card";
import SectionHeading from "@/components/section-heading";

export default function Projects() {
  const { data: projects = [] } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SectionHeading
        title="Projects"
        subtitle="A selection of my recent work and personal projects"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
