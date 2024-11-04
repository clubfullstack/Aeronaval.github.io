import React from 'react';
import { ConsultingStyles } from "../styles/styles";
import { SectionWrapper } from '../hoc';

const ConsultingDetails: React.FC = () => {
  return (
    <div className={ConsultingStyles.container}>
      <div className={`${ConsultingStyles.card} ${ConsultingStyles.leftAlign}`}>
        <h1 className={ConsultingStyles.title}>Consultoria</h1>
        <p className={ConsultingStyles.paragraph}>
        Com uma equipe experiente e multidisciplinar, a Aeronaval oferece consultoria completa para o planejamento e desenvolvimento de produtos de defesa. Desde a definição do Conceito de Operações (CONOps) até o suporte nas fases de desenvolvimento, fornecemos expertise estratégica e conhecimento detalhado sobre operações e planejamento de defesa, garantindo soluções eficazes ao longo de todo o ciclo de vida do projeto.
        </p>
      </div>

      <div className={`${ConsultingStyles.card} ${ConsultingStyles.rightAlign}`}>
        <h2 className={ConsultingStyles.subtitle}>Nossa Missão</h2>
        <p className={ConsultingStyles.paragraph}>
          Nossa missão é fornecer soluções de engenharia que atendam às necessidades de nossos clientes...
        </p>
        <h2 className={ConsultingStyles.subtitle}>Nossa Visão</h2>
        <p className={ConsultingStyles.paragraph}>
          Tornar-se uma empresa de referência no desenvolvimento de soluções de engenharia para os setores aeroespacial e naval.
        </p>
        <h2 className={ConsultingStyles.subtitle}>Nossos Valores</h2>
        <ul className={ConsultingStyles.list}>
          <li className={ConsultingStyles.listItem}>
            <strong>Inovação:</strong> Buscamos continuamente novas ideias e tecnologias para melhorar nossos produtos e serviços.
          </li>
          <li className={ConsultingStyles.listItem}>
            <strong>Qualidade:</strong> Comprometemo-nos a entregar produtos de alta qualidade que superem as expectativas de nossos clientes.
          </li>
          <li className={ConsultingStyles.listItem}>
            <strong>Segurança:</strong> Constantemente buscamos a segurança em nossos desenvolvimentos...
          </li>
          <li className={ConsultingStyles.listItem}>
            <strong>Integridade:</strong> Atuamos com transparência e ética em todas as nossas ações.
          </li>
        </ul>
      </div>
    </div>
  );
};

const NamedConsultingDetails = SectionWrapper(ConsultingDetails, "consulting");
export default NamedConsultingDetails;
