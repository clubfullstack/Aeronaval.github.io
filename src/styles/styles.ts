  const HeaderStyles = {
    header: "p-4 w-full fixed top-0 left-0 z-50 transition-all duration-300",
    background: "bg-gradient-to-r from-[#040712] via-[#111b3f] to-white",
    scrollBackground: "bg-white shadow-md",
    hidden: "hidden",
    visible: "block",
    logo: "h-12",
    mobileMenuButton: "inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200",
    menuIcon: "w-5 h-5",
    navList: "font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8",
    navLink: "text-[18px] font-medium cursor-pointer hover:text-[#55679C]",
    logoLetter: "h-10",
  };

  const HomeStyles = {
    container: "relative w-full h-screen overflow-hidden mt-10",
    background: "absolute inset-0 bg-no-repeat bg-cover bg-center",
    content: "mt-24 relative z-10 flex flex-col items-center w-full h-full p-8 bg-gradient-to-b from-transparent to-[#020C30]",
    heading: "text-4xl font-bold text-white text-center",
    paragraph: "text-lg text-white mt-7 max-w-6xl text-center",
    logo: "mt-56 h-80",
  };

  const AboutStyles = {
      container: "bg-gradient-to-b from-[#000721] via-[#1F316F] to-[#000721] relative w-full h-screen overflow-hidden",
      content: "mt-6 relative z-10 flex flex-col items-center w-full h-full p-8 ",
      heading: "text-4xl font-bold text-white text-center",
      paragraph: "text-lg text-white mt-7 max-w-6xl text-center",
      logo: "mt-20 h-80",
      justifiedText: "text-justify max-w-[1700px] text-left"
  };
  
  const CardStyles = {
    container: "bg-[#284784] bg-opacity-70 p-8 rounded-lg max-w-7xl w-full relative",
    text: "text-black mb-8",
    strong: "text-2xl",
    logo: "bottom-4 left-4 h-72 mt-5",
  };
  
  const ServicesStyles = {
    section: "relative w-full  bg-cover bg-center",
    background: (imageUrl: string) => `url(${imageUrl})`,
    backgroundStyle: "backgroundSize: cover; backgroundPosition: center; filter: brightness(0.9) contrast(1.1)",
    titleContainer: "absolute top-8 w-full flex justify-center",
    card: CardStyles,
    backgroundLayer: "absolute inset-0 z-[-1]",
    dividerTop: "absolute top-0 left-0 w-full h-[10px] bg-[#000721] z-10",
    dividerBottom: "absolute bottom-0 left-0 w-full h-[10px] bg-[#000721] z-10",
    textContainer: "max-w-[1000px] text-justify",
  };

  const ProjectCardStyles = {
    container: "relative rounded-3xl overflow-hidden w-full max-w-[850px] h-auto flex flex-col items-center justify-between",
    image: "absolute inset-0 w-full h-full object-cover z-0 blur-[1.5px]",
    textContainer: "relative bg-black bg-opacity-60 p-4 rounded-lg text-white z-10 max-w-[85%] mb-10 mt-3",
    title: "font-bold text-[24px]",
    description: "mt-2 text-[16px]",
    iconsContainer: "relative flex flex-wrap gap-4 mt-8 z-10 mb-4",
  };

  const ProjectsStyles = {
    container: "bg-gradient-to-b from-[#000721] via-[#1F316F] to-[#000721] py-20",
    titleContainer: "w-full flex justify-center mb-10",
    title: "font-bold text-white text-4xl",
    projectsList: "flex flex-wrap justify-center gap-10",

    hoverSection: {
      container: "w-full max-w-[1100px] bg-white bg-opacity-10 rounded-lg p-8 mb-10 mx-auto", // Estilo geral do card
      title: "font-bold text-white text-3xl mb-4",
      paragraph: "text-white text-lg leading-relaxed",
    },
  };

  const FooterStyles = {
    footer: "w-full bg-[#000721] text-white py-8 bottom-0 left-0",
    flexContainer: "flex justify-between w-full",
    leftColumn: "w-full md:w-2/4",
    contactTitle: "text-lg font-bold mb-2",
    contactInfo: "text-sm",
    emailLink: "text-blue-400",
    socialIcons: "flex space-x-4",
    socialIcon: "h-9",
    centerColumn: "w-full flex flex-col items-center md:items-center mt-24",
    footerText: "text-sm mt-6",
    rightColumn: "w-full md:w-1/2 flex flex-col md:items-end mt-6",
    contactTitleRight: "lg:text-[18px] lg:leading-[25px] mb-4 mr-[310px]",
    form: "w-full md:w-4/4 flex items-center space-x-2",
    input: "p-2 rounded-xl border-1 focus:outline-none focus:ring-2 focus:ring-blue-400",
    button: "bg-[#001863] text-white p-1.5 ml-2 rounded-xl hover:bg-blue-500 transition duration-300 flex-shrink-0",
  };

  const TextStyles = {
    title: "font-bold font-square lg:text-[60px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px]",
    subTitle: "font-square font-semibold lg:text-[35px] sm:text-[40px] xs:text-[35px] text-[30px] lg:leading-[60px]",
    paragraph: "font-medium lg:text-[21px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[31px]",
    smallParagraph: "font-square font-medium lg:text-[20px] sm:text-[20px] xs:text-[18px] text-[14px] lg:leading-[31px]",
  };

  const ContactStyles = {
    container: "bg-black max-w-2xl mx-auto p-10 rounded-lg shadow-lg",
    form: "flex flex-col space-y-4",
    formGroup: "flex flex-col",
    label: "text-lg self-start font-semibold text-white mb-1 ml-2",
    input: "p-3 m-1 border border-[#26375b] rounded bg-gray-300 focus:outline-none focus:ring-2 focus:[#2a4884]",
    textarea: "p-3 m-1 border border-[#26375b] bg-gray-300 rounded resize-none h-32 focus:outline-none focus:ring-2 focus:[#2a4884]",
    button: "self-center mt-4 p-2 w-full bg-[#001863] text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",
  };
  
  export { HeaderStyles, HomeStyles, ServicesStyles, CardStyles, ProjectCardStyles, ProjectsStyles, FooterStyles, TextStyles, ContactStyles, AboutStyles };
  