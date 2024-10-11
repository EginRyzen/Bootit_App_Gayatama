import React from 'react';

function Footer() {
    return (
        <footer className="bg-white">
            <hr />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0 w-full sm:w-2/5">
                        <a href="https://flowbite.com/" className="flex items-center">
                            <span className="text-[#508a8b] mb-0 sm:self-end text-2xl sm:text-3xl font-bold whitespace-nowrap">Boot.<span className="text-[#3a3f47]">IT</span></span>
                        </a>
                        <p className="text-[#3a3f47] text-xs sm:text-sm mt-2">
                            <strong>Boot.IT</strong> is a platform that provides bootcamps, competitions, and meetups to help programmers sharpen their skills. With a guiding chatbot feature, Boot.IT offers an interactive learning experience and a supportive community for developers at various levels.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-[#3a3f47] uppercase">Partners</h2>
                            <ul className="text-[#3a3f47] font-normal">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Google</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">DiCoding</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-[#3a3f47] uppercase">Follow us</h2>
                            <ul className="text-[#3a3f47] font-normal">
                                <li className="mb-4">
                                    <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-[#3a3f47] uppercase">Legal</h2>
                            <ul className="text-[#3a3f47] font-normal">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-[#3a3f47] sm:text-center">© 2024 <a href="" className="hover:underline">Boot.IT™</a>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="#" className="text-gray-500 hover:text-gray-900">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                            </svg>
                            <span className="sr-only">Discord community</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                                <path fillRule="evenodd" d="M9 0a2.745 2.745 0 0 0-2.75 2.75c0 .18.022.353.065.519a4.732 4.732 0 0 1-2.283-.577C2.553 2.75 2.002 3.942 2.002 5.25c0 1.314.732 2.45 1.807 3.034A3.491 3.491 0 0 1 2 8.205c0 .14.006.275.018.409a4.733 4.733 0 0 0 4.3 3.679A2.76 2.76 0 0 0 9 13c1.037 0 1.963-.387 2.678-1.036A8.033 8.033 0 0 0 15 10.25a8.163 8.163 0 0 0 2.25-4.76A4.706 4.706 0 0 0 18 5.25C18 2.604 14.709 0 9 0Zm0 3a2.25 2.25 0 1 1 0 4.5A2.25 2.25 0 0 1 9 3Z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Instagram page</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
