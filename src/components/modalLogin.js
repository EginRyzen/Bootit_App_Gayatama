import React from 'react';

function ModalLogin({ isOpenModalLogin, closeModalLogin, openModalRegister }) {
    return (
        <>
            {/* Tetete */}
            <div
                id="authentication-modal"
                tabIndex={-1}
                aria-hidden="true"
                className={`fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full h-screen bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${isOpenModalLogin ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
            >
                <div
                    className={`relative p-4 w-full max-w-lg max-h-full transition-transform transform duration-300 ease-in-out ${isOpenModalLogin ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
                        }`}
                >
                    {/* Modal content */}
                    <div className="relative bg-white rounded-lg shadow">
                        {/* Modal header */}
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600">
                            <h3 className="text-lg font-medium text-[#3d3d3d]">Sign in to our platform</h3>
                            <button
                                onClick={closeModalLogin}
                                type="button"
                                className="end-2.5 text-[#3d3d3d] bg-transparent text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                                data-modal-hide="authentication-modal"
                            >
                                <svg
                                    className="w-3 h-3 font-bold"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={3}
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only font-bold">Close modal</span>
                            </button>
                        </div>

                        {/* Modal body */}
                        <div className="p-4 md:p-5">
                            <form className="space-y-4" action="#">
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-[#3d3d3d]"
                                    >
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
                                        placeholder="name@company.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm font-medium text-[#3d3d3d]"
                                    >
                                        Your password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
                                        required
                                    />
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="remember"
                                                type="checkbox"
                                                className="w-4 h-4 border rounded focus:ring-3 bg-gray-600 border-gray-500 focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800"
                                                required
                                            />
                                        </div>
                                        <label
                                            htmlFor="remember"
                                            className="ms-2 mb-2 text-sm font-medium text-[#3d3d3d]"
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#" className="text-sm hover:underline text-blue-500">
                                        Lost Password?
                                    </a>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white focus:ring-4 focus:outline-none font-medium rounded-sm text-sm px-5 py-2.5 text-center bg-gray-600"
                                >
                                    Login
                                </button>

                                <div className="flex justify-center gap-5 items-center">
                                    <div className='w-2/5'>
                                    <hr/>
                                    </div>
                                <div className="text-sm text-center font-medium text-[#3d3d3d]">Atau</div>
                                <div className='w-2/5'>
                                    <hr/>
                                </div>
                                </div>

                                <button type="button" className="text-gray-900 bg-gray-100 w-full hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex justify-center gap-2 items-center dark:focus:ring-gray-500 me-2 mb-2">
                                    <div>
                                        <img src="https://d17ivq9b7rppb3.cloudfront.net/original/commons/sso-google-v3.svg" alt="Logo Google" />
                                    </div>
                                    Sign in with Google
                                </button>
                                <div className="text-sm font-medium text-[#3d3d3d]">
                                    Not registered?{' '}
                                    <a onClick={openModalRegister} href="#" className="text-blue-700 hover:underline dark:text-blue-500">
                                        Create account
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ModalLogin;
