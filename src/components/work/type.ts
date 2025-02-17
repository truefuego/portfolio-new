export interface IFilterButtonProps{
    title: string;
    isActive: boolean;
    onClick: () => void;
};

export interface IFilterIconProps {
    Icon: string;
    isActive: boolean;
    onClick: () => void;
};

export interface IProjectsFilterButtonSectionProps {
  selectedFilter: string; 
  setSelectedFilter: (filterType: string) => void;
  selectedViewStyle: string;
  setSelectedViewStyle: (filterType: string) => void;
};
