import React, { useEffect, useState } from 'react';
import ShowSkill from './ShowSkill';

const SkillSection = () => {
    const [skills,setSkills]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/skills')
        .then(res => res.json())
        .then(data=>setSkills(data))
    },[])
    console.log(skills);
    return (
        <div>
            <h2 className='text-3xl font-bold text-center mt-10'>My Skills</h2>
         <div className='grid md:grid-cols-5 justify-around items-center px-10 ml-20'>
         {
            skills.map(skill=><ShowSkill key={skill._id} skill={skill}></ShowSkill>)
          }
         </div>
        </div>
    );
};

export default SkillSection;