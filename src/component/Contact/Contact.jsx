import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaFacebookSquare, FaLinkedin, FaWhatsappSquare, FaRegEnvelope, FaSearchLocation, FaPhoneSquareAlt, FaPhoneSquare } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';


const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current);
        emailjs.sendForm('service_dvmf4ts', 'template_8wft31i', form.current, 'HNAkv7Kikhvp8HiyR')
            .then((result) => {
                console.log(result);
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="hero min-h-screen bg-white mt-10 mx-2 w-[380px]   animation md:w-auto rounded-2xl text-black" >
            <div className="hero-content flex-col lg:flex-row">
                <div className="md:text-center md:w-1/2 bg-primary rounded-lg md:p-20 p-10  text-black h-full lg:text-left">
                    <h1 className="text-3xl mb-10  font-bold">Contact with me</h1>
                    <p className='mb-4 '>Please feel free to contact with me at any time and I will try my best to reach to you as soon as possible.</p>
                    <p className="py-2 flex items-center gap-2"><FaRegEnvelope /> Email: rahatchowdhury661@gmail.com </p>
                    <p className="py-2 flex items-center gap-2"><FaPhoneSquareAlt /> phone: +8801886807417</p>
                    <p className="py-2 flex items-center gap-2"><FaPhoneSquare /> Alternative phone: +8801617807417</p>
                    <p className="py-2 flex items-center gap-2"><FaSearchLocation /> Location: Dhaka, Bangladesh </p>

                    <div className="flex items-center gap-2 text-center mt-6">
                        <Link to='https://www.facebook.com/profile.php?id=100080013413534'> <FaFacebookSquare className='w-10 h-10'></FaFacebookSquare></Link>
                        <Link to='https://www.linkedin.com/in/md-mottakin-rahat-b7b180256/'><FaLinkedin className='w-10 h-10'></FaLinkedin></Link>
                        <Link to='https://api.whatsapp.com/send/?phone=%2B8801886807417&text&type=phone_number&app_absent=0'><FaWhatsappSquare className='w-10 h-10'></FaWhatsappSquare></Link>
                    </div>
                </div>
                <div className=" w-1/2  bg-white md:ml-20">
                    <h2 className='text-3xl font-bold text-center'>Send me a Message</h2>
                    <div className="card-body md:w-full">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your name" name="user_name" className="form-group input input-bordered-none shadow-inner md:w-full w-40  bg-white" />
                            </div>
                            <div className="form-control">
                                <label className="label ">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name="user_email" className="form-group  input input-bordered-none shadow-inner  bg-white md:w-full w-40 " />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Message</span>
                                </label>
                                <input type="text" placeholder="type your message" name="message" className="form-group md:w-full w-40  input input-bordered-none shadow-inner bg-white" />
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-primary' type="submit" value="Send" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;