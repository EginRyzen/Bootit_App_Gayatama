import React from 'react'
import { Data } from './data.js'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
function Page() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row py-20 gap-10">
            <div className='w-full md:w-[30%]'>
                <div className='sticky top-28'>
                    <div className='text-xl font-medium text-[#3a3f47]'>Daftar Event</div>
                    <p className='text-sm font-light text-[#3a3f47] my-5'>Kembangkan jaringan dan belajar dari developer terbaik</p>
                </div>
            </div>
            <div className='w-full md:w-[70%]'>
                <form className="mx-auto w-full">
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-300 focus:ring-offset-0 focus:border-blue-300 outline-none"
                            placeholder="Search Mockups, Logos..."
                            required
                        />

                        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
                    </div>
                </form>
                <hr className='my-4' />
                <div className='w-full flex justify-end items-center gap-5'>
                    <div className="block mb-2 text-md font-medium text-[#3a3f47]">Urut berdasarkan : </div>
                    <form className="max-w-sm flex items-center">
                        <select
                            id="countries"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-2 focus:ring-blue-300 focus:ring-offset-0 focus:border-blue-300 outline-none block w-full p-2 capitalize"
                            defaultValue="Choose a country" // Set the default selected value here
                        >
                            <option disabled value="Choose a country">latest events</option>
                            <option value="US">latest updates</option>
                            <option value="CA">ends soon</option>
                        </select>
                    </form>
                </div>


                <div className="grid grid-cols-1 relative z-10 md:grid-cols-2 grid-rows-5 gap-5 mt-10">
                    {Data.map((item, index) => (
                        <div key={index} className="max-w-sm border bg-white rounded-lg shadow-2xl flex flex-col">
                            <a href="#">
                                <img className="rounded-t-lg" src={item.img} alt="" />
                            </a>
                            <div className="p-5 flex-grow">
                                <div className='flex gap-2 flex-wrap'>
                                    {item.category.map((category, index) => (
                                        <span key={index} className='py-1 px-2 text-[#3a3f47] bg-transparent font-medium border-2 border-[#f2f2f2] rounded-md text-xs'>
                                            {category.name}
                                        </span>
                                    ))}
                                </div>
                                <a href="#">
                                    <h5 className="mb-2 mt-3 text-xl font-normal text-blue-500 hover:underline">
                                        {item.title}
                                    </h5>
                                </a>
                                <p className='text-[10px] font-light text-[#3a3f47] mb-2'>
                                    oleh: {item.organizer} | <span className='text-blue-500'>{item.place}</span>
                                </p>
                                <p className="mb-3 text-sm font-light text-gray-400">
                                    {item.description}
                                </p>
                            </div>
                            <div className='w-full px-5 py-3 bg-[#f2f2f2] flex justify-between'>
                                <div className='text-xs text-[#3a3f47]'>Sisa Kuota: {item.quota}</div>
                                <div className='text-xs text-[#3a3f47]'>{item.deadline}</div>
                            </div>
                        </div>
                    ))}

                </div>


                <div className='w-full flex justify-center mt-10'>
                    <nav aria-label="Page navigation example">
                        <ul className="inline-flex -space-x-px text-base h-10">
                            <li>
                                <a href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-md hover:bg-gray-100 hover:text-gray-700">
                                    <MdOutlineKeyboardDoubleArrowLeft />
                                </a>
                            </li>
                            <li>
                                <a href="#" aria-current="page" className="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700">1</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">2</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">3</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">4</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">5</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-md hover:bg-gray-100 hover:text-gray-700 ">
                                    <MdOutlineKeyboardDoubleArrowRight />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>



            </div>
        </div>
    )
}

export default Page