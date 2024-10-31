import React, { useState, useEffect } from 'react';
import { images } from './data';
import Image from 'next/image';

const initialDataIcon = [
    { id: 1, image: "/home/banner/Component/1.png", class: "absolute right-2 md:right-0 lg:right-2 top-14", alt: "Image1" },
    { id: 2, image: "/home/banner/Component/5.png", class: "absolute right-24 md:right-14 lg:right-24 top-1", alt: "Image2" },
    { id: 3, image: "/home/banner/Component/4.png", class: "absolute left-24 md:left-14 lg:left-24 top-1", alt: "Image3" },
    { id: 4, image: "/home/banner/Component/7.png", class: "absolute left-2 md:left-0 lg:left-2 top-14", alt: "Image4" },
    { id: 5, image: "/home/banner/Component/3.png", class: "absolute left-2 bottom-24 sm:bottom-24", alt: "Image5" },
    { id: 6, image: "/home/banner/Component/6.png", class: "absolute right-2 bottom-24 sm:bottom-24", alt: "Image6" },
    { id: 7, image: "/home/banner/Component/2.png", class: "absolute left-[45%] bottom-2 sm:bottom-4", alt: "Image7" },
];

function Banner() {
    const [dataIcon, setDataIcon] = useState(initialDataIcon);

    useEffect(() => {
        const interval = setInterval(() => {
            setDataIcon(prevDataIcon => {
                const newDataIcon = prevDataIcon.map((icon, index) => ({
                    ...icon,
                    class: prevDataIcon[(index + 1) % prevDataIcon.length].class,
                }));
                return newDataIcon;
            });
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col-reverse md:flex-row items-center py-12 justify-between">
                <div className="flex flex-col w-full md:w-[50%] pt-5 md:pt-0 md:my-10">
                    <div className="text-xl sm:text-3xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        Build Your Path to Success as a Reliable Developer
                    </div>
                    <p className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-indigo-600 my-4">
                        The first step to directed learning is with a learning roadmap.
                    </p>
                    <div className="pt-5 md:mt-10">
                        <a
                            href='/bootcamp'
                            type="button"
                            className="text-indigo-700 border border-indigo-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-bold rounded-sm text-sm px-5 py-2.5 text-center me-2 mb-2 transition-all duration-500 ease-in-out"
                        >
                            Learn Now
                        </a>
                    </div>
                </div>
                <div className="w-[100%] md:w-[40%] flex flex-col justify-center relative h-[500px]">
                    <div className="w-full px-5 md:px-0 justify-center">
                        {dataIcon.map((item) => (
                            <Image
                                key={item.id}
                                src={item.image}
                                id='banner-logo'
                                className={item.class}
                                alt={item.alt}
                                loading='lazy'
                                width={60}
                                height={60}
                            />
                        ))}
                        <div className='banner flex justify-center'>
                            <Image src={images[0].image} alt="Banner" loading='lazy' width={400} height={400} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
