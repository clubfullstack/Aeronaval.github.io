import React from 'react';
import RocketImg from '../assets/rocket-img.jpg';
import LogoMlbr from '../assets/logo-mlbr.png';
import { SectionWrapper } from '../hoc';
import { ServicesStyles, TextStyles } from '../styles/styles';

const Services: React.FC = () => {
  return (
    <section
      className={ServicesStyles.section}
      style={{ 
        backgroundImage: ServicesStyles.background(RocketImg), 
        backgroundSize: ServicesStyles.backgroundStyle
      }}
    >
      {/* Título Fora do Card */}
      <div className={ServicesStyles.titleContainer}>
      <h1 className={`text-white ${TextStyles.title}`}>Serviços</h1>
      </div>

      <div className="flex items-center justify-center w-full h-full p-8">
        <div className={ServicesStyles.card.container}>
          <p className={TextStyles.paragraph}>
            <strong className={TextStyles.subTitle}>Aeroespacial</strong>
            <br />
            <br />
            O projeto do Veículo Lançador de Pequeno Porte (VLPP) é uma iniciativa estratégica, financiada pela Financiadora de Estudos e Projetos (Finep) e coordenada pela Agência Espacial Brasileira (AEB). Com o objetivo de desenvolver um microlançador capaz de colocar pequenos satélites em órbita, o VLPP busca atender às crescentes demandas do mercado espacial por soluções de baixo custo e alta eficiência. Esse projeto marca um avanço significativo na autonomia do Brasil no setor aeroespacial, inserindo o país de forma competitiva no cenário global de lançamentos espaciais. Alinhado à política nacional de desenvolvimento científico e tecnológico, o VLPP também fortalece a capacidade industrial e inovadora do Brasil.
          </p>
          <img
            src={LogoMlbr}
            alt="Logo MLBR"
            className={ServicesStyles.card.logo}
          />
        </div>
      </div>
    </section>
  );
};

const NamedServices = SectionWrapper(Services, "services");
export default NamedServices;
