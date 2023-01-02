import React, { useState } from "react";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiSwagger } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { SiMaterialui } from "react-icons/si";
import { ImGit } from "react-icons/im";

function HabilitiesSection() {
  let [render, setRender] = useState(false);
  let [number, setNumber] = useState("");

  const handleChange = (props) => {
    setRender(true);
    console.log(render);
    setNumber(props);
    console.log(props);
    console.log(number);
  };

  return (
    <div className="skillsSection">
      <h3 className="skillsTitle">Skills</h3>
      <div className="skillsIconsContainer">
        <div onClick={() => handleChange("0")} className="individualSkillIcon">
          {render && number === "0" ? (
            <FaReact className="skillIcon reactIcon"></FaReact>
          ) : (
            <p className="skillName">ReactJS</p>
          )}
        </div>
        <div onClick={() => handleChange("1")} className="individualSkillIcon">
          {render && number === "1" ? (
            <SiJavascript className="skillIcon javascriptIcon"></SiJavascript>
          ) : (
            <p className="skillName">JavaScript</p>
          )}
        </div>
        <div onClick={() => handleChange("2")} className="individualSkillIcon">
          {render && number === "2" ? (
            <AiFillHtml5 className="skillIcon htmlIcon"></AiFillHtml5>
          ) : (
            <p className="skillName">HTML5</p>
          )}
        </div>
        <div onClick={() => handleChange("3")} className="individualSkillIcon">
          {render && number === "3" ? (
            <DiCss3 className="skillIcon cssIcon"></DiCss3>
          ) : (
            <p className="skillName">CSS3</p>
          )}
        </div>
        <div onClick={() => handleChange("4")} className="individualSkillIcon">
          {render && number === "4" ? (
            <SiTailwindcss className="skillIcon tailwindcssIcon"></SiTailwindcss>
          ) : (
            <p className="skillName">Tailwindcss</p>
          )}
        </div>
        <div onClick={() => handleChange("5")} className="individualSkillIcon">
          {render && number === "5" ? (
            <FaNodeJs className="skillIcon nodejsIcon"></FaNodeJs>
          ) : (
            <p className="skillName">NodeJs</p>
          )}
        </div>
        <div onClick={() => handleChange("6")} className="individualSkillIcon">
          {render && number === "6" ? (
            <SiPostman className="skillIcon postmanIcon"></SiPostman>
          ) : (
            <p className="skillName">Postman</p>
          )}
        </div>
        <div onClick={() => handleChange("7")} className="individualSkillIcon">
          {render && number === "7" ? (
            <FaBootstrap className="skillIcon bootstrapIcon"></FaBootstrap>
          ) : (
            <p className="skillName">Bootstrap</p>
          )}
        </div>
        <div onClick={() => handleChange("8")} className="individualSkillIcon">
          {render && number === "8" ? (
            <FaVuejs className="skillIcon vue3Icon"></FaVuejs>
          ) : (
            <p className="skillName">VUE3</p>
          )}
        </div>
        <div onClick={() => handleChange("9")} className="individualSkillIcon">
          {render && number === "9" ? (
            <SiExpress className="skillIcon"></SiExpress>
          ) : (
            <p className="skillName">Express</p>
          )}
        </div>
        <div onClick={() => handleChange("10")} className="individualSkillIcon">
          {render && number === "10" ? (
            <FaSass className="skillIcon sassIcon"></FaSass>
          ) : (
            <p className="skillName">Sass</p>
          )}
        </div>
        <div onClick={() => handleChange("11")} className="individualSkillIcon">
          {render && number === "11" ? (
            <SiSwagger className="skillIcon swaggerIcon"></SiSwagger>
          ) : (
            <p className="skillName">Swagger</p>
          )}
        </div>
        <div onClick={() => handleChange("12")} className="individualSkillIcon">
          {render && number === "12" ? (
            <GrMysql className="skillIcon mysqlIcon"></GrMysql>
          ) : (
            <p className="skillName">MySQL</p>
          )}
        </div>
        <div onClick={() => handleChange("13")} className="individualSkillIcon">
          {render && number === "13" ? (
            <SiMongodb className="skillIcon mongodbIcon"></SiMongodb>
          ) : (
            <p className="skillName">MongoDB</p>
          )}
        </div>
        <div onClick={() => handleChange("14")} className="individualSkillIcon">
          {render && number === "14" ? (
            <SiMaterialui className="skillIcon materialuiIcon"></SiMaterialui>
          ) : (
            <p className="skillName">MaterualUI</p>
          )}
        </div>
        <div onClick={() => handleChange("15")} className="individualSkillIcon">
          {render && number === "15" ? (
            <ImGit className="skillIcon gitIcon"></ImGit>
          ) : (
            <p className="skillName">Git</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default HabilitiesSection;
