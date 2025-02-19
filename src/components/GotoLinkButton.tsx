import React, { useState } from 'react'
import { IGotoLinkButtonProps } from './type'
import CustomText from './common/CustomTextNormal'
import { ArrowUpRight } from '../assets/icons/icons'

const GotoLinkButton:React.FC<IGotoLinkButtonProps> = ({ isLive= false, link, classes }) => {
    const [isHovering, setIsHovering] = useState<boolean>(false);

    const toggleIsHovering = () => {
        setIsHovering(prev => !prev);
    }

    return (
        <div className={`flex items-center cursor-pointer justify-center ${classes}`} onMouseEnter={toggleIsHovering} onMouseLeave={toggleIsHovering} onClick={() => window.open(link, "_blank")}>
            <CustomText title={isLive ? 'Live Link' : 'GitHub'} classes='hover:text-secondary-text md:flex hidden'/>
            <div className={`${isHovering ? 'translate-x-2 -translate-y-2 text-secondary-text' : ''} transition-transform duration-300 ease-in-out`}>
                <ArrowUpRight />
            </div>
        </div>
    )
}

export default GotoLinkButton;
