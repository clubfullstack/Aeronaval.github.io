import React, { useState } from "react";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { useDeviceType } from "../utils/DevicesTypes";
import { ProjectCard } from "./ProjectCard";
import { ProjectsStyles, TextStyles } from "../styles/styles";

const Projects: React.FC = () => {
  const { isMobile } = useDeviceType();

  // Estado para controlar a visibilidade do card
  const [isHovercraftVisible, setHovercraftVisible] = useState(false);

  // Função para alternar a visibilidade do card
  const toggleHovercraftVisibility = () => {
    setHovercraftVisible(!isHovercraftVisible);
  };

  return (
    <div className={ProjectsStyles.container}>
      <div className={ProjectsStyles.titleContainer}>
        <h1 className={`text-white ${TextStyles.title}`}>
          Projetos
        </h1>
      </div>

      {/* Título Hovercraft que funciona como um botão */}
      <button
        onClick={toggleHovercraftVisibility}
        className={`${TextStyles.subTitle} cursor-pointer mb-2 ml-4`}>
        Hovercraft
      </button>

      {/* Exibe o card com o texto sobre Hovercraft se o estado for true */}
      {isHovercraftVisible && (
        <div className={ProjectsStyles.hoverSection.container}>
          <p className={ProjectsStyles.hoverSection.paragraph}>
            Os hovercrafts são veículos anfíbios capazes de se deslocarem sobre diferentes superfícies, como água, terra e terrenos pantanosos, utilizando um colchão de ar gerado por motores. Esse sistema de sustentação permite que o veículo levite a uma curta distância do solo, reduzindo o atrito e garantindo alta mobilidade em áreas de difícil acesso. Seu uso é amplamente aplicado em operações de resgate, transporte em regiões alagadas e patrulhas, especialmente em locais onde veículos convencionais enfrentam limitações.
            <br /><br />
            A Aeronaval tem avançado no desenvolvimento de hovercrafts afim de enfrentar condições climáticas extremas e desastres naturais, utilizando tecnologias aeroespaciais e navais para criação de soluções robustas e seguras proporcionando mobilidade.
            Para os aventureiros, seus hovercrafts oferecem uma forma única de explorar pântanos, lagos e litorais, aproveitando de uma pesca ou desfrutando de paisagens deslumbrantes, tornando cada passeio uma experiência inesquecível em terrenos inacessíveis para outros veículos.
          </p>
        </div>
      )}

      <div className={`${ProjectsStyles.projectsList} ${isMobile ? 'flex-col items-center' : 'flex-row justify-center'}`}>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            name={project.name}
            description={project.description}
            imgUrl={project.imgUrl}
            icons={project.icons} // Passa os ícones aqui
          />
        ))}
      </div>
    </div>
  );
};

const WrappedProjects = SectionWrapper(Projects, "projects");
export default WrappedProjects;
