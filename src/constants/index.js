import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  ethindia,
  akam,
  assuredocs,
  lumos,
  ethereum,
  tesla,
  property,
  dynarent,
  ethforall,
  threejs,
  blockchain
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blockchain Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "ethereum",
    icon: ethereum,
  },
];

const experiences = [
  {
    title: "AKAM Hackathon Finalist",
    company_name: "SSIP cell of Gujarat Govt.",
    icon: akam,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Nov 2022",
    points: [
      "Designed and developed a blockchain based platform for users to generate and verify certificates and documents in batches within seconds.",
      "Implemented security layers for verifying certificate authenticity and reducec the risk of forgery.",
      "Easy and swift drag and drop features to make the process simple and easy to understand.",
      "Worked in both web and app version of the application and qualified for the 'State Round'.",
      "Results are YET to be declared for the final round."
    ],
  },
  {
    title: "BuidL 1st Runners-Up",
    company_name: "Lumos Labs",
    icon: lumos,
    iconBg: "#000000",
    date: "Nov 2022 - Dec 2022",
    points: [
      "Designed and created a collection of dynamic NFTs using the Revise SDK.",
      "Programmed the dynamic NFTs to react according to GFG and carbon emissions acccording to the user's location.",
      "Used various API endpoints to get geolocation and emission details.",
      "Won 1st Runners-Up and awarded $1,500 for the same.",
    ],
  },
  {
    title: "EthIndia 2022",
    company_name: "EthGlobal",
    icon: ethindia,
    iconBg: "#383E56",
    date: "2 - 4 Dec 2022",
    points: [
      "Worked on a cross-chain Real-Estate settlement layer to make the process secure and hassel free.",
      "Integrated messaging and notification features powered by Push Protocol. Also, Polygon ID to authenticate users in the platform.",
      "Elegant and swift design and user experience to ensure best navigation.",
      "Apart from settlement offers, the application also facilitates renting of assets.",
    ],
  },
  {
    title: "EthForAll 2023",
    company_name: "Devfolio",
    icon: ethforall,
    iconBg: "#000000",
    date: "4st Feb 2023 - 20 Feb 2023",
    points: [
      "Build an DynamicNFT and asset renting infastructure to enable users to add renting features in your application.",
      "Created APIs to enable application to seamlessly add renting functionality.",
      "Rent for the assets are streamed using SuperFluid to ensure the user is only charged when the asset is in use.",
      "Won pool prize from a total of $1,000 by SuperFluid.",
    ],
  },
  {
    title: "Blockchain Lead",
    company_name: "StreaX",
    icon: blockchain,
    iconBg: "#000000",
    date: "Jan 2023 - Present",
    points: [
      "StreaX is a rising start-up that thrives to make web3 communication and events more engaging and the process seamless.",
      "As a blockchain lead, my responsibility was to take care of different smart contracts like giveaway, airdrops and token gating.",
      "I have built smart contracts keeping in mind security and gas efficiency and was able to attain a 4.2/5 rating for the same.",
      "I also formulated and wrote scripts to interact with smart contracts from the frontend.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I love the fact that Arunava takes care of small and minute details while working. He makes sure he understands the requirements completely before he starts working.",
    name: "Sushant Pandey",
    designation: "Co-Founder",
    company: "StreaX",
    image: "https://banner2.cleanpng.com/20180331/gxq/kisspng-computer-icons-letter-case-english-alphabet-letter-s-5abf6b921207e5.6764999315224943540739.jpg",
  },
  {
    testimonial:
      "Arunava is a very hard-working and bright developer. He is aware of what he is doing and can fix any problem that comes in the way.",
    name: "Lakshey Sehgal",
    designation: "Co-Founder",
    company: "StreaX",
    image: "https://w7.pngwing.com/pngs/917/432/png-transparent-letter-i-alphabet-letter-l-miscellaneous-angle-rectangle-thumbnail.png",
  },
  {
    testimonial:
      "He makes sure he is thorough with the requirements and very quick at finding solutions.",
    name: "Unknown",
    designation: "Jury Member",
    company: "AKAM hackathon",
    image: "https://w7.pngwing.com/pngs/956/653/png-transparent-letter-case-u-times-new-roman-u-thumbnail.png",
  },
];

const projects = [
  {
    name: "AssureDocs",
    description:
      "Web and app based solution for organizations to generate and verify official documents in batches on the Ethereum Blockchain gasless. The core features of the application is data intigrity and immutability",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "solidity",
        color: "pink-text-gradient",
      },
      {
        name: "ipfs",
        color: "blue-text-gradient",
      },
    ],
    image: assuredocs,
    source_code_link: "https://github.com/",
  },
  {
    name: "Prop3rty",
    description:
      "Web application that enables users to explore and buy digital lands and assets across metaverse cross-chain with in-built messaging functionality powered by Push Protocol.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "solidity",
        color: "pink-text-gradient",
      },
      {
        name: "figma",
        color: "blue-text-gradient",
      },
    ],
    image: property,
    source_code_link: "https://github.com/",
  },
  {
    name: "DynaRent",
    description:
      "A dynamicNFT and asset renting infastructure that allows users to rent their assets and get paid in money streams powered by SuperFluid. You can also use our API to add renting verification for your application.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: dynarent,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
