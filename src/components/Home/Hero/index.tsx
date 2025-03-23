"use client";

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="home-section" className="bg-gray-50 dark:bg-gray-800 py-20">
      <div className="container mx-auto max-w-screen-xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10">
          {/* Text Section */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
              Achieve Your Study Abroad Dreams with Us
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl mb-8">
              Empowering your global dreams: Discover endless opportunities with our expert guidance in foreign education!<br className="hidden sm:block" /> 
              Book your free consultation now.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link 
                href="#cook-section" 
                className="text-lg sm:text-xl w-full sm:w-auto font-medium rounded-full text-white bg-primary border border-primary py-4 px-6 sm:px-14 text-center transition hover:bg-transparent hover:text-primary"
              >
                Let's Talk
              </Link>
              <Link 
                href="#about-section" 
                className="text-lg sm:text-xl w-full sm:w-auto flex items-center justify-center border border-primary rounded-full py-4 px-10 text-primary transition hover:bg-primary hover:text-white"
              >
                Explore Now
              </Link>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="lg:col-span-6 flex justify-center">
            <Image 
              src="/images/home.png" 
              alt="Study Abroad" 
              width={750} 
              height={655} 
              className="max-w-full h-auto drop-shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
