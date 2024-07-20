import { createContext, useContext } from "react";

export const ResumeInfoContext = createContext(null);

export const ResumeInfoContextProvider = ResumeInfoContext.Provider;

export const useResumeContext = () => {
  return useContext(ResumeInfoContext);
};
