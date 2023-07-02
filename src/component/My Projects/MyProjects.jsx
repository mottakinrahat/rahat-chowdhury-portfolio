import React, { useEffect, useState } from 'react';
import ShowProjects from './ShowProjects';
import ParticleBG from '../ParticleBG/ParticleBG';
import AOS from 'aos';
import 'aos/dist/aos.css';
const MyProjects = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('https://rahat-portfolio-server-phi.vercel.app/projects')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    console.log(projects);
    return (
        <div className="relative animation pt-20 md:grid grid-cols-2 justify-around items-center " data-aos="zoom-out-left">


            {
                projects.map(project => <ShowProjects key={project._id} project={project}></ShowProjects>)
            }
            <ParticleBG></ParticleBG>
        </div>

    );
};

export default MyProjects;