"use client"
import { useState, useEffect } from "react";
import ModalLogin from "./modalLogin";
import ModalRegister from "./registerModal";
import NavProfile from "./Mobile/NavProfile";
import NavButtonProfile from "./Desktop/NavButtonProfile";
import ButtonMobile from "./Mobile/ButtonMobile";
import NavMenu from "./Desktop/NavMenu";
import NavMenuMobile from "./Mobile/NavMenu";
import { AiOutlineGlobal } from "react-icons/ai";
import { GiMaterialsScience } from "react-icons/gi";
import { LuBrainCircuit } from "react-icons/lu";
import { FaMicrochip } from "react-icons/fa6";
import { IoLogoAndroid } from "react-icons/io";

export default function Navbar() {
    const [scrollDirection, setScrollDirection] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenModalLogin, setIsOpenModalLogin] = useState(false);
    const [isOpenModalRegister, setIsOpenModalRegister] = useState(false);
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        const loggedInStatus = sessionStorage.getItem('isLogin') === 'true';
        setIsLogin(loggedInStatus);
    }, []);



    const IsloggedIn = () => {
        setIsLogin(true);
        sessionStorage.setItem('isLogin', 'true');
        setIsOpenModalLogin(false);
    };

    const IsLoggedout = () => {
        setIsLogin(false);
        sessionStorage.removeItem('isLogin');
    };

    const openModalLogin = () => {
        setIsOpenModalLogin(true);
        setIsOpenModalRegister(false);
    };

    const openModalRegister = () => {
        setIsOpenModalRegister(true);
        setIsOpenModalLogin(false);
    };

    const closeModalLogin = () => setIsOpenModalLogin(false);
    const closeModalRegister = () => setIsOpenModalRegister(false);


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
                    'icon': <AiOutlineGlobal />,
                    'name': 'Web Development',
                    'link': 'http://localhost:3000/bootcamp'
                },
                {
                    'id': 2,
                    'icon': <IoLogoAndroid />,
                    'name': 'Mobile Development',
                    'link': 'http://localhost:3000/bootcamp'
                },
                {
                    'id': 3,
                    'icon': <GiMaterialsScience />,
                    'name': 'Data Science',
                    'link': 'http://localhost:3000/bootcamp'
                },
                {
                    'id': 4,
                    'icon': <FaMicrochip />,
                    'name': 'Ai Academy',
                    'link': 'http://localhost:3000/bootcamp'
                },
                {
                    'id': 5,
                    'icon': <LuBrainCircuit />,
                    'name': 'Machine Learning',
                    'link': '/features'
                },
            ]
        },
        {
            'id': 3,
            'name': 'Meet Up',
            'link': 'http://localhost:3000/meetup'
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
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        <div className="flex items-center">
                            <div className="flex -ml-2">
                                <a href="/" className="flex flex-col sm:flex-row items-center space-x-2 sm:space-x-0 rtl:space-x-reverse">
                                    <span className="text-[#508a8b] mb-0 sm:self-end text-xl sm:text-3xl font-bold whitespace-nowrap">Boot.<span className="text-[#3a3f47]">IT</span></span>
                                </a>
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <div className="ml-10 flex items-baseline">
                                <NavMenu navMenu={navMenu} />

                                {/* Aktif Jika User Belum Login */}
                                <NavButtonProfile openModalLogin={openModalLogin} openModalRegister={openModalRegister} isLogin={isLogin} IsLoggedout={IsLoggedout} />
                            </div>
                        </div>

                        {/* Mobile Tampilan */}

                        <div className="-mr-2 flex gap-2 py-2 lg:hidden">
                            {/* Profile Menu Mobile */}
                            <NavProfile isLogin={isLogin} IsLoggedout={IsLoggedout} />

                            <button
                                type="button"
                                onClick={() => setIsOpen(!isOpen)}
                                className="bg-[#3a3f47] inline-flex items-center justify-center p-2  rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
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

                <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out transform ${isOpen ? "max-h-screen opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-5"
                    }`}
                    id="mobile-menu"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 h-screen bg-white">
                        <ButtonMobile openModalLogin={openModalLogin} openModalRegister={openModalRegister} isLogin={isLogin} />


                        <NavMenuMobile navMenu={navMenu} />
                    </div>
                </div>
            </nav>

            <ModalLogin
                isOpenModalLogin={isOpenModalLogin}
                closeModalLogin={closeModalLogin}
                openModalRegister={openModalRegister}
                IsloggedIn={IsloggedIn}
            />
            <ModalRegister
                openModalLogin={openModalLogin}
                isOpenModalRegister={isOpenModalRegister}
                closeModalRegister={closeModalRegister}
            />



        </>


    );
}