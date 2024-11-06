"use client";

import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useRouter } from 'next/navigation';
import { db } from "./../../../../firebase";

const Carousel = ({ currentIndex }) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const router = useRouter();

    const handleCardClick = (id) => {
        router.push(`/competition/detail/${id}`);
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const querySnapshot = await getDocs(collection(db, "competitions"));
                const competitionData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setData(competitionData);
            } catch (error) {
                console.error("Error fetching competition data:", error);
            }
            setLoading(false);
        };

        fetchData();
    }, [db]);

    if (loading) {
        return <div className="text-center text-lg font-bold m-10">Loading Carousel...</div>;
    }

    if (data.length === 0) {
        return <div className="text-center text-lg font-bold">No competition data available</div>;
    }

    return (
        <div id="controls-carousel" className="relative max-w-6xl mx-auto px-4 pt-5 pb-5 sm:px-6 lg:px-8" data-carousel="static">
            <div className="relative h-96 overflow-hidden rounded-lg md:h-96">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className={`duration-700 ease-in-out transition-opacity ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
                        data-carousel-item
                    >
                        <img
                            src={item.image}
                            className="absolute block w-full h-full object-cover z-0"
                            alt={`Slide ${index + 1}`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-100 z-10"></div>
                        <div className="absolute bottom-0 left-0 p-6 z-20 text-white">
                            <a onClick={() => handleCardClick(item.id)} className="text-xl font-bold hover:underline">{item.title}</a>
                            <p className="text-sm">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button type="button" className="absolute top-1/2 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none transform -translate-y-1/2 left-10" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                    <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>

            <button type="button" className="absolute top-1/2 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none transform -translate-y-1/2 right-10" data-carousel-next>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                    <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
};

export default Carousel;
