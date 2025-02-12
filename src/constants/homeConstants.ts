import ReactJSLogo from '../assets/icons/react 1.svg';
import NodeJSLogo from  '../assets/icons/node 1.svg';
import FigmaLogo from '../assets/icons/figma 1.svg';
import MongoDBLogo from '../assets/icons/mongodb 1.svg';
import TailwindCSSLogo from '../assets/icons/tailwindcss 1.svg';
import PythonLogo from '../assets/icons/python 1.svg';
import DuskImage from '../assets/images/dusk-image.webp';
import UpTodoImage from '../assets/images/uptodo-image.png';
import GeoExplorerImage from '../assets/images/geo-image.webp';
import PlaylistMigratorImage from '../assets/images/playlist-image.webp';
import PorscheImage from '../assets/images/porsche-image.webp';

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
    [
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
    },
    {
        title: "Playlist Migrator",
        year: 2024,
        type: "Web App",
        about: [
            {
                label: "Cross-Platform",
                text: "Migrates playlists between YouTube and Spotify seamlessly"
            },
            {
                label: "API Integrations",
                text: "Utilizes YouTube Data API and Spotify API for data transfer"
            }
        ],
        skills: "React.js, OAuth 2.0, API Integration",
        imageURI: PlaylistMigratorImage,
        slug: "/playlist-migrator",
        backgroundColor: "#1DB954",
        borderColor: "#1ED760"
    },
    {
        title: "Geo Explorer",
        year: 2024,
        type: "Web App",
        about: [
            {
                label: "Interactive Experience",
                text: "Users guess locations based on background videos"
            },
            {
                label: "Google Maps API",
                text: "Seamless map integration for precise location guessing"
            }
        ],
        skills: "React.js, Zustand, Google Maps API",
        imageURI: GeoExplorerImage,
        slug: "/geo-explorer",
        backgroundColor: "#4285F4",
        borderColor: "#357AE8"
    },
    {
        title: "Porsche Desktop Clone",
        year: 2024,
        type: "Web App",
        about: [
            {
                label: "Pixel-Perfect UI",
                text: "Replicated Porsche's desktop website with responsive design"
            },
            {
                label: "Enhanced UX",
                text: "Implemented dynamic components for smoother navigation"
            }
        ],
        skills: "React.js, TailwindCSS",
        imageURI: PorscheImage,
        slug: "/porsche-clone",
        backgroundColor: "#000000",
        borderColor: "#FF0000"
    },
    {
        title: "UpTodo-ReactNative",
        year: 2025,
        type: "Mobile App",
        about: [
            {
                label: "Task Management",
                text: "Developed a React Native app for efficient to-do list management"
            },
            {
                label: "Cross-Platform",
                text: "Ensured seamless performance on both iOS and Android devices"
            }
        ],
        skills: "React Native, JavaScript",
        imageURI: UpTodoImage,
        slug: "/uptodo-reactnative",
        backgroundColor: "#4CAF50",
        borderColor: "#388E3C"
    }
    
]
    