import React from 'react';
import backgroundImage from '../../assets/banner/background.jpg'
import myImage from '../../assets/banner/editedBG-removebg-preview.png'
const Banner = () => {
    return (
        <div className="relative">
        <div
          className="bg-cover  h-[700px] "
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute h-full inset-0 bg-black opacity-75"></div>
          <div className="relative flex items-center justify-between container px-40 mx-auto  h-full">
            <div className="text-white text-lg w-1/2 sm:text-xl mt-20">
              <h1 className="font-semibold text-3xl">Hello, It's me </h1>
              <h2 className='text-5xl font-bold text-yellow-400'>MD. Mottakin Rahat</h2>
              <p className="mt-2 text-3xl">And I am a <span className='font-semibold text-cyan-500'>Web developer</span></p>
              <p className='mt-4 text-[15px]'>I am a highly proficient developer specializing in the MERN stack, Next.js, and JavaScript. With an extensive command over MongoDB, Express.js, React, and Node.js, I possess the ability to craft dynamic and visually stunning web applications. By harnessing the capabilities of Next.js, I create lightning-fast and engaging user interfaces. 
              </p>
              <button className='px-[28px] py-[12px] hover:bg-cyan-600   bg-[#00EEFF] text-black font-bold mt-10 rounded-[50px]'>Download CV</button>
            </div>
            <div>
              <img
                src={myImage}
                alt="Your Image"
                className="w-[400px] mt-10 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;