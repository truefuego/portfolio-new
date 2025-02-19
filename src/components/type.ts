import React from "react";

export interface ICustomLabelProps{
    label: string;
    text: string;
}

export interface IScreenWrapperProps{
    children: React.ReactNode;
}

export interface IVideoPlayerProps {
    videoURI: string;
    width: number;
    classes?: string;
    isFullWidth?: boolean;
    bgColor?: string;
};

export interface IGotoLinkButtonProps {
    isLive?: boolean;
    link: string;
    classes?: string;
}