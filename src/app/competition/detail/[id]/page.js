'use client'; // This file is a Client Component

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { competitionData } from '../../data';

const CompetitionDetail = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true); // State untuk loading

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // Mulai loading
            // Simulasi delay untuk mengambil data, misalnya dari API atau sumber lain
            await new Promise(resolve => setTimeout(resolve, 500)); // Simulasi 500ms

            const foundItem = competitionData.find(item => item.id === parseInt(id));
            if (foundItem) {
                setItem(foundItem);
            }
            setLoading(false); // Selesai loading
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
        <div className="container mx-auto p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-60 object-cover" />
                <div className="p-6">
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h1>
                    <p className="text-gray-600 mb-4"><strong>Field:</strong> {item.field}</p>
                    <p className="text-gray-600 mb-4"><strong>Organizer:</strong> {item.organizer}</p>
                    <p className="text-gray-600 mb-4"><strong>Place:</strong> {item.place}</p>
                    <p className="text-gray-600 mb-4"><strong>Description:</strong> {item.description}</p>
                    <p className="text-gray-600 mb-4"><strong>Date Start:</strong> {item.dateStart}</p>
                    <p className="text-gray-600 mb-4"><strong>Date End:</strong> {item.dateEnd}</p>
                </div>
            </div>
        </div>
    );
};

export default CompetitionDetail;
