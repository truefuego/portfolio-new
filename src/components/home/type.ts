import { ICustomLabelProps } from "../type"

export interface ICustomStackCardProps{
    title: string,
    description: string,
    link: string,
    imageURI: string
}

export interface ICustomProjectCardProps{
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
    }
}