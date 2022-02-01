import React from "react";
import { useMediaQuery } from "react-responsive";

export const UIContext = React.createContext({
  isMobile: false,
});

const UIProvider: React.FC = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 900 });

  return (
    <UIContext.Provider value={{ isMobile }}>{children}</UIContext.Provider>
  );
};

export default UIProvider;
