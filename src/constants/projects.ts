import type { IconType } from "react-icons/lib";
import checking from "assets/projects/Checking.png";
import CryptoDashboard from "assets/projects/CryptoDashboard.png";
import DiceGame from "assets/projects/DiceGame.png";
import WeatherApp from "assets/projects/WeatherApp.png";
import TipCalculator from "assets/projects/TipCalculator.png";
import Esarwa from "assets/projects/Esarwa.png";
import Calculator from "assets/projects/Calculator.png"
import ProductSearch from "assets/projects/ProductSearchFilter.png"
import OldPortfolioUrl from "assets/projects/old-portfolio.png?url";
import SpotifyNext13Url from "assets/projects/spotify_next13.png?url";
import TheLabzUrl from "assets/projects/the-labz.jpg?url";
import TwitterCloneUrl from "assets/projects/twitter-clone.png?url";
import HTMLICON from "icons/HtmlIcon";
import CssIcon from "icons/CssIcon";
import JavascriptIcon from "icons/JavascriptIcon";
import BootstrapIcon from "icons/BootstrapIcon";
import ChakraIcon from "icons/ChakraIcon";
import AirtableIcon from "icons/AirtableIcon";
import AwsIcon from "icons/AwsIcon";
import BuildIcon from "icons/BuildIcon";
import NextjsIcon from "icons/NextjsIcon";
import PrismaIcon from "icons/PrismaIcon";
import ReactIcon from "icons/ReactIcon";
import ReduxIcon from "icons/ReduxIcon";
import StorybookIcon from "icons/StorybookIcon";
import StyledComponentsIcon from "icons/StyledComponentsIcon";
import TailwindIcon from "icons/TailwindIcon";
import TestIcon from "icons/TestIcon";
import GraphqlIcon from "icons/TrpcIcon";
import trpcIcon from "icons/TrpcIcon";
import TypescriptIcon from "icons/TypescriptIcon";

const techTypes = [
  "Next.js",
  "TypeScript",
  "Vite",
  "Jest + RTL",
  "React",
  "Redux",
  "Prisma",
  "Styled Components",
  "TanStack Query",
  "Storybook",
  "Airtable",
  "AWS",
  "@craftjs/core",
  "Tailwind CSS",
  "tRPC",
  "Svelte",
  "GraphQL",
  "TypeGraphQL"
] as const;

type TechTuple = typeof techTypes;

export type ProjectTech = { tech: any; icon: IconType };

export type Project = {
  title: string;
  description: string;
  image: string;
  url: string;
  githubUrl?: string;
  techs: ProjectTech[];
  isPinned?: boolean;
};
const HTML: ProjectTech = { tech: "HTML", icon: HTMLICON };
const Css: ProjectTech = { tech: "CSS", icon: CssIcon };
const Javascript: ProjectTech = { tech: "Javascript", icon: JavascriptIcon };
const Bootstrap: ProjectTech = { tech: "Bootstrap", icon: BootstrapIcon };
const Chakra: ProjectTech = { tech: "Chaktra", icon: ChakraIcon };
// const nextjsTech: ProjectTech = { tech: "Next.js", icon: NextjsIcon };
const typeScriptTech: ProjectTech = { tech: "TypeScript", icon: TypescriptIcon };
const prismaTech: ProjectTech = { tech: "Prisma", icon: PrismaIcon };
const styledComponentsTech: ProjectTech = { tech: "Styled Components", icon: StyledComponentsIcon };
const reactTech: ProjectTech = { tech: "React", icon: ReactIcon };
const reduxTech: ProjectTech = { tech: "Redux", icon: ReduxIcon };
const testTech: ProjectTech = { tech: "Jest + RTL", icon: TestIcon };
const tanStackQueryTech: ProjectTech = { tech: "TanStack Query", icon: ReactIcon };
const storybookTech: ProjectTech = { tech: "Storybook", icon: StorybookIcon };
const airtableTech: ProjectTech = { tech: "Airtable", icon: AirtableIcon };
const awsTech: ProjectTech = { tech: "AWS", icon: AwsIcon };
const craftjsTech: ProjectTech = { tech: "@craftjs/core", icon: BuildIcon };
const tailwindCssTech: ProjectTech = { tech: "Tailwind CSS", icon: TailwindIcon };
const reactJS: ProjectTech = { tech: "React", icon: TailwindIcon };
const trpcTech: ProjectTech = { tech: "tRPC", icon: trpcIcon };
const graphqlTech: ProjectTech = { tech: "GraphQL", icon: GraphqlIcon };
const typeGraphqlTech: ProjectTech = { tech: "TypeGraphQL", icon: GraphqlIcon };
// const viteReactTech: ProjectTech = { tech: "Vite", icon: ViteIcon };
// const svelteTech: ProjectTech = { tech: "Svelte", icon: SvelteIcon };

