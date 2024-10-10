"use client"
import React, { useState } from 'react'
import { FaUserEdit, FaUser, FaUserCog } from "react-icons/fa";
import Profile from './profile/profile';
import PersonalData from './personaldata/personaldata';
import Account from './account/account';

export default function User() {
    const [activeTab, setActiveTab] = useState("profile");

    const renderContent = () => {
        switch (activeTab) {
            case "profile":
                return <Profile />
            case 'personalData':
                return <PersonalData />;
            case 'account':
                return <Account />;
            default:
                return <Profile />;
        }
    }

    const buttonSetelan = [
        {
            name: 'Profile',
            icon: <FaUser className='size-4' />,
            onClick: () => setActiveTab('profile'),
            button: "profile"
        },
        {
            name: 'Personal Data',
            icon: <FaUserEdit className='size-5' />,
            onClick: () => setActiveTab('personalData'),
            button: "personalData"
        },
        {
            name: 'Account',
            icon: <FaUserCog className='size-5' />,
            onClick: () => setActiveTab('account'),
            button: "account"
        }

    ]
    return (
        <div className='w-full'>
            <div className='bg-[#121314]'>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row md:items-center gap-5">
                    <div>
                        <img src="./img/user.png" className='h-40' />
                    </div>
                    <div>
                        <h3 className='text-white block text-2xl sm:text-4xl font-medium'>Egin Sefiano Widodo</h3>
                        <div className='my-3 flex flex-wrap gap-3'>
                            <div className='flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 md:size-5 text-green-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <div className='text-white text-sm md:text-lg'>Bergabung sejak 2023</div>
                            </div>
                            <div className='flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 md:size-5  text-blue-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                <div className='text-white text-sm md:text-lg'>Kabupaten Ponorogo</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='w-full'>
                    <ul className="max-w-md text-gray-500 flex list-none gap-5 py-2 dark:text-gray-400">
                        <li>
                            <div className='text-[#3a3f47] cursor-pointer font-medium text-xs tracking-wide bg-[#e6e6e6] py-2 px-5 rounded-sm'>Data</div>
                        </li>
                        <li>
                            <div className='hover:text-[#3a3f47] cursor-pointer font-medium text-xs tracking-wide hover:bg-[#e6e6e6] py-2 px-5 rounded-sm'>Event 0</div>
                        </li>
                        <li>
                            <div className='hover:text-[#3a3f47] cursor-pointer font-medium text-xs tracking-wide hover:bg-[#e6e6e6] py-2 px-5 rounded-sm'>Competition 0</div>
                        </li>
                    </ul>
                </div>
                <div className='w-full flex flex-col md:flex-row py-10'>
                    <div className='w-full md:w-[25%]'>
                        <div className='text-[#3a3f47] text-lg sm:text-3xl font-medium'>
                            Setelan
                        </div>
                        <ul className="max-w-md text-gray-500 list-none dark:text-gray-400 py-5">
                            {buttonSetelan.map((item, index) => (
                                <li
                                    key={index}
                                    onClick={item.onClick}
                                    // className='cursor-pointer border-l-2 border-[#3a3f47] tracking-wide hover:bg-[#e6e6e6] py-3 my-1 px-5 rounded-sm flex items-center gap-3'
                                    className={`cursor-pointer tracking-wide py-3 my-1 px-5 rounded-sm flex items-center gap-3
                                        ${activeTab === item.button ? 'border-l-2 border-[#3a3f47]' : 'border-none hover:bg-[#e6e6e6]'}`}
                                >
                                    {item.icon}
                                    <div className='text-[#3a3f47] font-medium text-sm'>{item.name}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='w-full md:w-[75%]'>
                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    )
}
