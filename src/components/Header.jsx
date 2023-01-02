import React from "react";
import { Link } from "react-router-dom";
import { GrLinkedin } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import Home from "../views/home";

function Header() {
  return (
    <div className="header">
      <Link className="logo" to={"/"} element={<Home />}>
        <svg
          height="10.063vw"
          viewBox="0 0 185 95"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M49.92 0L43.776 11.392L0 94.72H11.776L49.792 22.272L88.064 94.72H99.584L49.92 0Z"
            fill="black"
          />
          <path
            d="M184.864 1.792H175.392V47.36C175.264 57.728 171.936 66.432 165.536 73.728C159.136 81.024 151.456 84.608 142.496 84.608C133.408 84.608 125.728 81.024 119.328 73.728C112.8 66.432 109.6 57.6 109.472 47.232V1.792H100V47.232C100.128 60.416 104.224 71.552 112.544 80.768C120.864 90.112 130.848 94.848 142.496 94.848C154.144 94.848 164 90.24 172.32 80.896C180.512 71.552 184.736 60.416 184.864 47.36V1.792Z"
            fill="black"
          />
        </svg>
      </Link>
      <div className="socialMedias">
        <a
          className="smIcon"
          href="https://www.linkedin.com/in/andreumbert"
          target="_blank"
        >
          <GrLinkedin style={{ fontSize: " 10.063vw" }}></GrLinkedin>
        </a>
        <a
          className="smIcon"
          href="https://github.com/AndreUmbert"
          target="_blank"
        >
          <BsGithub style={{ fontSize: " 10.063vw" }}></BsGithub>
        </a>
      </div>
    </div>
  );
}

export default Header;
