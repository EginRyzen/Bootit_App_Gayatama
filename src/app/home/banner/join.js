import React from 'react'

function Join() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            <div className="w-full p-8 text-center border rounded-lg shadow sm:p-8 bg-gray-800 border-gray-700">
                <h5 className="mb-2 text-xl md:text-3xl font-bold text-white">What are you waiting for?</h5>
                <div className="w-3/5 mx-auto">
                    <p className="mb-10 text-sm md:text-base sm:text-sm text-white">Learn more focused by attending classes and meet ups</p>
                </div>
                <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                    <a href="/bootcamp" type="button"
                        className="text-[#3a3f47] bg-[#ffffff] hover:text-white capitalize rounded-lg border border-[#3a3f47] focus:ring-4 focus:outline-none focus:ring-gray-300 font-bold text-md px-6 py-2.5 text-center me-2 mb-2 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 transition-all duration-500 ease-in-out">
                        Join now
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Join