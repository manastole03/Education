"use client";

import Image from 'next/image';

const Cook = () => {
    return (
        <section className='relative py-10' id="cook-section">
            <div className="container mx-auto px-4 lg:max-w-screen-xl md:max-w-screen-md">
                <div className='absolute right-0 bottom-[-25%] hidden lg:block'>
                    <Image src={'/images/new/bag.png'} alt="burger-image" width={300} height={500} />
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-12 my-16 gap-10 items-center'>
                    <div className='col-span-6 flex justify-center lg:justify-start'>
                        <Image src="/images/new/boy.png" alt="nothing" width={500} height={700} className="w-full max-w-sm md:max-w-md lg:max-w-lg" />
                    </div>
                    <div className='col-span-6 flex flex-col justify-center text-center lg:text-left'>
                        <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase'>Study with us</p>
                        <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white">
                            Study together with 1,000 students alongside the expert.
                        </h2>
                        <p className='text-black/50 dark:text-white/50 md:text-lg font-normal mt-4'>
                            Join a thriving community of over 1,000 students and learn with the guidance of expert educators. Elevate your learning experience with collaborative study sessions, real-time insights, and top-notch expertise to help you achieve your goals.
                        </p>
                        <p className='text-black/50 dark:text-white/50 md:text-lg font-normal mt-4'>
                            What do you think? Should I make any tweaks or emphasize something more?
                        </p>
                        <button className='mt-6 text-xl font-medium rounded-full text-white py-4 px-6 bg-primary lg:px-10 border border-primary hover:bg-transparent hover:text-primary transition'>
                            Learn more
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cook;