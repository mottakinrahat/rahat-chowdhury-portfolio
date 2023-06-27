import React, { useEffect, useState } from 'react';
import ShowProjectsHome from './ShowProjectHome'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';



const ProjectHome = () => {
    useEffect(()=>{
      AOS.init({duration:2000})
    },[])
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('https://rahat-portfolio-server-phi.vercel.app/projects')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    console.log(projects);
    return (
        <div className='animation' data-aos="fade-down">
             <h2 className="text-3xl font-bold text-center mt-40">Some of my Projects</h2>
            <div className='pt-20'>

                {
                    projects.slice(0, 3).map(project => <ShowProjectsHome key={project._id} project={project}></ShowProjectsHome>)
                }
            </div>
           <div className='text-center'> <Link to='/projects'><button className='px-[28px] py-[12px] hover:bg-cyan-600 mr-2 bg-[#00EEFF] text-black font-bold mt-10 rounded-[50px]'>SEE MORE</button></Link></div>
        </div>

    );
};

export default ProjectHome;