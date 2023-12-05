import React from "react";
import Hero from "../components/home/Hero";
import Statistics from "../components/home/Statistics";
import Features from "../components/home/Features";
import Plan from "../components/home/Plan";
import Map from "../components/home/Map";
import Slider from "../components/home/Slider";

const Home = () => {
  return (
    <div>
      <Hero />
      <Statistics />
      <Features />
      <Plan />
      <Map />
      <Slider />
    </div>
  );
};

export default Home;
