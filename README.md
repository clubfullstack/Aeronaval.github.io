# Aeronaval GitHub IO

[Homepage](aeronavaleng.com.br)

## Sumário
1. [Descrição](#descrição)
2. [Tecnologias Utilizadas](#tecnologias-utilizadas)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Configuração do Ambiente](#configuração-do-ambiente)
5. [Scripts Disponíveis](#scripts-disponíveis)
6. [Licença](#licença)

## Descrição

Este projeto é uma aplicação React construída com Vite, utilizando diversas bibliotecas e frameworks para melhorar a experiência do usuário e a eficiência do desenvolvimento. A aplicação é projetada para ser responsiva e fácil de manter, utilizando boas práticas de desenvolvimento.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces de usuário.
- **Vite**: Ferramenta de build rápida para projetos em JavaScript.
- **Tailwind CSS**: Framework CSS para estilização rápida e responsiva.
- **Framer Motion**: Biblioteca para animações em React.
- **React Router**: Para navegação entre páginas.
- **Three.js**: Biblioteca para gráficos 3D.
- **EmailJS**: Para envio de emails.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

```
src/
  ├── assets/ # Imagens e outros ativos estáticos
  ├── components/ # Componentes reutilizáveis da aplicação
  ├── constants/ # Valores constantes, textos, etc. 
    └── index.ts
  ├── hoc/ # Higher Order Components 
    ├── index.ts
    └── SectionWrapper.tsx
  ├── styles/ # Arquivos de estilização
  ├── utils/ # Funções utilitárias 
    ├── DeviceTypes.ts # Responsividade
    ├── sendMail.ts # Função para envio de e-mails
    └── validateForm.ts # Função para validação de formulários
  └── App.tsx # Componente principal da aplicação
```


## Configuração do Ambiente

1. **Clone o repositório**:
   ```bash
   git clone git@github.com:FelipeDN88/Aeronaval.github.io.git
   cd Aeronaval
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```
3. **Inicie o servidor de desenvolvimento**:
      ```bash
   npm run dev
   ```
4. **Abra o navegador em http://localhost:5173**:


## Scripts Disponíveis

| Script     | Descrição                                           |
|------------|-----------------------------------------------------|
| **dev**    | Inicia o servidor de desenvolvimento.               |
| **build**  | Cria uma versão otimizada da aplicação.             |
| **lint**   | Executa o ESLint para verificar problemas de estilo de código. |
| **preview**| Mostra a versão de build da aplicação.              |
| **predeploy** | Executa o build antes do deploy.                |
| **deploy** | Publica a aplicação no GitHub Pages.               |


## Licença

Este projeto é de propriedade da Aeronaval Engenharia e todos os direitos estão reservados. 

O uso, a reprodução, a modificação ou a distribuição deste produto é estritamente proibido sem autorização prévia por escrito da empresa.

Para mais informações, entre em contato através de felipedavila@aeronaval.org