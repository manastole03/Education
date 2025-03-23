"use client";

import { galleryImages } from '@/app/api/data';
import Masonry from 'react-masonry-css';
import { Card, CardHeader, CardBody, Image, Button } from "@heroui/react";
import Link from 'next/link';

const breakpointColumns = {
    default: 3,
    1024: 2,
    768: 2,
    640: 1,
};

const Gallery = () => {
    return (
        <section className="py-10 bg-gray-50 dark:bg-gray-900">
            <div className='container mx-auto px-4 lg:max-w-screen-xl md:max-w-screen-md' id='gallery-section'>
                <div className="text-center mb-8">
                    <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase'>Our Gallery</p>
                    <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white">
                        Gallery of our Tech Blogs.
                    </h2>
                </div>
                
                <Masonry
                    breakpointCols={breakpointColumns}
                    className="flex -ml-4"
                    columnClassName="pl-4 space-y-6"
                >
                    {galleryImages.map((image, index) => (
                        <Card key={index} className="py-4 w-full bg-white dark:bg-gray-800 transform transition duration-300 hover:scale-105 hover:shadow-lg rounded-xl overflow-hidden">
                            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                <h4 className="text-tiny uppercase font-bold text-gray-700 dark:text-gray-300">{image.name}</h4><br></br>
                                <h5 className="text-default-500">{image.price}</h5><br></br>
                            </CardHeader>
                            <CardBody className="overflow-hidden py-2">
                            <div className="flex justify-center">
                                <Image 
                                    alt={`Gallery image ${index + 1}`}
                                    className="object-cover rounded-xl w-full h-auto transition duration-300 hover:opacity-90"
                                    src={image.src}
                                />
                            </div>

                            </CardBody>
                            <div className="text-center pb-4">
                                <Link href={"#"} passHref><br></br>
                                    <Button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition shadow-md hover:shadow-lg">
                                        Read More
                                    </Button>
                                </Link>
                            </div>
                        </Card>
                    ))}
                </Masonry>
            </div>
        </section>
    );
}

export default Gallery;