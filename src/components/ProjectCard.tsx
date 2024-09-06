import React from "react";
import { ProjectCardStyles, TextStyles } from "../styles/styles";

interface ProjectCardProps {
  name: string;
  description: string;
  imgUrl: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, imgUrl: imageUrl }) => {
  return (
    <div className={ProjectCardStyles.container}>
      <img
        src={imageUrl}
        alt={name}
        className={ProjectCardStyles.image}
      />
      <div className={ProjectCardStyles.textContainer}>
        <h3 className={`mb-2 ${TextStyles.subTitle}`}>{name}</h3>
        <p className={`drop-shadow-[0_35px_35px_rgba(0,0,0,0.99)] ${TextStyles.paragraph}`}>{description}</p>
      </div>
    </div>
  );
};
