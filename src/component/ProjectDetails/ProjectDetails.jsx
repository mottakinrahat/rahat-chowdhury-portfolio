import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProjectDetails = () => {
    const singleProject=useLoaderData();
    console.log(singleProject);
    return (
        <div className='pt-20 md:ml-20 relative'>
            
         <img src={singleProject?.project_image} className=' md:h-[800px] opacity-30 w-full mx-auto rounded object-cover object-top hover:object-bottom duration-1000 cursor-move ' alt="" />
         <div className="absolute h-full inset-0 bg-black opacity-0"></div>
       <div className='relative border-4 sm:w-[500px] md:w-auto mx-auto px-10  md:px-40 mt-[-500px] py-8 bg-black  text-white  md:mx-40  md:h-full'>
        <h2 className='text-6xl font-bold text-center pt-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text '>{singleProject?.project_name}</h2>
        <h2 className='mt-10 text-2xl'><span className='font-bold mt-4'><span className='text-purple-400'>Project Technology:</span></span> {singleProject?.technologies}</h2>
        <h2 className='text-4xl text-center mt-10 font-semibold text-indigo-500'>Project Description</h2>
        <p className='mt-5'>{singleProject?.project_description}</p>
        </div>  
        </div>
    );
};

export default ProjectDetails;