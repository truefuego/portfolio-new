import { MotionValue } from "framer-motion";
import { ICustomLabelProps } from "../type"

export interface ICustomStackCardProps{
    title: string,
    description: string,
    link: string,
    Icon: string
}

export interface ICustomProjectCardProps{
    range: number[],
    targetScale: number,
    projectData: {
        title: string,
        year: number
        type: string,
        about: ICustomLabelProps[],
        skills: string,
        imageURI: string,
        slug: string,
        backgroundColor: string,
        borderColor: string
    },
    scrollProgress: MotionValue<number>;
}