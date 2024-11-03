import Image from 'next/image'
import React from 'react'
import { IoIosTimer } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import DataJson from './data.json';

export function Event() {
    return (
        <div className='w-full flex flex-col py-10'>
            <div className='text-[#3a3f47] text-lg sm:text-3xl font-medium'>
                Setelan
            </div>

            <div className='w-full py-10'>
                <div className="grid grid-cols-2 gap-8">
                    {DataJson.DataEvent.map((item) => (
                        <a href="#" key={item.id} className="flex flex-col items-center bg-transparent hover:shadow-md rounded-lg shadow p-6">
                            <div className='flex mb-5'>
                                <Image className="object-cover w-full rounded-t-lg h-72 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg " src={item.img} alt="img" width={100} height={100} />
                                <div className="flex flex-col leading-normal ml-5">
                                    <div className='text-slate-800 font-medium text-md mb-2'>{item.title}</div>
                                    <div className='text-gray-400 font-normal mb-1 text-xs'>
                                        Hosted by : {item.organizer}</div>
                                    <div className='text-gray-400 font-medium mb-3 flex items-center'><IoIosTimer className='mr-1 h-4 w-4' /> <span className='text-xs'>{item.time}</span></div>
                                    <div className='flex'>
                                        <div className='text-gray-500 font-normal mb-3 flex items-end mr-5 my-2'><IoLocationOutline className='mr-1 h-4 w-4' /> <span className='text-xs'>{item.location}</span></div>
                                        <div className='text-gray-500 font-normal mb-3 flex items-end my-2'><FaUsers className='mr-1 h-4 w-4' /> <span className='text-xs'>Quota : {item.quota}</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full'>
                                <p className="font-normal text-xs text-gray-500">{item.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

        </div>
    )
}
