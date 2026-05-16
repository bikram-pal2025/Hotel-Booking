import React, { useContext } from "react";
import Hero from "../component/Hero";
import TopHotel from "../component/TopHotel";
import { StoreContext } from "../component/storeContext";
import ExclosiveOffer from "../component/ExclosiveOffer";
import Review from "../component/Review";
import Inspired from "../component/Inspired";

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
         <Inspired/>
       </>
      )}
    </div>
  </>
  );
};

export default Home;
