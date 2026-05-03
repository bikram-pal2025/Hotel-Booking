import { createContext, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

  const [login, setLogin] = useState(true);
  const [loginProfile, setLoginProfile] = useState(false)

  const contextValue = {
    login,
    setLogin,
    setLoginProfile,
    loginProfile,
    
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;