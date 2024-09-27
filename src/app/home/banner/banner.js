import React from 'react'

function Banner() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-reverse flex-col-reverse md:flex-row items-center py-12 justify-between">
                <div className="flex flex-col w-full md:w-[50%] pt-5 md:pt-0 md:my-10">
                    <div className="text-xl sm:text-3xl font-normal text-[#3a3f47]">
                        Bangun Karirmu Sebagai Developer Profesional
                    </div>
                    <p className="text-sm font-light text-[#3a3f47] my-4">
                        Mulai belajar terarah dengan learning path
                    </p>
                    <div className="pt-5 md:mt-10">
                        <button
                            type="button"
                            className="text-white bg-[#3a3f47] hover:text-white border border-[#3a3f47] focus:ring-4 focus:outline-none focus:ring-gray-300 font-bold rounded-sm text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-[#3a3f47] dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 transition-all duration-500 ease-in-out"
                        >
                            Belajar Sekarang
                        </button>
                    </div>
                </div>
                <div className="w-[100%] md:w-[50%]">
                    <div className="w-full px-5 md:px-0">
                        <img src="homepage-hero.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner