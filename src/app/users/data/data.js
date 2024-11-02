"use client"
import React, { useState } from 'react'
import { FaUserEdit, FaUser, FaUserCog } from "react-icons/fa";
import Profile from '../profile/profile';
import PersonalData from '../personaldata/personaldata';
import Account from '../account/account';


export function Data() {
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
    ];

    return (
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
    )
}
