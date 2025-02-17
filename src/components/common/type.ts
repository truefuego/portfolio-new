import { CSSProperties } from "react";

export interface ICustomTextProps {
    title: string;
    classes?: string;
    fontSize?: string;
    textColor?: string;
    fontFamily?: string;
    link?: string;
    openNewPage?: boolean;
    isClickable?: boolean;
    href?: string;
    onClick?: () => void;
}

export interface ICustomImageProps {
    src: string;
    alt: string;
    classes?: string;
    link?: string;
    style?: CSSProperties;
}

export interface ICustomLoaderProps {
    delay?: number;
    duration?: number;
    path?: string;
}