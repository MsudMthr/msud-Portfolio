import Image from "next/image";
import React from "react";
import { Project } from "src/interfaces/interface";
interface ProjectDetailProps {
  project: Project;
}
const ProjectDetail = ({ project }: ProjectDetailProps) => {
  return (
    <div>
      <Image src={project.cover.url} alt={project.name} width={200} height={200} />
    </div>
  );
};

export default ProjectDetail;
