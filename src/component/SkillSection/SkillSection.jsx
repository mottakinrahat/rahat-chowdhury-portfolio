import React, { useEffect, useState } from 'react';
import ShowSkill from './ShowSkill';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SkillSection = () => {
    const [skills, setSkills] = useState([])
    useEffect(() => {
        fetch('https://rahat-portfolio-server-phi.vercel.app/skills')
            .then(res => res.json())
            .then(data => setSkills(data))
    }, [])
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <div className='animation' data-aos='zoom-in-up'>
            <h2 className='text-3xl font-bold text-center mt-10'>My Skills</h2>
            <div className='grid md:grid-cols-5 justify-between items-center gap-4 px-10 ml-20'>
                {
                    skills.map(skill => <ShowSkill key={skill._id} skill={skill}></ShowSkill>)
                }
            </div>
        </div>
    );
};

export default SkillSection;