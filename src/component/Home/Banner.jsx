import React, { useEffect } from 'react';
import backgroundImage from '../../assets/banner/background.jpg'
import myNewImage from '../../assets/banner/myLastBannerImg.png'
import { FaFacebookSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])
  return (
    <div className="relative animation" data-aos="fade-up">
      <div
        className="bg-cover  h-[700px] "
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute h-full inset-0 bg-black opacity-100"></div>
        <div className="relative md:flex md:justify-between md:items-center container md:px-40 mx-auto  h-full">
          <div className="text-white text-lg w-1/2 sm:text-xl mt-20">
            <h1 className="font-semibold text-3xl">Hello, It's me </h1>
            <h2 className='text-5xl font-bold text-yellow-400'>MD. Mottakin Rahat</h2>
            <div className='text-2xl font-bold text-cyan-200'>
              <Typewriter style={{ font: 'bold' }} options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: [
                  'I am a React Developer'
                ]
              }}>

              </Typewriter>
            </div>
            <p className='mt-4 md:text-[15px]'>I am a highly proficient developer specializing in the MERN stack, Next.js, and JavaScript. With an extensive command over MongoDB, Express.js, React, and Node.js, I possess the ability to craft dynamic and visually stunning web applications. By harnessing the capabilities of Next.js, I create lightning-fast and engaging user interfaces.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <Link to='https://www.facebook.com/profile.php?id=100080013413534'> <FaFacebookSquare className='w-10 h-10'></FaFacebookSquare></Link>
              <Link to='https://www.linkedin.com/in/md-mottakin-rahat-b7b180256/'><FaLinkedin className='w-10 h-10'></FaLinkedin></Link>
              <Link to='https://api.whatsapp.com/send/?phone=%2B8801886807417&text&type=phone_number&app_absent=0'><FaWhatsappSquare className='w-10 h-10'></FaWhatsappSquare></Link>
            </div>
            <Link to='https://drive.google.com/file/d/1Q3CHqVQsFrMJBIoDm6druBR7yGRli2vD/view?usp=sharing'> <button className='px-[28px] py-[12px] hover:bg-cyan-600 mr-2 bg-[#00EEFF] text-black font-bold mt-10 rounded-[50px]'>My CV</button></Link>
            <Link to='https://drive.google.com/file/d/1R3dbpOZmyeEzgZ5AVnm3W36Qb0Z4_idY/view?usp=sharing'><button className='px-[28px] py-[12px] hover:bg-cyan-600   border-[#00EEFF] border-2 text-white font-bold mt-10 rounded-[50px]'>Resume</button></Link>
          </div>
          <div>
            <img
              src={myNewImage}
              alt="Your Image"
              className="w-[550px] ml-20 mt-10 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;