import React from 'react';
import { FaGithubSquare  } from "react-icons/fa";
import { Link } from 'react-router-dom';
const ShowProjects = ({project }) => {

    return (
        <div className='px-40'>
            <div className="card card-side bg-cyan-100 text-black flex justify-between items-center mb-4 p px-10 shadow-xl">
                <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" className='w-1/2' alt="Movie" /></figure>
                <div className="card-body w-1/2 mx-20">
                    <h2 className="card-title">{project?.project_name}</h2>
                    <p> Technologies: {project?.technologies}</p>
                    <div className="card-actions justify-end">
                      
                    </div>
                </div>
                <div className="join join-vertical py-4">
                   <a href={project?.github_client}> <button className="bg-blue-500 p-2 mb-2 text-white font-bold">client</button></a>
                   {project?.github_server && <a href={project?.github_server}><button className="bg-blue-500 p-2 mb-2 text-white font-bold">Server</button></a>}
                    <a href={project?.live_link}><button className="bg-blue-500 mb-2 p-2 text-white font-bold">Live link</button></a>
                 <Link to={`/projects/${project?._id}`}><button className="bg-blue-500 p-2 text-white font-bold">See Details</button></Link>
                   
                </div>
                
            </div>
        </div>
    );
};

export default ShowProjects;