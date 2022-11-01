import { createContext, ReactNode, useState } from "react";

interface Props {
  openWid: boolean;
  wrapperWid: () => void;
}

export const WidgetContext = createContext({} as Props);

export const WidGetProvider = ({ children }: { children: ReactNode }) => {
  const [openWid, setOpenWid] = useState(false);

  const wrapperWid = () => setOpenWid(!openWid);

  return (
    <WidgetContext.Provider value={{ openWid, wrapperWid }}>
      {children}
    </WidgetContext.Provider>
  );
};
