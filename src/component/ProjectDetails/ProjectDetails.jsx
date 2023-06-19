import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProjectDetails = () => {
    const singleProject=useLoaderData();
    console.log(singleProject);
    return (
        <div className='pt-20 relative'>
         <img src={singleProject?.project_image} className='h-[800px] w-full mx-auto ' alt="" />
         <div className="absolute h-full inset-0 bg-black opacity-0"></div>
       <div className='relative  px-40 mt-[-200px] bg-black  text-white  mx-40  h-full'>
        <h2 className='text-6xl font-bold text-center pt-10 '>{singleProject?.project_name}</h2>
        <h2 className='mt-10 text-2xl'><span className='font-bold mt-4'>Project Technology:</span> {singleProject?.technologies}</h2>
        <h2 className='text-4xl text-center mt-10 font-semibold'>Project Description</h2>
        <p className='mt-5'>{singleProject?.project_description}</p>
        </div>  
        </div>
    );
};

export default ProjectDetails;