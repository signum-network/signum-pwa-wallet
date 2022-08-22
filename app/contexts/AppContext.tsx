import { FC, createContext } from "react";
import { isClientSide } from "../isClientSide";
import { isMobile } from "react-device-detect";
import { ChildrenProps } from "../../types/ChildrenProps";

export interface AppContextType {
  IsClientSide: boolean;
  IsMobile: boolean;
  // put all _global_ and _constant_ status herein
}

const config: AppContextType = {
  IsMobile: isMobile,
  IsClientSide: isClientSide(),
};

export const AppContext = createContext<AppContextType>(config);

export const AppContextProvider: FC<ChildrenProps> = ({ children }) => {
  return <AppContext.Provider value={config}>{children}</AppContext.Provider>;
};
