"use client"
import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrollDirection, setScrollDirection] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        let lastScrollY = window.pageYOffset;

        const updateScrollDirection = () => {
            const scrollY = window.pageYOffset;
            const direction = scrollY > lastScrollY ? "down" : "up";
            if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
                setScrollDirection(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };
        window.addEventListener("scroll", updateScrollDirection); // add event listener
        return () => {
            window.removeEventListener("scroll", updateScrollDirection); // clean up
        }
    }, [scrollDirection]);


    const navMenu = [
        {
            'id': 1,
            'name': 'Home',
            'link': '/'
        },
        {
            'id': 2,
            'name': 'Bootcamp',
            'link': '/features',
            'submenu': [
                {
                    'id': 1,
                    'name': 'Bootcamp',
                    'link': '/features'
                },
                {
                    'id': 2,
                    'name': 'Bootcamp Bandugan',
                    'link': '/features'
                },
                {
                    'id': 3,
                    'name': 'Bootcamp Malang',
                    'link': '/features'
                },
            ]
        },
        {
            'id': 3,
            'name': 'Meet Up',
            'link': '/pricing'
        },
        {
            'id': 4,
            'name': 'Competition',
            'link': '/pricing'
        },
        // {
        //     'id': 5,
        //     'name': 'FAQ',
        //     'link': '/faq'
        // },
    ]
    return (
        <>
            <nav className={`bg-white sticky shadow z-50 h-16 md:h-20 ${scrollDirection === "down" ? "-top-20" : "top-0"} ransition-all duration-500`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        <div className="flex items-center">
                            <div className="flex -ml-2">
                                <a href="/" className="flex flex-col sm:flex-row items-center space-x-2 sm:space-x-0 rtl:space-x-reverse">
                                    <span className="text-[#508a8b] mb-0 sm:self-end text-sm sm:text-3xl font-bold whitespace-nowrap">Boot.<span className="text-[#3a3f47]">IT</span></span>
                                </a>
                                {/* <a href="/" className="flex flex-col sm:flex-row items-center space-x-2 sm:space-x-0 rtl:space-x-reverse">
                                    <span className="mb-0 sm:self-end text-sm sm:text-3xl font-bold whitespace-nowrap">
                                        <span className="text-[#508a8b] animate-color delay-1">B</span>
                                        <span className="text-[#508a8b] animate-color delay-2">o</span>
                                        <span className="text-[#508a8b] animate-color delay-3">o</span>
                                        <span className="text-[#508a8b] animate-color delay-4">t</span>.
                                        <span className="text-[#3a3f47] animate-color delay-5">I</span>
                                        <span className="text-[#3a3f47] animate-color delay-6">T</span>
                                    </span>
                                </a> */}
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {navMenu.map((item) => {
                                    return (
                                        <div key={item.id} className="relative group">
                                            {/* Link tanpa submenu */}
                                            {!item.submenu ? (
                                                <a
                                                    href={item.link}
                                                    className="block cursor-pointer hover:bg-[#e6e6e6] py-3 px-5 rounded-sm text-[#3a3f47] transition-all duration-300 ease-in-out text-base md:bg-transparent font-medium"
                                                >
                                                    {item.name}
                                                </a>

                                            ) : (
                                                // Dropdown untuk item dengan submenu
                                                <div className="dropdown flex text-[#3a3f47] hover:text-black cursor-pointer font-medium text-base tracking-wide hover:bg-[#e6e6e6] py-3 px-5 rounded-sm">
                                                    <span>{item.name}</span>
                                                    <div className="dropdown-menu absolute left-0 mt-5 pt-4 max-h-0 opacity-0 transform -translate-y-5 transition-all duration-500 ease-in-out overflow-hidden group-hover:max-h-96 group-hover:opacity-100 group-hover:translate-y-0">
                                                        <ul className="block w-[250px] bg-white border border-gray-200 rounded-lg shadow">
                                                            {item.submenu.map((subItem) => (
                                                                <li key={subItem.id} className="pl-3 pr-12 py-3 hover:bg-[#e6e6e6]">
                                                                    <a
                                                                        href={subItem.link}
                                                                        className="block text-[#3a3f47] font-normal text-base hover:text-black cursor-pointer"
                                                                    >
                                                                        {subItem.name}
                                                                        <p className="text-xs hover:text-none text-[#bbbbbb]">
                                                                            Deskripsi Yang Akan Dimasukan
                                                                        </p>
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                                <button
                                    type="button"
                                    className="text-[#3a3f47] hover:text-white border border-[#3a3f47] hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-bold rounded-sm text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-[#3a3f47] dark:text-[#3a3f47] dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 transition-all duration-500 ease-in-out"
                                >
                                    Login
                                </button>
                                <button
                                    type="button"
                                    className="text-[#3a3f47] hover:text-white border border-[#3a3f47] hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-bold rounded-sm text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-[#3a3f47] dark:text-[#3a3f47] dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 transition-all duration-500 ease-in-out"
                                >
                                    Register
                                </button>
                            </div>
                        </div>
                        {/* <div className="hidden lg:flex justify-end gap-4 mb-[-4px]">
                            <a href="" className="my-auto text-base text-[#0dc9d5] underline">Become a member</a>
                            <button type="button" className="text-white bg-[#0dc9d5] hover:bg-[#43d4de] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[100px] text-sm px-8 py-4 text-center dark:bg-[#0dc9d5] dark:hover:bg-[#43d4de] dark:focus:ring-[#4ee8f3]">Sign in</button>
                        </div> */}

                        {/* Mobile Tampilan */}

                        <div className="-mr-2 flex gap-2 lg:hidden">
                            <button type="button" className="text-white bg-[#0dc9d5] hover:bg-[#43d4de] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[100px] text-xs px-4 py-2 text-center dark:bg-[#0dc9d5] dark:hover:bg-[#43d4de] dark:focus:ring-[#4ee8f3] cursor-pointer">Sign in</button>
                            <button
                                type="button"
                                onClick={() => setIsOpen(!isOpen)}
                                className="bg-gray-800 inline-flex items-center justify-center p-2  rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>

                                <svg
                                    className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                </svg>
                                <svg
                                    className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`lg:hidden ${isOpen ? "block" : "hidden"} ransition-all duration-1000`} id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#F6F6F6]">
                        {navMenu.map((item) => {
                            return (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="block py-2 px-3 text-[#2B2730] text-base md:bg-transparent font-medium"
                                >
                                    {item.name}
                                </a>
                            )
                        }
                        )}
                        <a href="" className="block py-2 px-3 text-base text-[#0dc9d5] underline">Become a member</a>
                    </div>
                </div>
            </nav>
        </>


    );
}