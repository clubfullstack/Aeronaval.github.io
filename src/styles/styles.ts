  const HeaderStyles = {
    header: "p-4 w-full fixed top-0 left-0 z-50 transition-all duration-300",
    background: "bg-gradient-to-r from-[#1F316F] via-[#1A4870] to-white",
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
    background: "background",
    content: "relative z-10 flex flex-col items-center justify-center w-full h-full p-8 bg-gradient-to-b from-transparent to-[#020C30]",
    heading: "text-4xl font-bold text-white text-center",
    paragraph: "text-lg text-white mt-7 max-w-6xl text-center",
    logo: "mt-10 h-80",
  };

  const CardStyles = {
    container: "bg-[#284784] bg-opacity-70 p-8 rounded-lg max-w-7xl w-full relative",
    text: "text-white mb-8",
    strong: "text-2xl",
    logo: "bottom-4 left-4 h-64",
  };
  
  const ServicesStyles = {
    section: "relative w-full h-screen bg-cover bg-center",
    background: (imageUrl: string) => `url(${imageUrl})`,
    backgroundStyle: "backgroundSize: cover; backgroundPosition: center; filter: brightness(0.9) contrast(1.1)",
    titleContainer: "absolute top-8 w-full flex justify-center",
    title: "font-bold text-white mt-10",
    card: CardStyles, // Reutiliza a estilização do card
  };
  
  const ProjectCardStyles = {
    container: "relative rounded-3xl overflow-hidden w-full max-w-[800px] h-[700px] flex items-center justify-center",
    image: "absolute inset-0 w-full h-full object-cover z-0",
    textContainer: "absolute top-4 left-4 bg-black bg-opacity-60 p-4 rounded-lg text-white z-10 max-w-[85%]",
    title: "font-bold text-[24px]",
    description: "mt-2 text-[16px]",
  };
  
  const ProjectsStyles = {
    container: "bg-gradient-to-b from-[#001254] via-[#1F316F] to-[#000721] py-20",
    titleContainer: "w-full flex justify-center mb-10",
    title: "font-bold text-white text-4xl",
    projectsList: "flex flex-wrap justify-center gap-10",
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
    title: "font-square font-black lg:text-[60px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
    subTitle: "font-square font-semibold lg:text-[35px] sm:text-[40px] xs:text-[35px] text-[30px] lg:leading-[60px] mt-2",
    paragraph: "font-square font-medium lg:text-[25px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[31px]",
  };
  
  export { HeaderStyles, HomeStyles, ServicesStyles, CardStyles, ProjectCardStyles, ProjectsStyles, FooterStyles, TextStyles };
  