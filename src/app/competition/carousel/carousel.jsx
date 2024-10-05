"use client";

import React from "react";

const Carousel = ({ currentIndex, images }) => {
    return (
        <div id="controls-carousel" className="relative max-w-6xl mx-auto px-4 pt-5 pb-5 sm:px-6 lg:px-8" data-carousel="static">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className={`duration-700 ease-in-out transition-opacity ${index === currentIndex ? "opacity-100" : "opacity-0"
                            }`}
                        data-carousel-item
                    >
                        <img
                            src={src}
                            className="absolute block w-full h-full object-cover"
                            alt={`Slide ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
            <button
                type="button"
                className="absolute top-1/2 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none transform -translate-y-1/2 left-10"
                data-carousel-prev
            >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                    <svg
                        className="w-6 h-6 text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>

            <button
                type="button"
                className="absolute top-1/2 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none transform -translate-y-1/2 right-10"
                data-carousel-next
            >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                    <svg
                        className="w-6 h-6 text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>

        </div>
    );
};

export default Carousel;
