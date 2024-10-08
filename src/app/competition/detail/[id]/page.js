'use client'; // This file is a Client Component

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { competitionData } from '../../data';
import { FaRegBuilding } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineArrowDown } from "react-icons/ai"; // Ikon panah ke bawah

const CompetitionDetail = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isExpanded, setIsExpanded] = useState(false); // State untuk mengontrol ukuran gambar

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            await new Promise(resolve => setTimeout(resolve, 500));

            const foundItem = competitionData.find(item => item.id === parseInt(id));
            if (foundItem) {
                setItem(foundItem);
            }
            setLoading(false);
        };

        fetchData();
    }, [id]);

    if (loading) {
        return <div className="text-center text-lg font-bold m-10">Loading Detail Competition...</div>;
    }

    if (!item) {
        return <div className="text-center text-lg font-bold m-10">Competition not found.</div>;
    }

    return (
        <div className="max-w-6xl mx-auto my-28 px-4 sm:px-6 lg:px-8">
            <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="relative">
                    <img
                        src={item.image}
                        alt={item.title}
                        className={`w-full object-cover transition-all duration-300 ${isExpanded ? 'h-full' : 'h-60'}`} // Mengubah height gambar
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-red-500 opacity-50"></div>
                    <div className="absolute top-2 right-2 bg-white p-2 rounded shadow">
                        {/* {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds} */}
                    </div>
                    <div className="absolute bottom-2 left-0 right-0 flex justify-center mb-2">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)} // Toggle ukuran gambar
                            className="flex items-center text-white bg-blue-500 rounded-full p-2 shadow-lg">
                            <AiOutlineArrowDown className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                    </div>
                </div>
                <div className="p-6">
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h1>
                    <p className="text-gray-600 mb-4"><strong>Field:</strong> <span>{item.field}</span></p>
                    <div className="flex items-center mb-4">
                        <FaRegBuilding className="mr-1" />
                        <span className="text-gray-600"><strong>Organizer:</strong> {item.organizer}</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <MdOutlineLocationOn className="mr-1" />
                        <span className="text-gray-600"><strong>Place:</strong> {item.place}</span>
                    </div>
                    <p className="text-gray-600 mb-4"><strong>Date:</strong> {item.dateStart} - {item.dateEnd}</p>
                    <div className="text-gray-600 mb-4"><strong>Description:</strong>
                        <p>{item.description}</p>
                    </div>
                    <button type="button" className="text-[#3a3f47] hover:text-white hover:bg-gray-600 border bg-white border-[#3a3f47] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-xs px-6 py-2 text-center cursor-pointer transition-all duration-500 ease-in-out"><strong>SIGN UP</strong></button>
                </div>
            </div>
        </div>
    );
};

export default CompetitionDetail;
