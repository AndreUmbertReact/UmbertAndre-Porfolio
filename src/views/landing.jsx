import React from "react";
import gsap from "gsap";

function Landing() {
  function animateLanding() {
    const animationTl = gsap.timeline({ repeat: 0 });

    animationTl.to(".path", {
      duration: 2,
      strokeDashoffset: "0",
    });
    animationTl.to(".path", { fill: "white", duration: 0.5 }, "-=1.3");
    animationTl.to("#pathA", { x: "initial", duration: 1, delay: 0 }, 1);
    animationTl.to(".slider", { width: "0%", duration: 2, delay: 0 }, 1);
    animationTl.to(
      ".letterA",
      {
        x: "-100%",
        duration: 2,
        delay: 1.5,
      },
      2
    );
    animationTl.to(
      ".letterU",
      {
        x: "100%",
        duration: 2,
        delay: 1.5,
      },
      2
    );
    animationTl.to(".letterU", { display: "none" });
    animationTl.to(".letterA", { display: "none" });
    animationTl.to(".landingSection", { display: "none" });
  }

  setTimeout(animateLanding, 1000);

  return (
    <div className="landingSection">
      <div className="letterA">
        <svg
          id="pathA"
          width="95%"
          height="95"
          viewBox="0 0 340 95"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="path"
            d="M49.92 0L43.776 11.392L0 94.72H11.776L49.792 22.272L88.064 94.72H99.584L49.92 0Z"
            fill="white"
            fillOpacity="1"
            strokeWidth="3"
            stroke="white"
          />
          <path
            className="path"
            d="M155.997 24.704V78.464L107.037 29.984L100.125 23.072V94.208H107.421V40.544L156.285 89.024L161.565 94.208H163.197V24.704H155.997Z"
            fill="white"
            fillOpacity="1"
            strokeWidth="3"
            stroke="white"
          />
          <path
            className="path"
            d="M216.047 79.424C210.767 84.32 203.183 86.816 193.199 86.816H173.327V32.192H193.199C195.503 32 198.287 32.192 201.455 32.864C207.503 33.92 212.399 36.128 216.047 39.488C220.943 44.192 223.439 50.816 223.439 59.456C223.439 68.192 220.943 74.816 216.047 79.424ZM221.039 34.112C216.431 29.792 210.671 27.008 203.855 25.568C201.071 25.088 197.423 24.8 192.911 24.8H166.031V94.208H192.911C196.079 94.4 199.631 94.112 203.375 93.344C210.575 91.904 216.431 89.12 221.039 84.896C227.567 78.848 230.831 70.304 230.831 59.456C230.831 48.608 227.567 40.16 221.039 34.112Z"
            fill="white"
            fillOpacity="1"
            strokeWidth="3"
            stroke="white"
          />
          <path
            className="path"
            d="M282.775 50.24C282.775 39.776 278.359 32.384 269.527 28.064C265.111 25.856 260.695 24.8 256.279 24.8H233.719V94.208H241.015V32H256.279C259.639 32 262.999 32.768 266.167 34.4C272.311 37.376 275.383 42.656 275.383 50.24C275.383 57.728 272.311 63.008 266.167 66.08C262.999 67.712 259.639 68.48 256.279 68.48H243.703L250.711 75.296L270.199 94.208H280.855L261.175 75.2C265.111 74.72 269.143 73.088 273.175 70.304C279.607 65.792 282.775 59.072 282.775 50.24Z"
            fill="white"
            fillOpacity="1"
            strokeWidth="3"
            stroke="white"
          />
          <path
            className="path"
            d="M339.227 31.904V24.608H292.858V24.512H285.562V94.208H339.227V87.008H292.858V75.104H339.227V67.808H292.858V31.904H339.227ZM323.003 9.15201H314.651L306.01 23.456H313.979L323.003 9.15201Z"
            fill="white"
            fillOpacity="1"
            strokeWidth="3"
            stroke="white"
          />
        </svg>
      </div>
      <div className="letterU">
        <svg
          width="95%"
          id="pathU"
          height="95"
          viewBox="0 0 374 95"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="path"
            d="M84.864 0.735962H75.392V46.304C75.264 56.672 71.936 65.376 65.536 72.672C59.136 79.968 51.456 83.552 42.496 83.552C33.408 83.552 25.728 79.968 19.328 72.672C12.8 65.376 9.6 56.544 9.472 46.176V0.735962H0V46.176C0.128 59.36 4.224 70.496 12.544 79.712C20.864 89.056 30.848 93.792 42.496 93.792C54.144 93.792 64 89.184 72.32 79.84C80.512 70.496 84.736 59.36 84.864 46.304V0.735962Z"
            fill="white"
            fillOpacity="1"
            strokeWidth="3"
            stroke="white"
          />
          <path
            className="path"
            d="M120.593 77.408L88.625 20.192V93.152H96.113V50.72L120.305 94.4L144.689 50.24V93.152H152.273L152.177 20.288L120.593 77.408Z"
            fill="white"
            fillOpacity="1"
            strokeWidth="3"
            stroke="white"
          />
          <path
            className="path"
            d="M162.2 86.048V49.568H182.552C185.912 49.568 189.272 50.336 192.44 51.968C198.584 54.944 201.656 60.224 201.656 67.808C201.656 75.296 198.584 80.576 192.44 83.648C189.272 85.184 185.912 85.952 182.552 86.048H162.2ZM184.28 30.944C185.816 30.944 187.256 31.232 188.6 31.808C190.904 32.768 192.056 34.4 192.056 36.704C191.96 37.76 191.576 38.816 190.904 39.776C189.656 41.408 187.448 42.272 184.28 42.272H162.2V30.944H184.28ZM195.992 45.632C198.296 44.096 199.448 41.12 199.448 36.704C199.448 32 197.528 28.544 193.688 26.144C190.904 24.416 187.736 23.552 184.28 23.552H155V93.152H182.552C186.872 93.152 191.288 92.096 195.8 89.888C204.632 85.664 209.048 78.272 209.048 67.808C209.048 56.48 204.728 49.088 195.992 45.632Z"
            fill="white"
            fillOpacity="1"
            strokeWidth="3"
            stroke="white"
          />
          <path
            className="path"
            d="M265.38 66.752H224.676V74.048H265.38V66.752ZM265.573 23.552H211.812V93.152H265.573V85.856H219.301V30.944H265.573V23.552Z"
            fill="white"
            fillOpacity="1"
            strokeWidth="3"
            stroke="white"
          />
          <path
            className="path"
            d="M317.4 49.184C317.4 38.72 312.984 31.328 304.152 27.008C299.736 24.8 295.32 23.744 290.904 23.744H268.344V93.152H275.64V30.944H290.904C294.264 30.944 297.624 31.712 300.792 33.344C306.936 36.32 310.008 41.6 310.008 49.184C310.008 56.672 306.936 61.952 300.792 65.024C297.624 66.656 294.264 67.424 290.904 67.424H278.328L285.336 74.24L304.824 93.152H315.48L295.8 74.144C299.736 73.664 303.768 72.032 307.8 69.248C314.232 64.736 317.4 58.016 317.4 49.184Z"
            fill="white"
            fillOpacity="1"
            strokeWidth="3"
            stroke="white"
          />
          <path
            className="path"
            d="M373.083 23.744H320.188V30.944H342.94V93.152H350.236V30.944H373.083V23.744Z"
            fill="white"
            fillOpacity="1"
            strokeWidth="3"
            stroke="white"
          />
        </svg>
      </div>
      <div className="slider"></div>
    </div>
  );
}

export default Landing;
