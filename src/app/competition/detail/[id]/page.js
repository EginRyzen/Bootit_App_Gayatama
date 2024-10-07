'use client'; // This file is a Client Component

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { competitionData } from '../../data';

const CompetitionDetail = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const foundItem = competitionData.find(item => item.id === parseInt(id));
        if (foundItem) {
            setItem(foundItem);
        }
    }, [id]);

    if (!item) {
        return <div className="loading">Loading...</div>; // Mengindikasikan loading
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
