import React from 'react';
import Banner from './Banner';
import SkillSection from '../SkillSection/SkillSection';
import AboutMe from '../AboutMe/AboutMe';
import MyProjects from '../My Projects/MyProjects';
import Education from '../Education/Education';

const Home = () => {
    return (
        <div>
         <Banner></Banner> 
         <AboutMe></AboutMe>
         <SkillSection></SkillSection>
         <Education></Education>
         <MyProjects></MyProjects>
        </div>
    );
};

export default Home;