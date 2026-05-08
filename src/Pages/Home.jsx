import React, { useContext } from "react";
import Hero from "../component/Hero";
import TopHotel from "../component/TopHotel";
import { StoreContext } from "../component/storeContext";
import ExclosiveOffer from "../component/ExclosiveOffer";

const Home = () => {
  const { login } = useContext(StoreContext);
  return (
  <>
      <div>
      <Hero />

      {!login && (
       <>
         <TopHotel />
        <ExclosiveOffer/>
       </>
      )}
    </div>
  </>
  );
};

export default Home;
