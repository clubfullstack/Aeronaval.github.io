import React, { useState } from "react";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { useDeviceType } from "../utils/DevicesTypes";
import { ProjectCard } from "./ProjectCard";
import { ProjectsStyles, TextStyles } from "../styles/styles";

const Projects: React.FC = () => {
  const { isMobile } = useDeviceType();

  // Estados para controlar a visibilidade dos cards
  const [isHovercraftVisible, setHovercraftVisible] = useState(false);
  const [isPlasmaTexVisible, setPlasmaTexVisible] = useState(false);

  // Funções para alternar a visibilidade dos cards
  const toggleHovercraftVisibility = () => {
    setHovercraftVisible(!isHovercraftVisible);
  };

  const togglePlasmaTexVisibility = () => {
    setPlasmaTexVisible(!isPlasmaTexVisible);
  };

  return (
    <div className={ProjectsStyles.container}>
      <div className={ProjectsStyles.titleContainer}>
        <h1 className={`text-white ${TextStyles.title}`}>
          Projetos
        </h1>
      </div>

      {/* Botão para Hovercraft */}
    <div className={ProjectsStyles.buttonContainer}>
      <button
        onClick={toggleHovercraftVisibility}
        className={`${ProjectsStyles.toggleButton}`}>
        Hovercraft
      </button>
    </div>

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



      {/* Lista dos projetos */}
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
      
            {/* Botão para PlasmaTex */}
    <div className={ProjectsStyles.buttonContainer}>
      <button
        onClick={togglePlasmaTexVisibility}
        className={`${ProjectsStyles.toggleButton} mb-2 ml-4`}>
        PlasmaTex
      </button>
    </div>  

      {/* Exibe o card com o texto sobre PlasmaTex se o estado for true */}
      {isPlasmaTexVisible && (
        <div className={ProjectsStyles.hoverSection.container}>
          <p className={ProjectsStyles.hoverSection.paragraph}>
            PlasmaTex é um projeto inovador que visa desenvolver uma nova geração de materiais texturizados utilizando tecnologia de plasma. Esses materiais oferecem propriedades únicas, como alta resistência a impactos e resistência a condições ambientais extremas.
            <br /><br />
            A Aeronaval está explorando aplicações do PlasmaTex em setores como moda, transporte e proteção pessoal, visando não apenas a funcionalidade, mas também a estética e o conforto dos produtos finais. Com PlasmaTex, buscamos redefinir o que é possível em design e engenharia de materiais.
          </p>
        </div>
      )}
    </div>
  );
};

const WrappedProjects = SectionWrapper(Projects, "projects");
export default WrappedProjects;
