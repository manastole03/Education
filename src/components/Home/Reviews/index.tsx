"use client";

import Slider from "react-slick";
import React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReviewData} from "@/app/api/data";

interface ExpertCardProps {
    name: string;
    profession: string;
    star: string;
}

const ExpertCard: React.FC<ExpertCardProps> = ({ name, profession, star }) => {
    return (
        <div className='m-3 py-10 my-6 text-center bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8'>
            <div className="relative">
                <div className="absolute top-[50%] right-[2%]">
                </div>
            </div>
            <h3 className='text-xl sm:text-2xl font-semibold text-black mt-4'>{name}</h3>
            <h4 className='text-md sm:text-lg font-normal text-black pt-2'>{profession}</h4>
            <p className='text-md sm:text-lg font-normal text-black pt-2'>{star}</p>
        </div>
    );
};

const Expert = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 500,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <section className="bg-primary/15 py-6 sm:py-12">
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl'>
                <div className="text-center">
                    <p className='text-primary text-sm sm:text-lg font-normal mb-2 sm:mb-3 tracking-widest uppercase'>Crafting Success Abroad</p>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-black dark:text-white">
                    See What Students Say About Us
                    </h2>
                </div>
                <Slider {...settings} className='mt-6 sm:mt-10'>
                    {ReviewData.map((items, i) => (
                        <ExpertCard key={i} name={items.name} profession={items.profession} star={items.star} />
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Expert;