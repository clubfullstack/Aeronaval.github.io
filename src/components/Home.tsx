import React from 'react';
import "../styles/background.css";
import LogoCircular from '../assets/logo-circular.png';
import { SectionWrapper } from '../hoc';
import { HomeStyles, TextStyles } from '../styles/styles';

const Home: React.FC = () => {
    return (
      <div className={HomeStyles.container}>
        <div className={HomeStyles.background}></div>
        <div className={HomeStyles.content}>
          <h1 className={TextStyles.title}>
            Bem-vindo à Aeronaval
          </h1>
          <p className={TextStyles.paragraph}>
            A Aeronaval é uma empresa dedicada ao desenvolvimento de soluções tecnológicas para os setores aeroespacial, naval e de materiais. Nossa missão é expandir o horizonte de possibilidades para nossos clientes, oferecendo produtos e serviços que agreguem valor.
            <br /><br />
            Fundada por ex-integrante do Exército Brasileiro, a Aeronaval começou sua trajetória com o desenvolvimento de hovercrafts, projetados para operações anfíbias. Atendendo tanto ao mercado civil quanto ao militar, nossos projetos são concebidos para oferecer soluções robustas, versáteis e economicamente viáveis. Compreendendo as reais necessidades de nossos clientes, nossas soluções são cuidadosamente elaboradas para garantir confiabilidade, disponibilidade, manutenibilidade e segurança ao longo de todo o ciclo de vida dos produtos.
            <br /><br />
            Convidamos você a explorar as possibilidades que a Aeronaval tem a oferecer. Descubra como nossa expertise e inovação podem transformar suas ideias em realidade e impulsionar o sucesso de suas operações.
          </p>
          <img src={LogoCircular} alt="Logo Circular" className={HomeStyles.logo} />
        </div>
      </div>
    );
};

const NamedHome = SectionWrapper(Home, "home");
export default NamedHome;
