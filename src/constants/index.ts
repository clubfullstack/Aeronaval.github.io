interface Project {
    name: string;
    description: string;
    imgUrl: string;
    icons: { img: string; label: string }[];
}

interface Navlink {
    id: string;
    title: string;
}

export const navLinks: Navlink[] = [
    {id: "home", title: "Início"},
    {id: "about", title: "Sobre"},
    {id: "services", title: "Serviços"},
    {id: "projects", title: "Projetos"},
    {id: "contact", title: "Contato"},
];

export const projects: Project[] = [
    {
      name: "ANV-PAX",
      description:
        "O ANV-PAX é um hovercraft projetado para o transporte de passageiros e carga, com capacidade de 2700 kg. Com um suporte logístico cuidadosamente planejado, ele oferece versatilidade, robustez, segurança e alta disponibilidade para operadores que buscam expandir seus negócios. Sua estrutura foi desenvolvida para atender às exigências das Normas da Autoridade Marítima, integrando soluções consagradas nos setores naval e aeroespacial.",
      imgUrl: "src/assets/hovercraft-bg-2.jpeg",
      icons: [
        { img: "src/assets/hovercraft-icon.png", label: "Velicidade"},
        { img: "src/assets/maintenance-icon.png", label: "Manutençaõ"},
        { img: "src/assets/accessibility-icon.png", label: "Acessibilidade"},
        { img: "src/assets/clipboard-icon.png", label: "Multiemprego"},
      ]
    },
    {
        name:"ANV-SAR",
        description: "Para atender às necessidades das equipes de resgate dos Corpos de Bombeiros, desenvolvemos o ANV-SAR, um hovercraft com características únicas no mundo, destacando-se por sua modularidade e portabilidade. Essa solução oferece maior facilidade de transporte e garante segurança aos operadores em cenários desafiadores, como enchentes e rompimento de barragens de rejeitos, proporcionando uma resposta ágil e eficaz em situações críticas.",
        imgUrl: "src/assets/hovercraft-bg.jpeg",
        icons: [
            { img: "src/assets/modularity-icon.png", label: "Modularidade"},
            { img: "src/assets/forklift-icon.png", label: "Facilidade de transporte"},
            { img: "src/assets/security-icon.png", label: "Robustez e Segurança"},
            { img: "src/assets/clipboard-icon.png", label: "Multiemprego"},
            { img: "src/assets/resgate.png", label: "Resgate"},
            { img: "src/assets/earth-icon.png", label: "Turismo Náutico"},
            { img: "src/assets/siren-icon.png", label: "Patrulhamento de Difícil Acesso"},
          ]
    },
    {
        name:"Tecido tecnológico PlasmaTex",
        description: "Doenças transmitidas por mosquitos, como a dengue, são um problema crescente no Brasil e no mundo. Para enfrentar isso, estamos desenvolvendo uma solução inovadora e sustentável, usando tecnologia de plasma frio para incorporar repelentes em tecidos. Esses materiais tratados oferecem proteção prática e eficiente, podendo ser usados em roupas esportivas, uniformes, fardas entre outros. Além de atender a setores de defesa e civil, nosso objetivo estratégico é avançar na pesquisa de plasmas, com o intuito de aplicar essa tecnologia futuramente em projetos aeroespaciais.",
        imgUrl: "src/assets/fabric-bg.jpg",
        icons: [
            { img: "src/assets/shirt-icon.png", label: "Vestuário Inovador"},
            { img: "src/assets/mesh-icon.png", label: " Tecido com Propriedades Diversas"},
            { img: "src/assets/factory-icon.png", label: "Sustentabilidade na Produção"},
          ]
    },
]