import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contact.css'

const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <div className="hero min-h-screen bg-cyan-200 mt-10 m-20 w-auto rounded-2xl text-black">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center w-1/2 bg-blue-800 p-20  text-white h-full lg:text-left">
                    <h1 className="text-3xl font-bold">Contact with me</h1>
                    <p>Please feel free to contact with me at any time and I will try my best to react to you as soon as possible.</p>
                    <p className="py-6">Email: rahatchowdhury661@gmail.com </p>
                    <p className="py-6">phone: +8801886807417</p>
                    <p className="py-6">Alternative phone: +8801617807417</p>
                    <p className="py-6">whats app: rahatchowdhury661@gmail.com </p>
                    <p className="py-6">Linked in: rahatchowdhury661@gmail.com </p>
                    <p className="py-6">Linked in: rahatchowdhury661@gmail.com </p>
                    <p className="py-6">Linked in: rahatchowdhury661@gmail.com </p>
                </div>
                <div className=" w-1/2  bg-cyan-200 md:ml-20">
                    <h2 className='text-3xl font-bold text-center'>Send me a Message</h2>
                    <div className="card-body w-full">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your name" className="form-group input input-bordered-none shadow-inner w-full  bg-white" />
                        </div>
                        <div className="form-control">
                            <label className="label ">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="form-group  input input-bordered-none shadow-inner  bg-white" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Message</span>
                            </label>
                            <input type="text" placeholder="password" className="form-group  input input-bordered-none shadow-inner bg-white" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;