import { useEffect } from 'react'
import CustomImage from './common/CustomImage'
import DuskImage from '../assets/images/dusk-image.webp';
import UpTodoImage from '../assets/images/uptodo-image.png';
import GeoExplorerImage from '../assets/images/geo-image.webp';
import PlaylistMigratorImage from '../assets/images/playlist-image.webp';
import PorscheImage from '../assets/images/porsche-image.webp';
import { motion, animate, useMotionValue } from 'framer-motion';

const InfiniteSlider = () => {
    const aboutMeImages = [DuskImage,UpTodoImage,GeoExplorerImage,PlaylistMigratorImage,PorscheImage]

    const xTranslation = useMotionValue(0);

    useEffect(() => {
        let finalPosition = -80;
        if(innerWidth >= 1536) {
            finalPosition -= 52*4*aboutMeImages.length;
        } else if(innerWidth >= 640) {
            finalPosition -= 48*4*aboutMeImages.length;
        } else {
            finalPosition -= 24*4*aboutMeImages.length;
        }
        const controls = animate(xTranslation, finalPosition, {
            ease: 'linear',
            duration: 25,
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0 
        });
        return controls.stop;
    }, [aboutMeImages.length, xTranslation])

  return (
    <motion.div className='flex gap-4 w-fill' style={{ x: xTranslation }} >
        {aboutMeImages.map((item, index) => <CustomImage key={index} src={item} alt="image" classes='w-24 sm:w-48 2xl:w-52 rounded-xl' />)}
        {aboutMeImages.map((item, index) => <CustomImage key={index} src={item} alt="image" classes='w-24 sm:w-48 2xl:w-52 rounded-xl' />)}
    </motion.div>
  )
}

export default InfiniteSlider