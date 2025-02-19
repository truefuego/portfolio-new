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

import GeoPhoto1 from '../assets/projects/geo/geo-p-2.png';
import GeoPhoto2 from '../assets/projects/geo/geo-p-1.png';
import GeoVideo1 from '../assets/projects/geo/geo-v-1.mov';
import GeoVideo2 from '../assets/projects/geo/geo-v-2.mov';
import GeoVideo3 from '../assets/projects/geo/geo-v-3.mov';
import GeoVideo4 from '../assets/projects/geo/geo-v-4.mov';

import PorschePhoto1 from '../assets/projects/porsche/porsche-p-1.png';
import PorschePhoto2 from '../assets/projects/porsche/porsche-p-2.png';
import PorscheVideo1 from '../assets/projects/porsche/porsche-v-1.mov';
import PorscheVideo2 from '../assets/projects/porsche/porsche-v-2.mov';
import PorscheVideo3 from '../assets/projects/porsche/porsche-v-3.mov';
import PorscheVideo4 from '../assets/projects/porsche/porsche-v-4.mov';

import PlaylistPhoto1 from '../assets/projects/playlist/playlist-p-1.png';
import PlaylistPhoto2 from '../assets/projects/playlist/playlist-p-2.png';

import UptodoPhoto1 from '../assets/projects/uptodo/uptodo-p-1.png';
import UptodoPhoto2 from '../assets/projects/uptodo/uptodo-p-2.png';

export const projectsData = [
    {
        work: 'UpTodo',
        services: 'Development',
        techStack: 'React Native',
        year: '2024',
        slug: 'uptodo',
        previewImageUrl: UpTodoPreviewImage,
        assets: {
            photo: [UptodoPhoto1, UptodoPhoto2],
            video: []
        },
        hasPreviews: false,
        link: 'https://github.com/truefuego/UpTodo-ReactNative',
        isLive: false,
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
        hasPreviews: true,
        link: 'https://github.com/truefuego/Dusk',
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
            photo: [PlaylistPhoto1, PlaylistPhoto2],
            video: []
        },
        hasPreviews: false,
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
            photo: [GeoPhoto1, GeoPhoto2],
            video: [GeoVideo1, GeoVideo2, GeoVideo3, GeoVideo4]
        },
        hasPreviews: true,
        link: 'https://geoblitz.onrender.com/',
        isLive: true,
    },
    {
        work: 'Porsche Clone',
        services: 'Development',
        techStack: 'ReactJS',
        year: '2023',
        slug: 'porsche-clone',
        previewImageUrl: PorscheClonePreviewImage,
        assets: {
            photo: [PorschePhoto1, PorschePhoto2],
            video: [PorscheVideo1, PorscheVideo2, PorscheVideo3, PorscheVideo4]
        },
        hasPreviews: true,
        link: 'https://porsche-fys5.onrender.com/',
        isLive: true,
    },
];
