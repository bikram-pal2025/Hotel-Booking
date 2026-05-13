import React, { useContext } from "react";
import Hero from "../component/Hero";
import TopHotel from "../component/TopHotel";
import { StoreContext } from "../component/storeContext";
import ExclosiveOffer from "../component/ExclosiveOffer";
import Review from "../component/Review";

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
         <Review/>
       </>
      )}
    </div>
  </>
  );
};

export default Home;
