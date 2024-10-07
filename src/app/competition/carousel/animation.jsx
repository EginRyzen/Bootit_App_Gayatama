"use client";

import { useState, useEffect } from "react";
import { meetupData } from "./../data"; // pastikan ini adalah import yang benar

export function useCarousel() {
    const images = meetupData.map((item) => item.image); // Ambil URL gambar dari meetupData
    const [currentIndex, setCurrentIndex] = useState(0);

    // Logic to automatically change images every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000);
        return () => clearInterval(interval); // Clear interval on component unmount
    }, [currentIndex]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const prevButton = document.querySelector("[data-carousel-prev]");
        const nextButton = document.querySelector("[data-carousel-next]");

        if (prevButton && nextButton) {
            prevButton.addEventListener("click", handlePrev);
            nextButton.addEventListener("click", handleNext);
        }

        return () => {
            if (prevButton && nextButton) {
                prevButton.removeEventListener("click", handlePrev);
                nextButton.removeEventListener("click", handleNext);
            }
        };
    }, []);

    return { currentIndex, images };
}
