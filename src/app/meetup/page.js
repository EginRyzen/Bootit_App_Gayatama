"use client";
import React from 'react';
import { Data } from './data.js';
import { useRouter } from 'next/navigation';
import Search from './components/serach.js';
import InputSelect from './components/inputselect.js';
import Pagination from './components/pagination.js';

function Page() {
    const router = useRouter();

    const handleCardClick = (id) => {
        // Navigate to the detail page with the meetup id
        router.push(`meetup/detail/${id}`);
    };

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row py-20 gap-10">
            <div className='w-full md:w-[30%]'>
                <div className='sticky top-28'>
                    <div className='text-xl font-medium text-[#3a3f47]'>{Data.title}</div>
                    <p className='text-sm font-light text-[#3a3f47] my-5'>{Data.description}</p>
                </div>
            </div>
            <div className='w-full md:w-[70%]'>
                <Search />
                <hr className='my-4' />
                <div className='w-full flex justify-end items-center gap-5'>
                    <div className="block mb-2 text-md font-medium text-[#3a3f47]">Sort by:</div>
                    <InputSelect />
                </div>

                <div className="grid grid-cols-1 relative z-10 md:grid-cols-2 gap-5 mt-10">
                    {Data.dataMeetup.slice(0, 4).map((item, index) => (
                        <div key={index} className="max-w-sm border bg-white rounded-lg shadow-2xl flex flex-col h-full">
                            <a href="#" onClick={() => handleCardClick(item.id)}>
                                <img className="w-full h-full object-cover rounded-t-lg" src={item.img} alt="" />
                            </a>
                            <div className="p-5 flex-grow">
                                <div className='flex gap-2 flex-wrap'>
                                    {item.category.map((category, index) => (
                                        <span key={index} className='py-1 px-2 text-[#3a3f47] bg-transparent font-medium border-2 border-[#f2f2f2] rounded-md text-xs'>
                                            {category.name}
                                        </span>
                                    ))}
                                </div>
                                <a href="#" onClick={() => handleCardClick(item.id)}>
                                    <h5 className="mb-2 mt-3 text-xl font-normal text-blue-500 hover:underline">
                                        {item.title}
                                    </h5>
                                </a>
                                <p className='text-[10px] font-light text-[#3a3f47] mb-2'>
                                    by: {item.organizer} | <span className='text-blue-500'>{item.place}</span>
                                </p>
                                <p className="mb-3 text-sm font-light text-gray-400">
                                    {item.description}
                                </p>
                            </div>
                            <div className='w-full px-5 py-3 bg-[#f2f2f2] flex justify-between'>
                                <div className='text-xs text-[#3a3f47]'>Remaining Quota: {item.quota}</div>
                                <div className='text-xs text-[#3a3f47]'>{item.deadline}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <Pagination />
            </div>
        </div>
    );
}

export default Page;
