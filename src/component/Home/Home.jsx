import React from "react";
import Banner from "./Banner";
import SkillSection from "../SkillSection/SkillSection";
import AboutMe from "../AboutMe/AboutMe";
import Education from "../Education/Education";
import ProjectHome from "./ProjectHome/ProjectHome";
import Contact from "../Contact/Contact";
import ParticleBG from "../ParticleBG/ParticleBG";
import Experience from "../Experience/Experience";
import BannerSecond from "../banner/BannerSecond";
import Blog from "../Blog/Blog";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <SkillSection></SkillSection>
      <Education></Education>
      <Experience></Experience>
      <ProjectHome></ProjectHome>
      <Contact></Contact>
      <Blog />
      <BannerSecond />
      <div className="z-999">
        <ParticleBG></ParticleBG>
      </div>
    </div>
  );
};

export default Home;
