import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


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
        <div className="hero min-h-screen bg-cyan-200 mt-10 m-20 w-auto rounded-2xl text-black">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center w-1/2 bg-blue-800 p-20  text-white h-full lg:text-left">
                    <h1 className="text-3xl font-bold">Contact with me</h1>
                    <p>Please feel free to contact with me at any time and I will try my best to react to you as soon as possible.</p>
                    <p className="py-3"> Email: rahatchowdhury661@gmail.com </p>
                    <p className="py-3"><faPhone></faPhone> phone: +8801886807417</p>
                    <p className="py-3">Alternative phone: +8801617807417</p>
                    <p className="py-3">whats app: rahatchowdhury661@gmail.com </p>
                    <p className="py-3">Linked in: rahatchowdhury661@gmail.com </p>
                    <p className="py-3">Linked in: rahatchowdhury661@gmail.com </p>
                    <p className="py-3">Linked in: rahatchowdhury661@gmail.com </p>
                </div>
                <div className=" w-1/2  bg-cyan-200 md:ml-20">
                    <h2 className='text-3xl font-bold text-center'>Send me a Message</h2>
                    <div className="card-body w-full">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your name" name="user_name" className="form-group input input-bordered-none shadow-inner w-full  bg-white" />
                            </div>
                            <div className="form-control">
                                <label className="label ">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name="user_email" className="form-group  input input-bordered-none shadow-inner  bg-white" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Message</span>
                                </label>
                                <input type="text" placeholder="type your message" name="message" className="form-group  input input-bordered-none shadow-inner bg-white" />
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