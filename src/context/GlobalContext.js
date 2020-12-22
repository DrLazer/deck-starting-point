import React, { createContext, useContext, useState } from 'react';

import ControlPanelTools from '../components/ControlPanel/ControlPanelTools';

const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {

  const [activeTool, setActiveTool] = useState(ControlPanelTools.NONE);

  return (
      <GlobalContext.Provider 
          value={{ 
            activeTool,
            setActiveTool
          }}>
          {children}
      </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext)