import React from 'react';
import { FaGithubSquare, FaGithubAlt, FaLink, FaArrowCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './ShowProjects/ShowProjects.css'
const ShowProjects = ({ project }) => {

    return (
        // <div className='px-40'>
        //     <div className="card card-side bg-gray-800 text-white opacity-90 flex justify-between items-center mb-4 p px-10 shadow-xl">
        //     <figure><img src={project?.project_image} className='p-4' alt="Movie" /></figure>
        //         <div className="card-body w-1/2 mx-20">
        //             <h2 className="card-title">{project?.project_name}</h2>
        //             <p> Technologies: {project?.technologies}</p>
        //             <div className="card-actions justify-end">

        //             </div>
        //         <div className="join join-horizontal py-4">
        //            <a href={project?.github_client}> <button className="bg-white hover:bg-cyan-500 text-black p-2 mr-2 font-bold"><FaGithubSquare></FaGithubSquare><span className="tooltip">GitHub Client</span></button></a>

        //            {project?.github_server && <a href={project?.github_server}><button  className="bg-white hover:bg-cyan-500 p-2 mr-2 text-black font-bold"><span className="tooltip">GitHub Server</span><FaGithubAlt></FaGithubAlt></button></a>}
        //             <a href={project?.live_link}><button className="bg-white hover:bg-cyan-500 mr-2 p-2 text-black font-bold"><span className="tooltip">Live Site Link</span><FaLink></FaLink></button></a>
        //         </div>
        //         </div>
        //          <Link to={`/projects/${project?._id}`}><button className="bg-cyan-500 hover:bg-cyan-500 p-2 rounded-lg text-white font-bold">See Details</button></Link>


        //     </div>
        // </div>
        <div>
            <div className="card w-[600px] gap-6 bg-gray-800 mb-6 md:mx-10  text-white opacity-90 shadow-xl">
                <figure className="px-10 pt-10 ">
                    <img src={project?.project_image} alt="Shoes" className="rounded-xl w-full h-80 object-cover object-top hover:object-bottom duration-1000 cursor-move " />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="text-4xl p-3 rounded-xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">{project?.project_name}</h2>
                    <p className='from-amber-900'> <span>Technologies: {project?.technologies}</span> </p>
                    <div className="card-actions">
                        <Link to={project?.github_client}><button className="btn btn-primary"><FaGithubSquare /> Client</button></Link>
                        {project?.github_server && <Link to={project?.github_server}><button className="btn btn-primary"><FaGithubAlt /> server</button></Link>}
                        <Link to={project?.live_link}><button className="btn btn-primary"><FaLink /> Live link</button></Link>
                    </div>
                    <Link to={`/projects/${project?._id}`}><button className="btn  hover:bg-cyan-600 mt-0 border-[#00EEFF] border-2 text-white font-bold  rounded-[50px] "> <FaArrowCircleRight /></button></Link>
                </div>
            </div>
        </div>
    );
};

export default ShowProjects;