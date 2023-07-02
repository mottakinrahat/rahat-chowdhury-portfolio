import React from 'react';
import {FaFacebookSquare,FaLinkedin,FaWhatsappSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import footLogo from '../../assets/logo/porfolioLogo.png'

const Footer = () => {
    return (
        <div className='mt-20 w-full '>
            <footer className="footer p-10 bg-neutral opacity-70  text-white">
                <div>
                  <img src={footLogo} className='h-20' alt="" />
                    <p>MD. Mottakin Rahat<br />Web Developer</p>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <div className="grid grid-flow-col gap-4">
                    <Link to='https://www.facebook.com/profile.php?id=100080013413534'> <FaFacebookSquare className='w-10 h-10'></FaFacebookSquare></Link>
                   <Link to='https://www.linkedin.com/in/md-mottakin-rahat-b7b180256/'><FaLinkedin className='w-10 h-10'></FaLinkedin></Link>
                   <Link to='https://api.whatsapp.com/send/?phone=%2B8801886807417&text&type=phone_number&app_absent=0'><FaWhatsappSquare className='w-10 h-10'></FaWhatsappSquare></Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;