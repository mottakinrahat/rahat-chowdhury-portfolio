import React, { useEffect, useState } from 'react';
import myNewImage from '../../assets/banner/myLastBannerImg.png'
import profile from '../../assets/lottie/profile.json'
import Lottie from "lottie-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])
  return (
    <div className='animation ' data-aos='zoom-out'>
      <div>
        <div className="hero min-h-screen bg-base-200 w-full">
          <div className="hero-content  flex-col  lg:flex-row md:gap-40">
            <Lottie className='md:w-[600px] md:mt-10 ' animationData={profile} loop={true} />
            <div className="w-full">
              <h1 className="text-5xl font-bold">About Me</h1>
              <h1 className="text-2 font-bold">React Developer</h1>

              <div className='mt-4 md:flex justify-around items-center md:w-full md:ml-0 ml-4 w-80 border border-primary p-4 rounded-xl '>
                <div>
                  <h2 className='py-2'>Date of Birth: 2, june 2001</h2>
                  <h2 className='py-2'>Nationality: Bangladeshi</h2>
                  <h2 className='py-2'>Religion: Islam</h2>
                  <h2 className='py-2'>Language:Bengali(primary)<br /> English(secondary)</h2>
                </div>
                <div>
                  <h2 className='py-2'>Education: BSc in CSE</h2>
                  <h2 className='py-2'>University: East West University</h2>
                  <h2 className='py-2'>Present Address: Aftabnagar,Dhaka, Bangladesh</h2>
                  <h2 className='py-2'>Permanent Address: Cumilla ,Bangladesh</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
