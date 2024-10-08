"use client";
import React, { useEffect, useState } from "react";

export default function Web() {
    const [selectedField, setSelectedField] = useState(""); // State untuk menyimpan pilihan dari session storage

    useEffect(() => {
        // Ambil pilihan yang tersimpan di session storage
        const savedChoice = sessionStorage.getItem("level");
        if (savedChoice) {
            setSelectedField(savedChoice); // Set pilihan yang tersimpan
        }
    }, []);

    const handleClick = (choice) => {
        sessionStorage.setItem("level", choice); // Simpan pilihan di session storage
        setTimeout(() => {
            setSelectedField(choice);
        }, 1500)
    };
    return (
        <>
            <div className="grid pb-5">
                <div className="flex gap-2.5 mb-4">
                    <img src="https://course-recommender.app.dicoding.space/static/images/dibantu-logo.png" alt="Shanay image" className="w-10 h-11" />
                    <div className="grid w-1/2">
                        <h5 className="text-gray-900 text-sm font-semibold leading-snug pb-1">Shanay cruz</h5>
                        <div className="w-full grid mb-2">
                            <div className="px-3.5 py-2 bg-indigo-600 rounded-xl justify-start items-center gap-3 inline-flex">
                                <h5 className="text-white text-sm font-medium leading-snug">Halo! Dibantu di sini. Aku akan membantumu menemukan kelas yanag sesaui dengan level anda</h5>
                            </div>
                        </div>
                        <div className="w-full grid">
                            <div className="px-3.5 py-2 bg-indigo-600 rounded-xl justify-start items-center gap-3 inline-flex">
                                <h5 className="text-white text-sm font-medium leading-snug">Pilih Level yang anda inginkan</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid mb-2 justify-end">
                <div className="px-3 py-2 bg-white rounded-xl min-w-96 mb-5 ring-1 ring-[#1f478b36]">
                    <p className='text-md font-medium capitalize'>Pilih Level Yang sesaui dengan levelmu</p>
                    <ul className="px-2 mt-2 space-y-1 list-none">
                        <li>
                            <div
                                onClick={() => handleClick("Pemula")}
                                className="hover:bg-[#e8e8e876] text-sm hover:font-medium rounded-lg block w-full text-[#3a3f47] p-2 cursor-pointer"
                            >
                                Pemula
                            </div>
                        </li>
                        <hr />
                        <li>
                            <div
                                onClick={() => handleClick("Menengah")}
                                className="hover:bg-[#e8e8e876] text-sm hover:font-medium rounded-lg block w-full text-[#3a3f47] p-2 cursor-pointer"
                            >
                                Menengah
                            </div>
                        </li>
                        <hr />
                        <li>
                            <div
                                onClick={() => handleClick("Profesional")}
                                className="hover:bg-[#e8e8e876] text-sm hover:font-medium rounded-lg block w-full text-[#3a3f47] p-2 cursor-pointer"
                            >
                                Profesional
                            </div>
                        </li>
                    </ul>
                </div>
                {selectedField && (
                    <div className="flex gap-2.5 justify-end">
                        <div className="grid mb-2">
                            <div className="justify-center">
                                <h5 className="text-right text-gray-900 text-sm font-semibold leading-snug pb-1">You</h5>

                                <div className="grid w-fit ml-auto">
                                    <div className="px-3 py-2 bg-white rounded-xl ring-1 ring-[#1f478b36] ">
                                        <h2 className="text-[#3a3f47] text-sm capitalize font-normal leading-snug">{sessionStorage.getItem("level")}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src="https://pagedone.io/asset/uploads/1704091591.png" alt="Hailey image" className="w-10 h-11" />
                    </div>
                )}
            </div>

            {selectedField === "Pemula" && <Pemula />}
        </>
    )
}


