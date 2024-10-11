"use client";
import React, { useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";

function NavProfile({ isLogin, IsLoggedout }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            {isLogin ? (
                <div className="relative flex hover:cursor-pointer" onClick={toggleDropdown}>
                    <div className="flex text-sm bg-gray-800 my-auto rounded-full">
                        <img
                            className="w-8 h-8 rounded-full"
                            src="./img/user.png"
                            alt="user photo"
                        />
                    </div>
                    <IoIosArrowUp
                        className={`ml-1 my-auto transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                            }`}
                    />

                    {/* Dropdown Menu */}
                    <div
                        className={`dropdown-menu w-[200px] absolute right-0 mt-5 pt-4 transform transition-all duration-500 ease-in-out overflow-hidden ${isOpen
                            ? 'max-h-96 opacity-100 translate-y-0'
                            : 'max-h-0 opacity-0 -translate-y-5'
                            }`}
                    >
                        <div className="bg-white border border-gray-200 rounded-md shadow py-2">
                            <div className="w-auto">
                                <a href="/users">
                                    <div className="pl-3 pr-12 py-2 hover:bg-[#e6e6e6] flex gap-3">
                                        <FaUser />
                                        <span
                                            href="/users"
                                            className="block text-[#3a3f47] font-normal text-sm hover:text-black cursor-pointer"
                                        >
                                            Profile Saya
                                        </span>
                                    </div>
                                </a>
                            </div>
                            <hr className="my-2" />
                            <div className="w-auto">
                                <a href="#" type='button' onClick={IsLoggedout}>
                                    <div className="pl-3 pr-12 py-2 hover:bg-[#e6e6e6] flex gap-3 items-center">
                                        <CiLogout className="rotate-180 text-red-500 font-medium" />
                                        <span
                                            className="block text-red-500 font-normal text-sm cursor-pointer"
                                        >
                                            Keluar
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                ""
            )}

        </>
    )
}

export default NavProfile