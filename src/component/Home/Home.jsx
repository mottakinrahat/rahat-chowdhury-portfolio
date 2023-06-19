import React from 'react';
import Banner from './Banner';
import SkillSection from '../SkillSection/SkillSection';
import AboutMe from '../AboutMe/AboutMe';
import Education from '../Education/Education';
import ProjectHome from './ProjectHome/ProjectHome';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
         <Banner></Banner> 
         <AboutMe></AboutMe>
         <SkillSection></SkillSection>
         <Education></Education>
         <ProjectHome></ProjectHome>
         <Contact></Contact>
        </div>
    );
};

export default Home;