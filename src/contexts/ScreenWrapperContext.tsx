import { createContext, useContext } from "react";

interface ScreenWrapperContextType {
    handleClick: (link: string) => void;
}

export const ScreenWrapperContext = createContext<ScreenWrapperContextType | undefined>(undefined);

export const useScreenWrapper = () => {
    const context = useContext(ScreenWrapperContext);
    if(!context) {
        throw new Error('useScreenWrapper must be used within a ScreenWrapperProvider');
    }
    return context;
}
