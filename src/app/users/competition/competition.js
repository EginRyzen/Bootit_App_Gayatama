import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import { IoIosTimer } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import DataJson from './data.json';

function CountdownTimer({ eventTime }) {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const countdown = setInterval(() => {
            const now = new Date().getTime();
            const targetTime = new Date(eventTime).getTime();
            const difference = targetTime - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                clearInterval(countdown);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(countdown);
    }, [eventTime]);

    return (
        <>
            <span className='text-xs'>
                {timeLeft.days} Days {timeLeft.hours} Hours {timeLeft.minutes} Minutes {timeLeft.seconds} Seconds
            </span>
        </>
    );
}

export function Competition() {
    return (
        <div className='w-full flex flex-col py-10'>
            <div className='text-[#3a3f47] text-lg sm:text-3xl font-medium capitalize'>
                Your Competition
            </div>

            <div className='w-full py-10'>
                <div className="grid grid-cols-2 gap-8">
                    {DataJson.DataEvent.map((item) => (
                        <a href="#" key={item.id} className="flex flex-col items-center bg-transparent hover:shadow-md rounded-lg shadow p-6">
                            <div className='flex mb-5'>
                                <Image className="object-cover w-full rounded-t-lg h-72 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={item.img} alt="img" width={100} height={100} />
                                <div className="flex flex-col leading-normal ml-5">
                                    <div className='text-slate-800 font-medium text-md mb-2'>{item.title}</div>
                                    <div className='text-gray-400 font-normal mb-5 text-xs'>Hosted by: {item.organizer}</div>
                                    {/* Tambahkan Countdown Timer */}
                                    <div className='text-gray-400 font-medium mb-2 flex'>
                                        <IoIosTimer className='mr-1 h-4 w-4' />
                                        <CountdownTimer eventTime={item.time} />
                                    </div>
                                    <div className='text-gray-500 font-normal mb-2 flex items-end'>
                                        <IoLocationOutline className='mr-1 h-4 w-4' />
                                        <span className='text-xs'>{item.location}</span>
                                    </div>
                                    <div className='text-gray-500 font-normal mb-2 flex items-end'>
                                        <FaUsers className='mr-1 h-4 w-4' />
                                        <span className='text-xs'>Quota: {item.quota}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full'>
                                <p className="font-normal text-xs text-gray-500 mb-3">{item.description}</p>
                                <div className='text-gray-400 font-medium mb-2 flex items-center'>
                                    <p className='text-xs'>Expiry date : </p>
                                    <span className='text-xs ml-1'>{item.time}</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
