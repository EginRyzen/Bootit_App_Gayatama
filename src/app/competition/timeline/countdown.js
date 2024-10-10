import { useState, useEffect } from 'react';

export function calculateTimeLeft(endTime) {
    const difference = new Date(endTime) - new Date();
    let totalHours = 0;
    let totalSeconds = 0; // Deklarasikan totalSeconds di sini

    if (difference > 0) {
        // Menghitung total detik dari selisih
        totalSeconds = Math.floor(difference / 1000); // Menyimpan total detik
        // Menghitung total jam
        totalHours = Math.floor(totalSeconds / 3600); // 3600 detik dalam satu jam
    }

    // Menghitung jam, menit, dan detik untuk ditampilkan
    const hours = String(totalHours).padStart(2, '0'); // Jam total
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0'); // Menghitung sisa menit
    const seconds = String(totalSeconds % 60).padStart(2, '0'); // Menghitung sisa detik

    return {
        totalHours,  // Total jam (termasuk konversi dari hari)
        hours,       // Jam dalam format dua digit
        minutes,     // Menit dalam format dua digit
        seconds      // Detik dalam format dua digit
    };
}



export function useCountdown(endTime) {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(endTime));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(endTime));
        }, 1000);

        return () => clearInterval(timer);
    }, [endTime]);

    return timeLeft;
}
