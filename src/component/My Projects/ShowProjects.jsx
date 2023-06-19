import React from 'react';
import { FaGithubSquare ,FaGithubAlt,FaLink } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './ShowProjects/ShowProjects.css'
const ShowProjects = ({project }) => {

    return (
        <div className='px-40'>
            <div className="card card-side bg-gray-800 text-white opacity-90 flex justify-between items-center mb-4 p px-10 shadow-xl">
            <figure><img src={project?.project_image} className='p-4' alt="Movie" /></figure>
                <div className="card-body w-1/2 mx-20">
                    <h2 className="card-title">{project?.project_name}</h2>
                    <p> Technologies: {project?.technologies}</p>
                    <div className="card-actions justify-end">
                      
                    </div>
                <div className="join join-horizontal py-4">
                   <a href={project?.github_client}> <button className="bg-white hover:bg-cyan-500 text-black p-2 mr-2 font-bold"><FaGithubSquare></FaGithubSquare><span className="tooltip">GitHub Client</span></button></a>
                
                   {project?.github_server && <a href={project?.github_server}><button  className="bg-white hover:bg-cyan-500 p-2 mr-2 text-black font-bold"><span className="tooltip">GitHub Server</span><FaGithubAlt></FaGithubAlt></button></a>}
                    <a href={project?.live_link}><button className="bg-white hover:bg-cyan-500 mr-2 p-2 text-black font-bold"><span className="tooltip">Live Site Link</span><FaLink></FaLink></button></a>
                </div>
                </div>
                 <Link to={`/projects/${project?._id}`}><button className="bg-cyan-500 hover:bg-cyan-500 p-2 rounded-lg text-white font-bold">See Details</button></Link>
                   
                
            </div>
        </div>
    );
};

export default ShowProjects;