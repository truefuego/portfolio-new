import React, { MouseEvent, useState } from "react";
import CustomText from "../common/CustomTextNormal";
import { ITableDataItemProps } from "./type";
import { projectsData } from "../../constants/worksConstants";
import { motion } from "framer-motion";
import { useScreenWrapper } from "../../contexts/ScreenWrapperContext";

const ProjectsTableView: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isImageVisible,setIsImageVisible] = useState<boolean>(false);
  const [previewImageUrl, setPreviewImageUrl] = useState<string>('');

  const toggleImageVisiblity = () => {
    setIsImageVisible(prev => !prev);
  }

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - 192;
    const y = e.clientY - rect.top - 128;
    setPosition({ x, y });
  };

  return (
    <div className="flex flex-col w-[85%] mb-48">
      <div className="grid grid-cols-5 p-6">
        <CustomText title="WORK" textColor="secondary-text" classes="col-span-2 pl-24 text-xs"/>
        <CustomText title="SERVICES" textColor="secondary-text" classes="px-8 text-xs"/>
        <CustomText title="TECH STACK" textColor="secondary-text" classes="px-8 text-xs"/>
        <CustomText title="YEAR" textColor="secondary-text" classes="pl-24 text-xs"/>
      </div>
      <div className="h-[2px] bg-secondary-background"/>
      <div onMouseMove={handleMouseMove} onMouseEnter={toggleImageVisiblity} onMouseLeave={toggleImageVisiblity}>
        {projectsData.map((item, index) => 
          <TableItem key={index} work={item.work} 
            services={item.services} 
            techStack={item.techStack} 
            year={item.year} 
            previewImageUrl={item.previewImageUrl} 
            slug={item.slug}
            setPreviewImageUrl={setPreviewImageUrl}
          />
        )}
      </div>
      {isImageVisible && (
        <motion.img
          src={previewImageUrl} 
          alt="preview-image" 
          className='absolute h-96 w-96 bg-secondary-background object-contain object-center transition-transform duration-400 ease-linear pointer-events-none'
          style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
          initial={{ opacity: 0, height: 200, width: 200 }}
          animate={{ opacity: 1, transition: {duration: .5, damping: .5}, height: 400, width: 400 }}
        />
      )}
    </div>
  );
};

const TableItem: React.FC<ITableDataItemProps> = ({ work, services, techStack, year, slug, previewImageUrl, setPreviewImageUrl }) => {
  const { handleClick } = useScreenWrapper();

  return (
    <div onMouseEnter={() => setPreviewImageUrl(previewImageUrl)} onMouseLeave={() => setPreviewImageUrl('')} >
      <div className="grid grid-cols-5 p-6 items-center cursor-pointer" onClick={() => handleClick(slug)}>
        <CustomText title={work} classes="pl-24 col-span-2 text-3xl"/>
        <CustomText title={services} classes="px-8 text-lg"/>
        <CustomText title={techStack} classes="px-8 text-lg"/>
        <CustomText title={year} classes="pl-24 text-lg"/>
      </div>
      <div className="h-[1px] bg-secondary-background"/>
    </div>
  )
}

export default ProjectsTableView;
