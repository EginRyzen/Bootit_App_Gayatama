"use client";
import React, { useEffect, useState } from "react";

export default function Profesional() {
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

    const removeStorage = () => {
        sessionStorage.clear();
        window.location.reload();
    };

    const dataButton = [
        {
            id: 1,
            name: "Advanced JavaScript",
            button: 'JavaScript'
        },
        {
            id: 2,
            name: "Full-Stack Development dengan Next.js",
            button: 'Next.js'
        },
        {
            id: 3,
            name: "React Query untuk Data Fetching",
            button: 'React Query'
        }
    ]
    return (
        <>
            <div className="grid pb-5">
                <div className="flex gap-2.5 mb-4">
                    <img src="https://course-recommender.app.dicoding.space/static/images/dibantu-logo.png" alt="Shanay image" className="w-10 h-11" />
                    <div className="grid w-1/2">
                        <h5 className="text-gray-900 text-sm font-semibold leading-snug pb-1">Shanay cruz</h5>
                        <div className="w-full grid mb-2">
                            <div className="px-3.5 py-2 bg-indigo-600 rounded-xl justify-start items-center gap-3 inline-flex">
                                <h5 className="text-white text-sm font-medium leading-snug">Well, here I have prepared a selection of materials that are tailored to your learning needs and interests. Please choose the material that suits you best and let`s start this fun learning adventure!</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid mb-2 justify-end">
                <div className="px-3 py-2 bg-white rounded-xl w-[250px] md:min-w-96 mb-5 ring-1 ring-[#1f478b36]">
                    <p className='text-md font-medium capitalize'>Choose something you have never learned</p>
                    <ul className="px-2 mt-2 space-y-1 list-none">
                        {dataButton.map((item) => (
                            <li key={item.id}>
                                <div
                                    onClick={() => selectedField ? null : handleClick(item.button)}
                                    className={`text-sm rounded-lg block w-full text-[#3a3f47] p-2 ${selectedField
                                        ? `${selectedField === (item.button) ? "bg-gray-200 cursor-not-allowed" : "cursor-not-allowed"}` // Selected or disabled stylebg
                                        : "hover:bg-[#e8e8e876] hover:font-medium cursor-pointer"
                                        }`}
                                >
                                    {item.name}??
                                </div>
                                <hr />
                            </li>
                        ))}
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
            {dataButton.map((item) => (
                selectedField === item.button && (
                    <div key={item.button} className="grid pb-5">
                        <div className="flex gap-2.5 mb-4">
                            <img src="https://course-recommender.app.dicoding.space/static/images/dibantu-logo.png" alt="Shanay image" className="w-10 h-11" />
                            <div className="grid w-full md:w-1/2">
                                <h5 className="text-gray-900 text-sm font-semibold leading-snug pb-1">Shanay cruz</h5>
                                <div className="w-full grid mb-2">
                                    <div className="px-3.5 py-2 w-full bg-gray-100 rounded-xl gap-3">
                                        <a href="#" className="relative group flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                            <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                                                <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="card-image" className="w-full h-full object-cover" />
                                            </div>
                                            <div className="p-4">
                                                <h6 className="mb-2 text-[#3a3f47] text-sm md:text-lg font-semibold group-hover:text-blue-500">
                                                    {item.name}
                                                </h6>
                                                <p className="text-slate-400 text-sm leading-normal font-light hidden md:block">
                                                    The place is close to Barceloneta Beach and bus stop just 2 min by walk
                                                    and near to where you can enjoy the main night life in
                                                    Barcelona.
                                                </p>
                                            </div>
                                        </a>
                                        <h5 className="text-[#3a3f47] text-sm font-medium leading-snug">
                                            Halo! Dibantu di sini. Aku akan membantumu menemukan kelas yang sesuai dengan level anda
                                        </h5>

                                        <button type="button"
                                            onClick={removeStorage}
                                            className="text-[#3a3f47] bg-[#ffffff] capitalize rounded-md border border-[#3a3f47] focus:ring-4 focus:outline-none focus:ring-gray-300 font-bold text-xs px-4 py-1 text-center me-2 mb-2 mt-5 transition-all duration-500 ease-in-out">
                                            Reset
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                )
            ))}
        </>
    )
}