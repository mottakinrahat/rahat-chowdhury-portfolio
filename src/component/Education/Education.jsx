import React from 'react';
import education from '../../assets/lottie/education-lottie.json'
import Lottie from "lottie-react";

const Education = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-center mt-10">Educational Qualification</h2>
            <div className='md:flex justify-between items-center gap-10 px-20'>
                {/* image section */}
                <div className='w-1/2'>
                <Lottie className='w-[600px]' animationData={education} loop={true} />
                </div>

                {/* accordion */}
                <div className='w-1/2'>
                    <div className="collapse collapse-plus mb-2 bg-white text-black">
                        <input type="radio" name="my-accordion-3"  />
                        <div className="collapse-title text-xl font-bold">
                            Bachelor in Science
                        </div>
                        <div className="collapse-content">
                            <h1 className='text-xl font-semibold'>East West University</h1>
                            
                        </div>
                    </div>
                    <div className="collapse collapse-plus mb-2 bg-white text-black">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            HSC
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus mb-2 bg-white text-black">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                           SSC
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;