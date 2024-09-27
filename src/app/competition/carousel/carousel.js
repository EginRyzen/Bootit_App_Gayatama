import React from 'react'
import Image from 'next/image'

export default function Carousel() {
    return (
        <>
            <div id="controls-carousel" class="relative w-full" data-carousel="static">
                {/* Carousel wrapper */}
                <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {/* Item 1 */}
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="bg1-carousel.jpg" class="absolute block w-full h-full object-cover" alt="..." />
                    </div>
                    {/* Item 2 */}
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="bg2-carousel.jpg" class="absolute block w-full h-full object-cover" alt="..." />
                    </div>
                    {/* Item 3 */}
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="bg3-carousel.jpg" class="absolute block w-full h-full object-cover" alt="..." />
                    </div>
                </div>
                {/* Slider controls */}
                <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                        <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                        <span class="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                        <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        <span class="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </>
    )
}
