import React, { useEffect, useState } from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import CustomText from "../components/common/CustomTextNormal";
import {
  viewStyleFilterTypes,
  workTypeFilterTypes,
} from "../constants/constants";
import ProjectsFilterButtonSection from "../components/work/ProjectsFilterButtonSection";
import ProjectsTableView from "../components/work/ProjectsTableView";
import ProjectsGridView from "../components/work/ProjectsGridView";
import { IProjectDataProps } from "../components/type";
import { projectsData } from "../constants/worksConstants";

const PersonalProjectsPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>(
    workTypeFilterTypes.ALL
  );
  const [selectedViewStyle, setSelectedViewStyle] = useState<string>(
    viewStyleFilterTypes.FLEX
  );

  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [projectListData, setProjectListData] = useState<IProjectDataProps[]>(projectsData);

  useEffect(() => {
    const filterOptions = selectedFilter === workTypeFilterTypes.ALL ? [workTypeFilterTypes.DESIGN, workTypeFilterTypes.DEVELOPMENT] : [selectedFilter];
    setProjectListData(projectsData.filter((item) => filterOptions.includes(item.services.toLowerCase())));
  }, [selectedFilter])


  useEffect(() => {
    const updateWidth = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <ScreenWrapper>
      <div className="w-[65%] mt-32 md:48">
        <CustomText
          title="Creating next level digital products"
          classes="w-[85%] md:w-[70%] text-5xl md:text-7xl"
        />
        <ProjectsFilterButtonSection
          selectedFilter={selectedFilter}
          selectedViewStyle={selectedViewStyle}
          setSelectedFilter={setSelectedFilter}
          setSelectedViewStyle={setSelectedViewStyle}
        />
      </div>
      {(selectedViewStyle === viewStyleFilterTypes.FLEX) && (screenWidth >= 1024) ? (<ProjectsTableView items={projectListData}/>) : (<ProjectsGridView items={projectListData}/>)}
    </ScreenWrapper>
  );
};

export default PersonalProjectsPage;
