import UpTodoPreviewImage from '../assets/images/preview-uptodo.png';
import PlaylistMigratorPreviewImage from '../assets/images/preview-playlist.png';
import GeoExplorerPreviewImage from '../assets/images/preview-geo.png';
import DuskPreviewImage from '../assets/images/preview-dusk.png';
import PorscheClonePreviewImage from '../assets/images/preview-porsche.png';

import DuskPhoto1 from '../assets/projects/dusk/dusk-p-1.png';
import DuskPhoto2 from '../assets/projects/dusk/dusk-p-2.png';
import DuskVideo1 from '../assets/projects/dusk/dusk-v-3.mov';
import DuskVideo2 from '../assets/projects/dusk/dusk-v-1.mov';
import DuskVideo3 from '../assets/projects/dusk/dusk-v-2.mov';
import DuskVideo4 from '../assets/projects/dusk/dusk-v-4.mov';

export const projectsData = [
    {
        work: 'UpTodo',
        services: 'Development',
        techStack: 'React Native',
        year: '2024',
        slug: 'uptodo',
        previewImageUrl: UpTodoPreviewImage,
        assets: {
            photo: [],
            video: []
        },
        link: 'https://github.com/truefuego/UpTodo-ReactNative',
        isLive: false,
    },
    {
        work: 'Playlist Migrator',
        services: 'Development',
        techStack: 'ReactJS',
        year: '2024',
        slug: 'playlist-migrator',
        previewImageUrl: PlaylistMigratorPreviewImage,
        assets: {
            photo: [],
            video: []
        },
        link: 'https://github.com/truefuego/Playlist-Migrator',
        isLive: false,
    },
    {
        work: 'Geo Explorer',
        services: 'Development',
        techStack: 'ReactJS',
        year: '2024',
        slug: 'geo-explorer',
        previewImageUrl: GeoExplorerPreviewImage,
        assets: {
            photo: [],
            video: []
        },
        link: 'https://geoblitz.onrender.com/',
        isLive: true,
    },
    {
        work: 'Dusk',
        services: 'Development',
        techStack: 'Python',
        year: '2024',
        slug: 'dusk',
        previewImageUrl: DuskPreviewImage,
        assets: {
            photo: [DuskPhoto1, DuskPhoto2],
            video: [DuskVideo1, DuskVideo2, DuskVideo3, DuskVideo4]
        },
        link: 'https://github.com/truefuego/Dusk',
        isLive: false,
    },
    {
        work: 'Porsche Clone',
        services: 'Development',
        techStack: 'ReactJS',
        year: '2023',
        slug: 'porsche-clone',
        previewImageUrl: PorscheClonePreviewImage,
        assets: {
            photo: [],
            video: []
        },
        link: 'https://porsche-fys5.onrender.com/',
        isLive: true,
    },
];
