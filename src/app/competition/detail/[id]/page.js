'use client'; // This file is a Client Component

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { competitionData } from '../../data';

const CompetitionDetail = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get('id'); // Menggunakan ID dari searchParams

    const [item, setItem] = useState(null);

    useEffect(() => {
        if (id) {
            const foundItem = competitionData.find((data) => data.id === id); // Mencocokkan ID
            setItem(foundItem);
        }
    }, [id]);

    if (!item) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{item.title}</h1>
            <p>Field: {item.field}</p>
            <p>Organizer: {item.organizer}</p>
            <p>Place: {item.place}</p>
            <p>Description: {item.description}</p>
            <p>Date Start: {item.dateStart}</p>
            <p>Date End: {item.dateEnd}</p>
            <img src={item.image} alt={item.title} />
        </div>
    );
};

export default CompetitionDetail;
