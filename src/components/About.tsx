import React from 'react';
import "../styles/background.css";
import LogoCircular from '../assets/logo-circular.png';
import { SectionWrapper } from '../hoc';
import { AboutStyles, TextStyles } from '../styles/styles';

const About: React.FC = () => {
    return (
      <div className={AboutStyles.container}>
        <div className={AboutStyles.content}>
          <h1 className={`mb-5 ${TextStyles.title}`}>
            Bem-vindo à Aeronaval
          </h1>
          <p className={TextStyles.paragraph}>
          A Aeronaval é uma empresa dedicada ao desenvolvimento de soluções tecnológicas para os setores aeroespacial e naval. Nossa missão é expandir o horizonte de possibilidades para nossos clientes, oferecendo produtos e serviços que agreguem valor.
Fundada por ex-integrante do Exército Brasileiro, a Aeronaval começou sua trajetória com o desenvolvimento de hovercrafts, projetados para transporte anfíbio de passageiros na desafiadora região amazônica. 
<br></br>
<br></br>
 Atendendo tanto ao mercado civil quanto ao militar, nossos projetos são concebidos para oferecer soluções robustas, versáteis e economicamente viáveis. Compreendendo as reais necessidades de nossos clientes, nossas soluções são cuidadosamente elaboradas para garantir confiabilidade, disponibilidade, manutenibilidade e segurança ao longo de todo o ciclo de vida dos produtos.
Convidamos você a explorar as possibilidades que a Aeronaval tem a oferecer. Descubra como nossa expertise e inovação podem transformar suas ideias em realidade e impulsionar o sucesso de suas operações.
         </p>
          <img src={LogoCircular} alt="Logo Circular" className={AboutStyles.logo} />
        </div>
      </div>
    );
};

const NamedAbout = SectionWrapper(About, "about");
export default NamedAbout;
