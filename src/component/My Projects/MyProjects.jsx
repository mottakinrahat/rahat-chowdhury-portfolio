import React, { useEffect, useState } from 'react';
import ShowProjects from './ShowProjects';

const MyProjects = () => {
    const [projects,setProjects]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/projects')
        .then(res => res.json())
        .then(data=>setProjects(data))
    },[])
    console.log(projects);
    return (
        <div className='pt-20'>    

             {
                projects.map(project =><ShowProjects key={project._id} project={project}></ShowProjects>)
             }
            </div>

    );
};

export default MyProjects;