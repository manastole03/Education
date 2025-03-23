"use client";

import Image from 'next/image';

const Reviews = () => {
    return (
        <section className='relative py-10' id="cook-section">
            <div className="container mx-auto px-4 lg:max-w-screen-xl md:max-w-screen-md">
                
                <div className='grid grid-cols-1 lg:grid-cols-12 my-16 gap-10 items-center'>
                    <div className='col-span-6 flex justify-center lg:justify-start'>
                        <Image src="/images/new/boyyy.png" alt="nothing" width={500} height={700} className="w-full max-w-sm md:max-w-md lg:max-w-lg" />
                    </div>
                    <div className='col-span-6 flex flex-col justify-center text-center lg:text-left'>
                        <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase'>Services we provide</p>
                        <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white">
                        Experience a comprehensive solution tailored just for you! 🚀
                        </h2>
                        <h5 className='text-black/50 dark:text-white/80 md:text-lg font-normal mt-4'>
                        ✅ Profile Shortlisting 🔍<br></br>
                        ✅ Meticulous Document Preparation 📝<br></br>
                        ✅ Visa Assistance ✈️<br></br>
                        ✅ Thorough Exam Guidance 📚<br></br>
                        ✅ Pre-Departure Support 🎒<br></br>
                        ✅ Academic Course Assistance 🎓<br></br>
                        ✅ Internship Facilitation 💼<br></br>
                        ✅ Job Placement Support 💻<br></br>
                        </h5>
                        <p className='text-black/50 dark:text-white/50 md:text-lg font-normal mt-4'>
                        With our expertise, we ensure seamless support at every stage, making your journey smooth & successful! 
                        </p>
                        <button className='mt-6 text-xl font-medium rounded-full text-white py-4 px-6 bg-primary lg:px-10 border border-primary hover:bg-transparent hover:text-primary transition'>
                            Join Us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;