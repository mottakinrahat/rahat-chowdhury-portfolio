import React from 'react';
import { FaGithubSquare, FaGithubAlt, FaLink, FaArrowCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './ShowProjectHome/ShowProjectHome.css'
const ShowProjects = ({ project }) => {
;
    return (
       
        <div className=" card md:w-[600px]  gap-6 bg-gray-800 mb-6 mx-auto  text-white opacity-90 ">
            <figure className="px-10 pt-10 ">
                <img src={project?.project_image} alt="Shoes" className="rounded w-full h-80 object-cover object-top hover:object-bottom duration-1000 cursor-move" />
            </figure>
            <div className="card-body items-center text-center">
                <div className='flex justify-between items-center '>
                    <h2 className="text-4xl p-3 rounded-xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 text-transparent bg-clip-text to-pink-500">{project?.project_name}</h2>

                </div>
                <p className='from-amber-900'> <span>Technologies: {project?.technologies}</span> </p>
                <div className="card-actions">
                    <Link to={project?.github_client}><button className="btn btn-primary"><FaGithubSquare /> Client</button></Link>
                    {project?.github_server && <Link to={project?.github_server}><button className="btn btn-primary"><FaGithubAlt /> server</button></Link>}
                    <Link to={project?.live_link}><button className="btn btn-primary"><FaLink /> Live link</button></Link>

                </div>
                <Link to={`/projects/${project?._id}`}><button className="btn  hover:bg-cyan-600 mt-0 border-[#00EEFF] border-2 text-white font-bold  rounded-[50px] "> <FaArrowCircleRight /></button></Link>
            </div>
        </div>
    );
};

export default ShowProjects;