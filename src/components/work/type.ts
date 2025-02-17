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

export interface ITableDataItemProps {
  work: string;
  services: string;
  techStack: string;
  year: string;
  slug: string;
  previewImageUrl: string;
  setPreviewImageUrl: (imageUrl: string) => void;
};


export interface IProjectGridItemProps {
  work: string;
  services: string;
  year: string;
  slug: string;
  previewImageUrl: string;
}