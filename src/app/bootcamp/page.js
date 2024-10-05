import React from 'react'
import { AiOutlineGlobal } from "react-icons/ai";
import { GiMaterialsScience } from "react-icons/gi";
import { LuBrainCircuit } from "react-icons/lu";
import { FaMicrochip } from "react-icons/fa6";
import { IoLogoAndroid } from "react-icons/io";

function Page() {
    return (
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
            <div className='w-full h-80 rounded-xl relative z-10 overflow-hidden'>
                <img src="./img/thumbnail.png" className='w-full h-[500px] rounded-xl' />
            </div>
            <div className='w-full mt-10'>
                <h3 className='text-2xl font-medium text-[#3a3f47]'>Pilihan Program Bootcamp</h3>
                <p className='text-sm font-light text-[#3a3f47]'>Pilih dan jadilah professional!</p>
            </div>

            <div className='flex py-20 justify-between'>
                <div className='w-1/5'>
                    <div className='text-xl font-medium text-[#3a3f47] mb-6'>Filter Bootcamp</div>
                    <div className='w-full'>
                        <div className='flex items-center gap-1 cursor-pointer text-[#14a7a0] bg-slate-200 rounded-lg p-2 mb-4'>
                            <AiOutlineGlobal className='size-7' /> <span className='text-xs font-medium'>Web Development</span>
                        </div>
                        <div className='flex items-center gap-1 cursor-pointer text-[#3a3f47] p-2 mb-4'>
                            <GiMaterialsScience className='size-7' /> <span className='text-xs font-medium'>Data Science</span>
                        </div>
                        <div className='flex items-center gap-1 cursor-pointer text-[#3a3f47] p-2 mb-4'>
                            <LuBrainCircuit className='size-7' /> <span className='text-xs font-medium'>Machine Learning</span>
                        </div>
                        <div className='flex items-center gap-1 cursor-pointer text-[#3a3f47] p-2 mb-4'>
                            <FaMicrochip className='size-7' /> <span className='text-xs font-medium'>Ai Academy</span>
                        </div>
                        <div className='flex items-center gap-1 cursor-pointer text-[#3a3f47] p-2 mb-4'>
                            <IoLogoAndroid className='size-7' /> <span className='text-xs font-medium'>Mobile Development</span>
                        </div>
                    </div>
                </div>

                <div className="relative w-3/4 flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12">
                    <div className=" inset-5mx-auto max-w-screen-xl px-4 w-full">
                        <div className="grid w-full sm:grid-cols-2 xl:grid-cols-3 gap-6">
                            <a href="" className="relative group flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
                                <div className="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>
                                </div>
                                <div className="z-20 absolute h-full w-full top-0 left-0 ">&nbsp;</div>
                                <div className="h-auto overflow-hidden">
                                    <div className="relative h-40 w-full overflow-hidden">
                                        <img src="https://image.web.id/images/OSINT.png" alt="" className="h-full w-full object-cover" />
                                        <div className="absolute inset-0 bg-black group-hover:bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                            <div className="text-white text-sm font-semibold uppercase">Learn more</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white py-4 px-3">
                                    <h3 className="text-xs mb-2 font-medium">Des cadeaux incroyables prêts à être utilisés dans votre prochain projet</h3>
                                    <p className="text-xs text-gray-400">
                                        Lorem, ipsum dolor sit amet
                                    </p>
                                </div>
                                <div className="flex items-center px-3 pb-3">
                                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <p className="ms-2 text-xs font-bold text-gray-900">4.95</p>
                                    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full" />
                                    <a href="#" className="text-xs font-medium text-gray-900 underline hover:no-underline">73 Siswa Terdaftar</a>
                                </div>
                            </a>
                            <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
                                <a href className="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>
                                </a>
                                <a href className="z-20 absolute h-full w-full top-0 left-0 ">&nbsp;</a>
                                <div className="h-auto overflow-hidden">
                                    <div className="h-40 overflow-hidden relative">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_yJoBXk_bOXfn2lhzftFMFsKx_eYLFHVc8A&s" classname="h-full" alt="" />
                                    </div>
                                </div>
                                <div className="bg-white py-4 px-3">
                                    <h3 className="text-xs mb-2 font-medium">Des cadeaux incroyables prêts à être utilisés dans votre prochain projet</h3>
                                    <div className="flex justify-between items-center">
                                        <p className="text-xs text-gray-400">
                                            Lorem, ipsum dolor sit amet
                                        </p>
                                        <div className="relative z-40 flex items-center gap-2">
                                            <a className="text-orange-600 hover:text-blue-500" href>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                                </svg>
                                            </a>
                                            <a className="text-orange-600 hover:text-blue-500" href>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
                                <a href className="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>
                                </a>
                                <a href className="z-20 absolute h-full w-full top-0 left-0 ">&nbsp;</a>
                                <div className="h-auto overflow-hidden">
                                    <div className="h-40 overflow-hidden relative">
                                        <img src="https://www.xsis.co.id/wp-content/uploads/2022/04/why-should-learn-JavaScript.jpg" classname="h-full" alt="" />
                                    </div>
                                </div>
                                <div className="bg-white py-4 px-3">
                                    <h3 className="text-xs mb-2 font-medium">Des cadeaux incroyables prêts à être utilisés dans votre prochain projet</h3>
                                    <div className="flex justify-between items-center">
                                        <p className="text-xs text-gray-400">
                                            Lorem, ipsum dolor sit amet
                                        </p>
                                        <div className="relative z-40 flex items-center gap-2">
                                            <a className="text-orange-600 hover:text-blue-500" href>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                                </svg>
                                            </a>
                                            <a className="text-orange-600 hover:text-blue-500" href>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
                                <a href className="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>
                                </a>
                                <a href className="z-20 absolute h-full w-full top-0 left-0 ">&nbsp;</a>
                                <div className="h-auto overflow-hidden">
                                    <div className="h-44 overflow-hidden relative">
                                        <img src="https://picsum.photos/400/400" alt="" />
                                    </div>
                                </div>
                                <div className="bg-white py-4 px-3">
                                    <h3 className="text-xs mb-2 font-medium">Des cadeaux incroyables prêts à être utilisés dans votre prochain projet</h3>
                                    <div className="flex justify-between items-center">
                                        <p className="text-xs text-gray-400">
                                            Lorem, ipsum dolor sit amet
                                        </p>
                                        <div className="relative z-40 flex items-center gap-2">
                                            <a className="text-orange-600 hover:text-blue-500" href>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                                </svg>
                                            </a>
                                            <a className="text-orange-600 hover:text-blue-500" href>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
                                <a href className="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>
                                </a>
                                <a href className="z-20 absolute h-full w-full top-0 left-0 ">&nbsp;</a>
                                <div className="h-auto overflow-hidden">
                                    <div className="h-44 overflow-hidden relative">
                                        <img src="https://picsum.photos/400/400" alt="" />
                                    </div>
                                </div>
                                <div className="bg-white py-4 px-3">
                                    <h3 className="text-xs mb-2 font-medium">Des cadeaux incroyables prêts à être utilisés dans votre prochain projet</h3>
                                    <div className="flex justify-between items-center">
                                        <p className="text-xs text-gray-400">
                                            Lorem, ipsum dolor sit amet
                                        </p>
                                        <div className="relative z-40 flex items-center gap-2">
                                            <a className="text-orange-600 hover:text-blue-500" href>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                                </svg>
                                            </a>
                                            <a className="text-orange-600 hover:text-blue-500" href>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
                                <a href className="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>
                                </a>
                                <a href className="z-20 absolute h-full w-full top-0 left-0 ">&nbsp;</a>
                                <div className="h-auto overflow-hidden">
                                    <div className="h-44 overflow-hidden relative">
                                        <img src="https://picsum.photos/400/400" alt="" />
                                    </div>
                                </div>
                                <div className="bg-white py-4 px-3">
                                    <h3 className="text-xs mb-2 font-medium">Des cadeaux incroyables prêts à être utilisés dans votre prochain projet</h3>
                                    <div className="flex justify-between items-center">
                                        <p className="text-xs text-gray-400">
                                            Lorem, ipsum dolor sit amet
                                        </p>
                                        <div className="relative z-40 flex items-center gap-2">
                                            <a className="text-orange-600 hover:text-blue-500" href>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                                </svg>
                                            </a>
                                            <a className="text-orange-600 hover:text-blue-500" href>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
                                <a href className="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>
                                </a>
                                <a href className="z-20 absolute h-full w-full top-0 left-0 ">&nbsp;</a>
                                <div className="h-auto overflow-hidden">
                                    <div className="h-44 overflow-hidden relative">
                                        <img src="https://picsum.photos/400/400" alt="" />
                                    </div>
                                </div>
                                <div className="bg-white py-4 px-3">
                                    <h3 className="text-xs mb-2 font-medium">Des cadeaux incroyables prêts à être utilisés dans votre prochain projet</h3>
                                    <div className="flex justify-between items-center">
                                        <p className="text-xs text-gray-400">
                                            Lorem, ipsum dolor sit amet
                                        </p>
                                        <div className="relative z-40 flex items-center gap-2">
                                            <a className="text-orange-600 hover:text-blue-500" href>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                                </svg>
                                            </a>
                                            <a className="text-orange-600 hover:text-blue-500" href>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
                                <a href className="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>
                                </a>
                                <a href className="z-20 absolute h-full w-full top-0 left-0 ">&nbsp;</a>
                                <div className="h-auto overflow-hidden">
                                    <div className="h-44 overflow-hidden relative">
                                        <img src="https://picsum.photos/400/400" alt="" />
                                    </div>
                                </div>
                                <div className="bg-white py-4 px-3">
                                    <h3 className="text-xs mb-2 font-medium">Des cadeaux incroyables prêts à être utilisés dans votre prochain projet</h3>
                                    <div className="flex justify-between items-center">
                                        <p className="text-xs text-gray-400">
                                            Lorem, ipsum dolor sit amet
                                        </p>
                                        <div className="relative z-40 flex items-center gap-2">
                                            <a className="text-orange-600 hover:text-blue-500" href>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                                </svg>
                                            </a>
                                            <a className="text-orange-600 hover:text-blue-500" href>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Page