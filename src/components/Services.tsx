import React from 'react';
import RocketImg from '../assets/rocket-img.jpg';
import LogoMlbr from '../assets/logo-mlbr.png';
import { SectionWrapper } from '../hoc';
import { ServicesStyles, TextStyles } from '../styles/styles';

const Services: React.FC = () => {
  return (
    <section className={ServicesStyles.section}>
      <div className={ServicesStyles.dividerTop}></div>
      <div 
        className={ServicesStyles.backgroundLayer}
        style={{ 
          backgroundImage: `url(${RocketImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.9) contrast(1.1)',
        }}
      ></div>

      <div className="relative flex items-center justify-center w-full h-full p-8">
        <div className={ServicesStyles.card.container}>
          <p className={TextStyles.paragraph}>
            <strong className={TextStyles.title}>Serviços</strong>
            <br />
            <br />
            O projeto do Veículo Lançador de Pequeno Porte (VLPP) é uma iniciativa estratégica, financiada pela Financiadora de Estudos e Projetos (Finep) e coordenada pela Agência Espacial Brasileira (AEB). Com o objetivo de desenvolver um microlançador capaz de colocar pequenos satélites em órbita, o VLPP busca atender às crescentes demandas do mercado espacial por soluções de baixo custo e alta eficiência. Esse projeto marca um avanço significativo na autonomia do Brasil no setor aeroespacial, inserindo o país de forma competitiva no cenário global de lançamentos espaciais. Alinhado à política nacional de desenvolvimento científico e tecnológico, o VLPP também fortalece a capacidade industrial e inovadora do Brasil.
Com grande satisfação, a Aeronaval tem contribuído com este empreendimento de extrema importância para o país. Atualmente, a Aeronaval participa ativamente no desenvolvimento do ferramental necessário para a fabricação dos motores de combustível sólido do projeto do Microlançador Brasileiro (ML-BR). Esse ferramental é crucial, pois dele depende a confiabilidade operacional do foguete. Ele deve garantir a repetibilidade na produção, a eficiência e a eficácia nos lançamentos, além de atender aos rigorosos padrões de segurança.

          </p>
          <img
            src={LogoMlbr}
            alt="Logo MLBR"
            className={ServicesStyles.card.logo}
          />
        </div>
      </div>

      <div className={ServicesStyles.dividerBottom}></div>
    </section>
  );
};

const NamedServices = SectionWrapper(Services, "services");
export default NamedServices;
