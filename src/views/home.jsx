import React from "react";
import Header from "../components/Header";
import PersonalSection from "../components/personalSection";
import HabilitiesSection from "../components/HabilitiesSection";
import SelectsSection from "../components/selectsSection";

function Home() {
  return (
    <div className="home">
      <div className="homeContainer">
        <Header></Header>
        <PersonalSection></PersonalSection>
        <HabilitiesSection></HabilitiesSection>
        <SelectsSection></SelectsSection>
      </div>
    </div>
  );
}

export default Home;
