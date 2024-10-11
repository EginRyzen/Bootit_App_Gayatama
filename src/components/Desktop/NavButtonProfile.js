import React from 'react'
import { FaUser } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { IoIosArrowUp } from "react-icons/io";

function NavButtonProfile({ openModalRegister, openModalLogin, isLogin, IsLoggedout }) {
    return (
        <>
            <div className="z-20 pl-28 my-auto">
                {isLogin ? (
                    <div className="relative flex cursor-pointer">
                        <div className="flex group my-auto">
                            <img
                                className="w-8 h-8 rounded-full"
                                src="./img/user.png"
                                alt="user photo"
                            />
                            <IoIosArrowUp className="ml-1 my-auto transform transition-transform duration-300 group-hover:rotate-180" />
                            <div className="dropdown-menu w-[150px] absolute left-0 mt-5 pt-4 max-h-0 opacity-0 transform -translate-y-5 transition-all duration-500 ease-in-out overflow-hidden group-hover:max-h-96 group-hover:opacity-100 group-hover:translate-y-0">
                                <div className="bg-white border border-gray-200 rounded-md shadow py-2">
                                    <div className="w-auto">
                                        <a href="/users">
                                            <div className="pl-3 pr-12 py-2 hover:bg-[#e6e6e6] flex gap-3">
                                                <FaUser />
                                                <span
                                                    className="block text-[#3a3f47] font-normal text-sm hover:text-black cursor-pointer"
                                                >
                                                    Profile
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                    <hr className="my-2" />
                                    <div className="w-auto">
                                        <a href="#" onClick={IsLoggedout}>
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
                    </div>
                ) : (
                    <>
                        <button
                            onClick={openModalLogin}
                            type="button"
                            className="border focus:ring-4 focus:outline-none font-bold rounded-sm text-sm px-5 py-2.5 text-center me-2 mb-2 border-[#3a3f47] text-[#3a3f47] hover:text-white hover:bg-gray-600 ring-gray-800 transition-all duration-500 ease-in-out"
                        >
                            Login
                        </button>
                        <button
                            type="button"
                            onClick={openModalRegister}
                            className="border focus:ring-4 focus:outline-none font-bold rounded-sm text-sm px-5 py-2.5 text-center me-2 mb-2 border-[#3a3f47] text-[#3a3f47] hover:text-white hover:bg-gray-600 ring-gray-800 transition-all duration-500 ease-in-out"
                        >
                            Register
                        </button>
                    </>
                )}

            </div>
        </>
    )
}

export default NavButtonProfile