interface Project {
    name: string;
    description: string;
    imgUrl: string;
}

interface Navlink {
    id: string;
    title: string;
}

export const navLinks: Navlink[] = [
    {id: "home", title: "Início"},
    {id: "services", title: "Serviços"},
    {id: "projects", title: "Projetos"},
    {id: "contact", title: "Contato"},
];

export const projects: Project[] = [
    {
      name: "Hovercraft",
      description:
        "O primeiro projeto da Aeronaval, o hovercraft ANV-PAX, é uma solução inovadora para o transporte fluvial em regiões desafiadoras. Desenvolvido com base na experiência militar do fundador, o ANV-PAX oferece uma opção eficiente e segura para áreas de difícil acesso, com mínimo impacto ambiental e sem necessidade de infraestrutura portuária. O hovercraft pode superar obstáculos sólidos e operar em terrenos secos, tornando-o ideal para operações logísticas na Amazônia e para missões de resgate e patrulhas. Além disso, oferece uma experiência diferenciada para aventuras em pântanos, lagos e litorais.",
      imgUrl: "src/assets/hovercraft-img.jpeg",
    },
    {
        name:"Tecido tecnológico PlasmaTex",
        description: "O PlasmaTex é um tecido desenvolvido para proteção contra doenças transmitidas por mosquitos, como a dengue. Utilizando tecnologia de plasma, o tecido incorpora repelentes que garantem segurança e conforto em ambientes ao ar livre e em regiões endêmicas. A inovação permite a criação de roupas, telas mosquiteiras e outros materiais têxteis com proteção avançada. Este projeto visa atender tanto o setor de defesa quanto o civil, oferecendo soluções práticas e eficazes para diversos mercados.",
        imgUrl: "src/assets/plasmatex-img.png",
    },
]