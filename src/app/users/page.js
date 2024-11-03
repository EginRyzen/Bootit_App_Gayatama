"use client"
import React, { useState } from 'react'
import { Data } from './data/data';
import { Event } from './event/event';
import { Competition } from './competition/competition';

export default function User() {
    const [activePage, setActivePage] = useState("data");

    const renderPage = () => {
        switch (activePage) {
            case "data":
                return <Data />;
            case 'event':
                return <Event />;
            case 'competition':
                return <Competition />;
            default:
                return <Data />;
        }
    }

    const buttonMenu = [
        {
            name: 'Data',
            // icon: <FaUser className='size-4' />,
            onClick: () => setActivePage('data'),
            button: "data"
        },
        {
            name: 'Event Meet',
            // icon: <FaUser className='size-4' />,
            onClick: () => setActivePage('event'),
            button: "event"
        },
        {
            name: 'Competition',
            // icon: <FaUser className='size-4' />,
            onClick: () => setActivePage('competition'),
            button: "competition'),"
        },
    ]

    return (
        <div className='w-full'>
            <div className="fixed flex top-0 -z-10 h-full w-full bg-white">
                <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>

                <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] translate-x-[10%] translate-y-[50%] rounded-full bg-[rgba(244,109,109,0.5)] opacity-50 blur-[80px]"></div>

                <div className="absolute bottom-auto left-0 top-0 h-[500px] w-[500px] translate-x-[10%] translate-y-[20%] rounded-full bg-[rgba(95,164,242,0.5)] opacity-50 blur-[80px]"></div>
            </div>
            <div className='backdrop-blur-sm bg-white/20'>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row md:items-center gap-5">
                    <div>
                        <img src="./img/user.png" className='h-40' />
                    </div>
                    <div>
                        <h3 className='text-slate-500 block text-2xl sm:text-4xl font-medium'>Egin Sefiano Widodo</h3>
                        <div className='my-3 flex flex-wrap gap-3'>
                            <div className='flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 md:size-5 text-green-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <div className='text-slate-500 text-sm md:text-lg'>Bergabung sejak 2023</div>
                            </div>
                            <div className='flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 md:size-5  text-blue-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                <div className='text-slate-500 text-sm md:text-lg'>Kabupaten Ponorogo</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 backdrop-blur-xl bg-white/50 mb-10'>
                <div className='w-full'>
                    <ul className="max-w-md text-gray-500 flex list-none gap-5 py-2 dark:text-gray-400">
                        {
                            buttonMenu.map((item, index) => (
                                <li key={index}>
                                    <div onClick={item.onClick} className={`text-[#3a3f47] cursor-pointer font-medium text-xs tracking-wide ${activePage === item.button ? 'bg-[#e6e6e6]' : 'hover:bg-[#e6e6e6]'} py-2 px-5 rounded-sm`}>{item.name}</div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {renderPage()}
            </div>
        </div>
    )
}
