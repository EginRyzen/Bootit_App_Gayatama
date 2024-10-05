import React from 'react'
import { FaUserEdit } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

export default function User() {
    return (
        <div className='w-full'>
            <div className='bg-[#121314]'>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row md:items-center gap-5">
                    <div>
                        <img src="./img/user.png" className='h-40' />
                    </div>
                    <div>
                        <h3 className='text-white block text-2xl sm:text-4xl font-medium'>Egin Sefiano Widodo</h3>
                        <div className='my-3 flex flex-wrap gap-3'>
                            <div className='flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 md:size-5 text-green-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <div className='text-white text-sm md:text-lg'>Bergabung sejak 2023</div>
                            </div>
                            <div className='flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 md:size-5  text-blue-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                <div className='text-white text-sm md:text-lg'>Kabupaten Ponorogo</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='w-full'>
                    <ul className="max-w-md text-gray-500 flex list-none gap-5 py-2 dark:text-gray-400">
                        <li>
                            <div className='text-[#3a3f47] cursor-pointer font-medium text-xs tracking-wide bg-[#e6e6e6] py-2 px-5 rounded-sm'>Data</div>
                        </li>
                        <li>
                            <div className='hover:text-[#3a3f47] cursor-pointer font-medium text-xs tracking-wide hover:bg-[#e6e6e6] py-2 px-5 rounded-sm'>Event 0</div>
                        </li>
                        <li>
                            <div className='hover:text-[#3a3f47] cursor-pointer font-medium text-xs tracking-wide hover:bg-[#e6e6e6] py-2 px-5 rounded-sm'>Competition 0</div>
                        </li>
                    </ul>
                </div>
                <div className='w-full flex flex-col md:flex-row py-10'>
                    <div className='w-full md:w-[25%]'>
                        <div className='text-[#3a3f47] text-lg sm:text-3xl font-medium'>
                            Pengaturan
                        </div>
                        <ul className="max-w-md text-gray-500 list-none dark:text-gray-400 py-5">
                            <li className='cursor-pointer border-l-2 border-[#3a3f47] tracking-wide hover:bg-[#e6e6e6] py-3 my-1 px-5 rounded-sm flex items-center gap-3'>
                                <FaUser className='size-4' />
                                <div className='text-[#3a3f47] font-medium text-sm'>Profile</div>
                            </li>
                            <li className='cursor-pointer tracking-wide hover:bg-[#e6e6e6] py-3 my-1 px-5 rounded-sm flex items-center gap-3'>
                                <FaUserEdit className='size-5' />
                                <div className='text-[#3a3f47] font-medium text-sm'>Data Pribadi</div>
                            </li>
                            <li className='cursor-pointer tracking-wide hover:bg-[#e6e6e6] py-3 px-5 my-1 rounded-sm flex items-center gap-3'>
                                <FaUserCog className='size-5' />
                                <div className='text-[#3a3f47] font-medium text-sm'>Akun</div>
                            </li>
                        </ul>
                    </div>
                    <div className='w-full md:w-[75%]'>
                        <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow w-full">
                            <h5 className="mb-2 text-xl font-medium tracking-tight text-slate-500">Profile Pengguna</h5>
                            <hr />
                            <div className="flex items-center mt-5">
                                <div className='w-28 relative z-10'>
                                    <img src='./img/user.png' />
                                    <a href="#" className='block'><MdEdit className='bg-[#121314] text-white rounded-full size-8 p-2 absolute bottom-1 right-0' /></a>
                                </div>
                                <div className='ml-5 w-[40%]'>
                                    <p className='text-slate-500 text-xs'>Gambar Profile Anda sebaiknya memiliki rasio 1:1
                                        dan berukuran tidak lebih dari 2MB.
                                    </p>
                                </div>
                            </div>
                            <div className='mt-10'>
                                <form>
                                    <div className="mb-5">
                                        <label htmlFor="name" className="block mb-2 text-md font-medium text-gray-900">Your Name <sup className='text-red-500'>*</sup></label>
                                        <input type="name" id="name" className="bg-gray-50 border text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-gray-400 placeholder-gray-400" placeholder="Your Name" defaultValue="Egin Sefiano Widodo" required />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="username" className="block mb-2 text-md font-medium text-gray-900">Username <sup className='text-red-500'>*</sup></label>
                                        <input type="username" id="username" className="bg-gray-50 border text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-gray-400 placeholder-gray-400" placeholder="Username" defaultValue="Egin Ryzen" required />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="email" className="block mb-2 text-md font-medium text-gray-900">Email</label>
                                        <input type="email" id="email" className="bg-gray-50 border text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-gray-400 placeholder-gray-400 " disabled placeholder="eginsefianowidodo@gmail.com" required />
                                        <span className='text-xs text-slate-400'>
                                            Anda dapat mengubah alamat email melalui menu 
                                            <a href='#' className='text-blue-500'> Akun</a>
                                            .
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
