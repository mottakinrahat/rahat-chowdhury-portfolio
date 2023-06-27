import React from 'react';
import Banner from './Banner';
import SkillSection from '../SkillSection/SkillSection';
import AboutMe from '../AboutMe/AboutMe';
import Education from '../Education/Education';
import ProjectHome from './ProjectHome/ProjectHome';
import Contact from '../Contact/Contact';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticleBG from '../ParticleBG/ParticleBG';


const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <AboutMe></AboutMe>
            <SkillSection></SkillSection>
            <Education></Education>
            <ProjectHome></ProjectHome>
            <Contact></Contact>
          <ParticleBG></ParticleBG>
        </div>
    );
};

export default Home;