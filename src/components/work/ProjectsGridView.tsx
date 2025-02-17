import React, { useState } from "react";
import CustomImage from "../common/CustomImage";
import CustomText from "../common/CustomTextNormal";
import { useNavigate } from "react-router-dom";
import { IProjectGridItemProps } from "./type";
import { projectsData } from "../../constants/worksConstants";

const ProjectsGridView: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:w-[85%] w-[75%]">
      {projectsData.map((item, index) => {
        return <ProjectGridItem key={index} work={item.work} services={item.services} year={item.year} slug={item.slug} previewImageUrl={item.previewImageUrl}/>
      })}
    </div>
  );
};

const ProjectGridItem: React.FC<IProjectGridItemProps> = ({ work, services, year, slug, previewImageUrl }) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const navigate = useNavigate();
  const toggleHovering = () => {
    setIsHovering(prev => !prev);
  }
  return (
    <div onClick={() => navigate(slug)} className="cursor-pointer" onMouseEnter={toggleHovering} onMouseLeave={toggleHovering}>
      <CustomImage src={previewImageUrl} alt={work} classes={`transition-transform duration-400 ease-in-out ${isHovering ? 'scale-105': ''}`}/>
      <CustomText title={work} classes='text-3xl mt-10 mb-6' />
      <div className="h-[1px] bg-secondary-background"/>
      <div className="flex justify-between my-6">
        <CustomText title={services} classes="text-xl"/>
        <CustomText title={year} classes="text-xl" />
      </div>
    </div>
  )
}

export default ProjectsGridView;
