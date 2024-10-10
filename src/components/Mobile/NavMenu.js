"use client"
import React, { useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";

export default function NavMenu({ navMenu }) {
        //Mobile
        const [isOpenMobile, setIsOpenMobile] = useState(null); 

        const toggleSubMenu = (id) => {
            setIsOpenMobile((prev) => (prev === id ? null : id));
        };
    return (
        <>
            {navMenu.map((item) => {
                return (
                    <div key={item.id}>
                        {!item.submenu ? (
                            <a
                                href={item.link}
                                className="block py-2 px-3 text-[#3a3f47] text-sm md:bg-transparent font-medium"
                            >
                                {item.name}
                            </a>
                        ) : (
                            <div className="w-full">
                                <div
                                    className="flex justify-between cursor-pointer py-2 px-3 text-[#3a3f47] text-sm md:bg-transparent font-medium"
                                    onClick={() => toggleSubMenu(item.id)}
                                >
                                    <span>{item.name}</span>
                                    <IoIosArrowUp
                                        className={`transition-transform duration-300 ${isOpenMobile === item.id ? 'rotate-0' : 'rotate-180'
                                            }`}
                                    />
                                </div>
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpenMobile === item.id ? 'max-h-96' : 'max-h-0'
                                        }`}
                                    style={{ height: isOpenMobile === item.id ? 'auto' : '0px' }} // Optional: inline style to control height
                                >
                                    {item.submenu.map((subItem) => (
                                        <div
                                            key={subItem.id}
                                            className="pl-3 pr-12 py-3 rounded-md flex gap-1 items-center hover:bg-[#e6e6e6] ml-2"
                                        >
                                            {subItem.icon}
                                            <a
                                                href={subItem.link}
                                                className="block text-[#3a3f47] font-normal text-xs hover:text-black cursor-pointer"
                                            >
                                                {subItem.name}
                                            </a>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        )}
                    </div>
                )
            }
            )}
        </>
    )
}
