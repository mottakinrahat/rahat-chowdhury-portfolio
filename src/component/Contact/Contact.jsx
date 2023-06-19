import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot ,faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Contact = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-center mt-20">Contact with me</h2>
            <div className='mt-20'>
                <div>
                    <div className="card  mx-40 bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">
                            <FontAwesomeIcon className=' h-10 p-[10px] rounded-[10px]' icon={faLocationDot} />
                            <h1 className='text-2xl  border-yellow-500  border-2 p-4 rounded-3xl '><span className='text-yellow-500 font-semibold'>Permanent Address:</span> Cumilla , Chittagong , Bangladesh<br /><p> <span className='text-yellow-500 font-semibold'>Present Address:</span> Aftabnagar, Dhaka , Bangladesh</p> </h1>
                        </div>

                    </div>
                    <div className='flex justify-between items-center gap-6 mt-6 mx-40  '>

                        <div className="card w-1/2 bg-neutral text-neutral-content">
                            <div className="card-body items-center text-center">
                                <FontAwesomeIcon  className=' h-10 p-[10px] rounded-[10px]' icon={faEnvelope} />
                                <h1 className='text-2xl  border-yellow-500  border-2 p-2 rounded-3xl text-white '>rahatchowdhury661@gmail.com</h1>
                               
                            </div>
                        </div>
                        <div className="card w-1/2 bg-neutral text-neutral-content">
                            <div className="card-body items-center text-center">
                            <FontAwesomeIcon  className=' h-10 p-[10px] rounded-[10px]' icon={faPhone} />
                            <h1 className='text-2xl  border-yellow-500  border-2 p-2 rounded-3xl text-white '>+8801886807417</h1>
                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;