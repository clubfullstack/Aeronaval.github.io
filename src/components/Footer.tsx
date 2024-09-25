import React from 'react';
// import InstagramIcon from '../assets/instagram-icon.png';
import LinkedinIcon from '../assets/linkedin-icon.png';
import { SectionWrapper } from '../hoc';
import { FooterStyles, TextStyles } from '../styles/styles';

const Footer: React.FC = () => {
  return (
    <footer className={FooterStyles.footer}>
      <div className={FooterStyles.flexContainer}>
        <div className={FooterStyles.leftColumn}>
          <h3 className={`lg:text-[20] text-center ${TextStyles.paragraph}`}>Brasil</h3>
          <p className={`lg:text-[18px] lg:leading-[25px] text-center ${TextStyles.smallParagraph}`}>Praça Marechal-do-Ar Eduardo Gomes, 50</p>
          <p className={`lg:text-[18px] lg:leading-[25px] text-center ${TextStyles.smallParagraph}`}>Campus DCTA, Incubaero</p>
          <p className={`lg:text-[18px] lg:leading-[25px] text-center ${TextStyles.smallParagraph}`}>São José dos Campos - SP Brasil</p>
          <p className={`lg:text-[18px] lg:leading-[25px] text-center ${TextStyles.smallParagraph}`}>Telefone: (19) 99997-9575</p>
          <p className={`lg:text-[18px] lg:leading-[25px] text-center ${TextStyles.smallParagraph}`}>
            Email: <a href="mailto:felipedavila@aeronaval.org" className={FooterStyles.emailLink}>felipedavila@aeronaval.org</a>
          </p>
        </div>

        <div className={FooterStyles.centerColumn}>
          <div className={FooterStyles.socialIcons}>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={LinkedinIcon} alt="LinkedIn" className={FooterStyles.socialIcon} />
            </a>
            {/* <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={InstagramIcon} alt="Instagram" className={FooterStyles.socialIcon} />
            </a> */}
          </div>
          <p className={FooterStyles.footerText}>© Aeronaval - Todos os direitos reservados.</p>
        </div>

        {/* <div className={FooterStyles.rightColumn}>
          <h3 className={FooterStyles.contactTitleRight}>Entre em contato</h3>
          <form className={FooterStyles.form}>
            <div className="flex-grow flex items-center">
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className={FooterStyles.input}
                required
              />
              <button
                type="submit"
                className={FooterStyles.button}
              >
                Enviar
              </button>
            </div>
          </form>
        </div> */}
      </div>
    </footer>
  );
};

const NamedFooter = SectionWrapper(Footer, "contact");
export default NamedFooter;
