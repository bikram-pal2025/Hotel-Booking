/* eslint-disable react-refresh/only-export-components */

import { createContext, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [login, setLogin] = useState(true);
  const [loginProfile, setLoginProfile] = useState(false);

  const contextValue = {
    login,
    setLogin,
    loginProfile,
    setLoginProfile,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;