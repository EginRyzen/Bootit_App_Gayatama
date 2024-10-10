"use client"
import React, { useState } from 'react'
import { MdEdit } from "react-icons/md";


export default function Profile() {
    const [imageSrc, setImageSrc] = useState('./img/user.png'); // Default image

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageSrc(reader.result); // Set the image source to the selected file
            };
            reader.readAsDataURL(file); // Read the file as a data URL
        }
    };
    return (
        <>
            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow w-full">
                <h5 className="mb-2 text-xl font-medium tracking-tight text-slate-500">User Profile</h5>
                <hr />
                <form>
                    <div className="flex items-center mt-5">
                        <div className='w-28 relative z-10'>
                            <div className='rounded-full w-28 h-28 overflow-hidden'>
                                <img src={imageSrc} alt="Profile" className="w-full h-auto" />
                            </div>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden"
                                id="file-input" // For linking with label
                            />
                            <label htmlFor="file-input" className='block cursor-pointer'>
                                <MdEdit className='bg-[#121314] text-white rounded-full size-8 p-2 absolute bottom-1 right-0' />
                            </label>
                        </div>
                        <div className='ml-5 w-[40%]'>
                            <p className='text-slate-500 text-xs'>Gambar Profile Anda sebaiknya memiliki rasio 1:1
                                dan berukuran tidak lebih dari 2MB.
                            </p>
                        </div>
                    </div>
                    <div className='mt-10'>
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

                        <button
                            type="button"
                            className="border focus:ring-4 focus:outline-none font-bold rounded-sm text-sm px-5 py-2.5 text-center me-2 mb-2 border-[#3a3f47] text-white bg-gray-600 ring-gray-800 transition-all duration-500 ease-in-out"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
