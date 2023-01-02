import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import gsap from "gsap";

function Select({ text }) {
  function animateProjects() {
    const animation1 = gsap.timeline({ repeat: 0 });

    animation1.to(".selectContainer", { backgroundColor: "red", duration: 1 });
  }

  function animate() {
    console.log("hola");
    if (condition) {
    } else if (c) {
    } else {
    }
  }

  return (
    <div className="selectContainer" name={text}>
      <div className="select">
        <div className="borderTop"></div>
        <div className="selectContent">
          <AiOutlinePlus></AiOutlinePlus>
          <p className="selectText">{text}</p>
        </div>
        <div className="borderBottom"></div>
      </div>
    </div>
  );
}

export default Select;