export const projects: Project[] = [
  {
    title: "Crypto Dashboard",
    description:
      "Cryptocurrency dashboard using React, where I explored and learned about Chakra UI, the functionality of React components, and how to implement navigation using React Router DOM.",
    image: CryptoDashboard,
    url: "https://twitter-clone-nextjs-coral.vercel.app",
    githubUrl: "https://github.com/adrianpiatek99/twitter-clone-nextjs",
    techs: [
      reactTech,
      Chakra,
      Javascript
    ],
    isPinned: true
  },
  {
    title: "Dice Game",
    description:
      "Dice game in React where players choose a number, and the game generates a random number automatically. If the chosen number matches the generated number, the player earns a point.",
    image: DiceGame,
    url: "https://www.thelabz.com",
    techs: [
      reactTech,
      styledComponentsTech,
      Javascript
    ],
    isPinned: true
  },
  {
    title: "Esarwa",
    description:
      "I designed a website UI called Esarwa using HTML, CSS, and Bootstrap. Through this project, I learned how to integrate built-in Bootstrap components into my website and gained valuable experience in styling using Bootstrap.",
    image: Esarwa,
    url: "https://spotify-nextjs13-graphql-tailwindcss.vercel.app/login",
    githubUrl: "https://github.com/adrianpiatek99/spotify-nextjs13-graphql-tailwindcss",
    techs: [HTML, Css, Javascript, Bootstrap,],
    isPinned: true
  },
  {
    title: "WeatherApp",
    description: "I created a weather app using HTML, CSS, and JavaScript that displays the weather of any city based on a search. Through this project, I learned about APIs, how to fetch data from them, and how to display the retrieved information dynamically.",
    image: WeatherApp,
    url: "https://portfolio-adrian-piatek.vercel.app",
    githubUrl: "https://github.com/adrianpiatek99/portfolio-nextjs",
    techs: [HTML, Css, Javascript,]
  },
  {
    title: "Calculator",
    description: "I developed a calculator using HTML, CSS, and JavaScript. Through this project, I learned about built-in JavaScript functions, event handling, and how to implement interactive features.",
    image: Calculator,
    url: "https://portfolio-adrian-piatek.vercel.app",
    githubUrl: "https://github.com/adrianpiatek99/portfolio-nextjs",
    techs: [HTML, Css, Javascript,]
  },
  {
    title: "Tip Calculator",
    description: "I created a Tip Calculator using HTML, CSS, and JavaScript. This project calculates the tip amount based on the customer's input. Through this, I gained a better understanding of DOM manipulation and how to create interactive web applications.",
    image: TipCalculator,
    url: "https://portfolio-adrian-piatek.vercel.app",
    githubUrl: "https://github.com/adrianpiatek99/portfolio-nextjs",
    techs: [HTML, Css, Javascript,]
  },
  {
    title: "Product Search Filter",
    description: "I developed a Product Filtering page using HTML, CSS, and JavaScript. This project filters products dynamically based on the user's search input. Through this, I learned about the JavaScript filter() method and how to implement it for interactive functionality.",
    image: ProductSearch,
    url: "https://portfolio-adrian-piatek.vercel.app",
    githubUrl: "https://github.com/adrianpiatek99/portfolio-nextjs",
    techs: [HTML, Css, Javascript,]
  }
];
