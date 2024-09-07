import React from "react";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { useDeviceType } from "../utils/DevicesTypes";
import { ProjectCard } from "./ProjectCard";
import { ProjectsStyles, TextStyles } from "../styles/styles";

const Projects: React.FC = () => {
  const { isMobile } = useDeviceType();

  return (
    <div className={ProjectsStyles.container}>
      <div className={ProjectsStyles.titleContainer}>
        <h1 className={`text-white ${TextStyles.title}`}>
          Projetos
        </h1>
      </div>
      <div className={`${ProjectsStyles.projectsList} ${isMobile ? 'flex-col items-center' : 'flex-row justify-center'}`}>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            name={project.name}
            description={project.description}
            imgUrl={project.imgUrl}
            icons={project.icons}
          />
        ))}
      </div>
    </div>
  );
};

const WrappedProjects = SectionWrapper(Projects, "projects");
export default WrappedProjects;
