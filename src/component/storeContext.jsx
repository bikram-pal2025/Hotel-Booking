/* eslint-disable react-refresh/only-export-components */

import { createContext, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [loginProfile, setLoginProfile] = useState(false);
  const [email, setEmail] = useState("");

    const [hotelId, setHotelId] = useState(null);
    
    const [bookingData, setBookingData] = useState({
  hotel: null,
  checkIn: "",
  checkOut: "",
  totalDays: 0,
  finalPrice: 0,
});




  const contextValue = {
    login,
    setLogin,
    loginProfile,
    setLoginProfile,
    email,
    setEmail,
    hotelId,
    setHotelId,
    bookingData,
    setBookingData,

  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;