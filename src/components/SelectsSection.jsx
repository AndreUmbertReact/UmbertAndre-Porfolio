import React from "react";
import Select from "./Select";

const selects = ["Projects", "About Me", "Contact"];

function SelectsSection() {
  return (
    <div className="selectsSection">
      {selects.map((select, index) => (
        <Select text={select} key={index}></Select>
      ))}
    </div>
  );
}

export default SelectsSection;
