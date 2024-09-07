import React, { useState, useEffect } from 'react';
import Logo from '../assets/logo.png';
import LogoLetter from '../assets/logo-letter.png';
import { navLinks } from '../constants';
import { HeaderStyles, TextStyles } from '../styles/styles';

const Header: React.FC = () => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [activate, setActivate] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrollY(currentScrollY);

      if (currentScrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }

      // Show header when scrolling up
      if (currentScrollY < lastScrollY) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > 100) {
        setIsHeaderVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActivate(id);
  };

  return (
    <nav className={`${HeaderStyles.header} ${scrolling ? HeaderStyles.scrollBackground : HeaderStyles.background} ${isHeaderVisible ? HeaderStyles.visible : HeaderStyles.hidden}`}>
      <div className="max-w-screen-2xl flex items-center justify-between mx-auto px-4">
        <a href="#home" className="flex items-center space-x-3" onClick={() => handleNavClick('home')}>
          <img src={Logo} alt="Logo" className={HeaderStyles.logo} />
        </a>

        <div className="flex-grow flex justify-center">
          <ul className={`flex space-x-6 ${scrolling ? 'text-gray-900' : 'text-gray-200'}`}>
            {navLinks.map((link: { id: string; title: string }) => (
              <li
                key={link.id}
                className={`font-square ${HeaderStyles.navLink} ${scrolling ? 'text-blue-950' : 'text-white'} ${TextStyles.paragraph}`}
              >
                <button
                  onClick={() => handleNavClick(link.id)}
                  className="focus:outline-none bg-transparent border-none"
                  style={{ backgroundColor: 'transparent', padding: 0 }}
                >
                  {link.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <a href="#home" onClick={() => handleNavClick('home')}>
          <img src={LogoLetter} alt="Logo Letter" className={HeaderStyles.logoLetter} />
        </a>
      </div>
    </nav>
  );
};

export default Header;
