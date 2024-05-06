import React, { useEffect } from "react";
import myNewImage from "../../assets/banner/myLastBannerImg.png";

import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import "../Home/BannerCss/Banner.css";
const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="relative animation px-5 md:px-0 "
      style={{
        backgroundImage: `url(https://i.ibb.co/YRnsFTq/gradient-blue-abstract-background-smooth-dark-blue-with-black-vignette-studio.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-cover  md:h-[700px] relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="relative md:flex  md:justify-between md:items-center container md:px-40 md:mx-auto  md:h-full">
          <div className="text-white text-lg md:w-1/2 sm:text-xl mt-20">
            <h1 className="font-semibold text-3xl">Hello, It's me </h1>
            <h2 className="text-5xl font-bold  textGradient">
              MD. Mottakin Rahat
            </h2>
            <div className="text-2xl font-bold text-cyan-200">
              <Typewriter
                style={{ font: "bold" }}
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  strings: ["I am a Full stack Developer"],
                }}
              ></Typewriter>
            </div>
            <p className="mt-4 md:text-[15px]">
              I am a highly proficient developer specializing in the MERN stack.
              With an extensive command over
              React,Next.js,Redux,Node.js,MongoDB, Express.js,mongoose, I
              possess the ability to craft dynamic and visually stunning web
              applications. By harnessing the capabilities of Next.js, I create
              lightning-fast and engaging user interfaces.
            </p>
            <div className="mt-4  flex justify-between items-center gap-4">
              <div>
                <h3 className="text-5xl font-bold textGradient">
                  <CountUp
                    className="text-5xl font-bold textGradient"
                    start={0}
                    end={12}
                    duration={2}
                    delay={0}
                  ></CountUp>
                  +
                </h3>
                <p className="font-semibold text-cyan-200 ">Total Projects</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold textGradient">
                  <CountUp
                    className="text-5xl font-bold textGradient "
                    start={0}
                    end={100}
                    duration={2}
                    delay={0}
                  ></CountUp>
                  +
                </h3>
                <p className="font-semibold text-cyan-200">Problem solving</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold textGradient">
                  <CountUp
                    className="text-5xl font-bold textGradient"
                    start={0}
                    end={1}
                    duration={2}
                    delay={0}
                  ></CountUp>
                  +
                </h3>
                <p className="font-semibold text-cyan-200">
                  Year of Experience
                </p>
              </div>
            </div>
            <div className="ml-20">
              <Link to="https://drive.google.com/file/d/1cXEeGWseG0G3pqszFNZ_YIT8CoGlWtHN/view?usp=sharing">
                {" "}
                <button className="box px-[28px] py-[12px] hover:bg-cyan-600 mr-2 bg-[#00EEFF] text-black font-bold mt-10 rounded-[50px]">
                  Download CV
                </button>
              </Link>
              <Link to="https://drive.google.com/file/d/1HswZd9V-YmLuyG4wu1i1wMePX07WSpiy/view?usp=sharing">
                <button className="box px-[28px] py-[12px] hover:bg-cyan-600   border-[#00EEFF] border-2 text-white font-bold mt-10 rounded-[50px]">
                  Resume
                </button>
              </Link>
            </div>
          </div>
          <div>
            <img
              src={myNewImage}
              alt="Your Image"
              className="w-[550px] md:ml-20 mt-10 animation rounded-full home-img"
              data-aos="fade-left"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
