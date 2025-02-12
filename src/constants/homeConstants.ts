import ReactJSLogo from '../assets/icons/react 1.svg';
import NodeJSLogo from  '../assets/icons/node 1.svg';
import FigmaLogo from '../assets/icons/figma 1.svg';
import MongoDBLogo from '../assets/icons/mongodb 1.svg';
import TailwindCSSLogo from '../assets/icons/tailwindcss 1.svg';
import PythonLogo from '../assets/icons/python 1.svg';
import DuskImage from '../assets/images/dusk-image.webp';

export const myStackData = [
    {
        title: 'React JS', 
        description: 'Open-source JavaScript library', 
        link: 'https://react.dev/', 
        imageURI: ReactJSLogo
    },
    {
        title: 'Node JS', 
        description: 'Backend development, API integrations', 
        link: 'https://nodejs.org/en', 
        imageURI: NodeJSLogo
    },
    {
        title: 'Figma', 
        description: 'Interface Design Tool', 
        link: 'https://www.figma.com', 
        imageURI: FigmaLogo
    },
    {
        title: 'Mongo DB', 
        description: 'Document-oriented NoSQL database', 
        link: 'https://www.mongodb.com/', 
        imageURI: MongoDBLogo
    },
    {
        title: 'TailwindCSS', 
        description: 'CSS framework', 
        link: 'https://tailwindcss.com/', 
        imageURI: TailwindCSSLogo
    },
    {
        title: 'Python', 
        description: 'Object-oriented programming language', 
        link: 'https://www.python.org/', 
        imageURI: PythonLogo
    }
];

export const projectsCardData = 
    {
        title: 'Dusk',
        year: 2024,
        type: 'Game',
        about: [
            {
                label: 'One Week',
                text: 'challenge to test my game development skills'
            },
            {
                label: 'ECS & FSM',
                text: 'for modular, responsive and optimal gameplay mechanics'
            }
        ],
        skills: 'Roadmapping, QA, Python (Pygame)',
        imageURI: DuskImage,
        slug: '/dusk',
        backgroundColor: '#397A3D',
        borderColor: '#49A14F'
    }