function Pemula() {
    const [selectedField, setSelectedField] = useState("");

    useEffect(() => {
        const savedChoice = sessionStorage.getItem("materi");
        if (savedChoice) {
            setSelectedField(savedChoice);
        }
    }, []);

    const handleClick = (choice) => {
        sessionStorage.setItem("materi", choice);
        setTimeout(() => {
            setSelectedField(choice);
        }, 1500)
    };
    return (
        <>
            <div className="grid pb-5">
                <div className="flex gap-2.5 mb-4">
                    <img src="https://course-recommender.app.dicoding.space/static/images/dibantu-logo.png" alt="Shanay image" className="w-10 h-11" />
                    <div className="grid w-1/2">
                        <h5 className="text-gray-900 text-sm font-semibold leading-snug pb-1">Shanay cruz</h5>
                        <div className="w-full grid mb-2">
                            <div className="px-3.5 py-2 bg-indigo-600 rounded-xl justify-start items-center gap-3 inline-flex">
                                <h5 className="text-white text-sm font-medium leading-snug">Halo! Dibantu di sini. Aku akan membantumu menemukan kelas yanag sesaui dengan level anda</h5>
                            </div>
                        </div>
                        <div className="w-full grid">
                            <div className="px-3.5 py-2 bg-indigo-600 rounded-xl justify-start items-center gap-3 inline-flex">
                                <h5 className="text-white text-sm font-medium leading-snug">Pilih Level yang anda inginkan</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid mb-2 justify-end">
                <div className="px-3 py-2 bg-white rounded-xl min-w-96 mb-5 ring-1 ring-[#1f478b36]">
                    <p className='text-md font-medium capitalize'>Pilih yang belum pernah kamu pelajari</p>
                    <ul className="px-2 mt-2 space-y-1 list-none">
                        <li>
                            <div
                                onClick={() => handleClick("HTML dan CSS Dasar")}
                                className="hover:bg-[#e8e8e876] text-sm hover:font-medium rounded-lg block w-full text-[#3a3f47] p-2 cursor-pointer"
                            >
                                HTML dan CSS Dasar
                            </div>
                        </li>
                        <hr />
                        <li>
                            <div
                                onClick={() => handleClick("JavaScript")}
                                className="hover:bg-[#e8e8e876] text-sm hover:font-medium rounded-lg block w-full text-[#3a3f47] p-2 cursor-pointer"
                            >
                                JavaScript
                            </div>
                        </li>
                        <hr />
                        <li>
                            <div
                                onClick={() => handleClick("PHP")}
                                className="hover:bg-[#e8e8e876] text-sm hover:font-medium rounded-lg block w-full text-[#3a3f47] p-2 cursor-pointer"
                            >
                                PHP
                            </div>
                        </li>
                    </ul>
                </div>
                {selectedField && (
                    <div className="flex gap-2.5 justify-end">
                        <div className="grid mb-2">
                            <div className="justify-center">
                                <h5 className="text-right text-gray-900 text-sm font-semibold leading-snug pb-1">You</h5>

                                <div className="grid w-fit ml-auto">
                                    <div className="px-3 py-2 bg-white rounded-xl ring-1 ring-[#1f478b36] ">
                                        <h2 className="text-[#3a3f47] text-sm capitalize font-normal leading-snug">{sessionStorage.getItem("materi")}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src="https://pagedone.io/asset/uploads/1704091591.png" alt="Hailey image" className="w-10 h-11" />
                    </div>
                )}
            </div>
            {selectedField === "HTML dan CSS Dasar" && (
                <>
                    <div className="grid pb-5">
                        <div className="flex gap-2.5 mb-4">
                            <img src="https://course-recommender.app.dicoding.space/static/images/dibantu-logo.png" alt="Shanay image" className="w-10 h-11" />
                            <div className="grid w-1/2">
                                <h5 className="text-gray-900 text-sm font-semibold leading-snug pb-1">Shanay cruz</h5>
                                <div className="w-full grid mb-2">
                                    <div className="px-3.5 py-2 bg-gray-100 rounded-xl gap-3">
                                        <a href="#" className="relative group flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                            <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                                                <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="card-image" />
                                            </div>
                                            <div className="p-4">
                                                <h6 className="mb-2 text-[#3a3f47] text-lg font-semibold group-hover:text-blue-500">
                                                    HTML dan CSS Dasar
                                                </h6>
                                                <p className="text-slate-400 text-sm leading-normal font-light">
                                                    The place is close to Barceloneta Beach and bus stop just 2 min by walk
                                                    and near to  where you can enjoy the main night life in
                                                    Barcelona.
                                                </p>
                                            </div>
                                        </a>
                                        <h5 className="text-[#3a3f47] text-sm font-medium leading-snug">Halo! Dibantu di sini. Aku akan membantumu menemukan kelas yanag sesaui dengan level anda</h5>

                                        <button type="button"
                                            className="text-[#3a3f47] bg-[#ffffff] capitalize rounded-md border border-[#3a3f47] focus:ring-4 focus:outline-none focus:ring-gray-300 font-bold text-xs px-4 py-1 text-center me-2 mb-2 mt-5 transition-all duration-500 ease-in-out">
                                            Reset
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}


