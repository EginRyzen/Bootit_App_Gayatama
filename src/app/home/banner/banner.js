import React from 'react';
import { images } from './data';
import Image from 'next/image';

function Banner() {
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
                        <Image src="/home/banner/Component/1.png" id='banner-logo' className='absolute right-2 top-14' alt="Banner" loading='lazy' width={60} height={60} />
                        <Image src="/home/banner/Component/5.png" id='banner-logo' className='absolute right-24 top-1' alt="Banner" loading='lazy' width={60} height={60} />
                        <Image src="/home/banner/Component/4.png" id='banner-logo' className='absolute left-24 top-1' alt="Banner" loading='lazy' width={60} height={60} />
                        <Image src="/home/banner/Component/1.png" id='banner-logo' className='absolute right-2 top-14' alt="Banner" loading='lazy' width={60} height={60} />
                        <Image src="/home/banner/Component/7.png" id='banner-logo' className='absolute left-2 top-14' alt="Banner" loading='lazy' width={60} height={60} />
                        <Image src="/home/banner/Component/3.png" id='banner-logo' className='absolute left-2 bottom-24' alt="Banner" loading='lazy' width={60} height={60} />
                        <Image src="/home/banner/Component/6.png" id='banner-logo' className='absolute right-2 bottom-24' alt="Banner" loading='lazy' width={60} height={60} />
                        <Image src="/home/banner/Component/2.png" id='banner-logo' className='absolute left-[45%] bottom-4' alt="Banner" loading='lazy' width={60} height={60} />
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
