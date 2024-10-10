"use client";
import React, { useEffect, useState } from "react";
import Web from "./web/web";
import MachineLearning from "./ml/machinelearning";
import Android from "./android/android";
// import Android from "./android/android"; // Assuming you have an Android component

function Page() {
    const [selectedField, setSelectedField] = useState(""); // State untuk menyimpan pilihan dari session storage

    useEffect(() => {
        // Ambil pilihan yang tersimpan di session storage
        const savedChoice = sessionStorage.getItem("field");
        if (savedChoice) {
            setSelectedField(savedChoice); // Set pilihan yang tersimpan
        }
    }, []);

    const handleClick = (choice) => {
        sessionStorage.setItem("field", choice); // Simpan pilihan di session storage
        setTimeout(() => {
            setSelectedField(choice);
        }, 1500)
    };

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-20">
                <div className="w-full bg-slate-100 p-5 rounded-xl">
                    <div className="grid pb-5">
                        <div className="flex gap-2.5 mb-4">
                            <img src="https://course-recommender.app.dicoding.space/static/images/dibantu-logo.png" alt="Shanay image" className="w-10 h-11" />
                            <div className="grid w-1/2">
                                <h5 className="text-gray-900 text-sm font-semibold leading-snug pb-1">Shanay cruz</h5>
                                <div className="w-full grid mb-2">
                                    <div className="px-3.5 py-2 bg-indigo-600 rounded-xl justify-start items-center gap-3 inline-flex">
                                        <h5 className="text-white text-sm font-medium leading-snug">Hi! I`m Shanay Cruz, here to guide you towards a new skill. Choose the field you want to pursue: Android, Web, or Machine Learning. Let`s get started!</h5>
                                    </div>
                                </div>
                                <div className="w-full grid">
                                    <div className="px-3.5 py-2 bg-indigo-600 rounded-xl justify-start items-center gap-3 inline-flex">
                                        <h5 className="text-white text-sm font-medium leading-snug">So, which topic are you most curious about? Choose from Android, Web, or Machine Learning, and start your learning journey now.</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pilihan jawaban */}
                    <div className="grid mb-2 justify-end">
                        <div className="px-3 py-2 w-[250px] bg-white rounded-xl md:min-w-96 mb-5 ring-1 ring-[#1f478b36]">
                            <p className="text-md font-medium capitalize">Select 1 Learning Interest</p>
                            <ul className="px-2 mt-2 space-y-1 list-none">
                                <li>
                                    <div
                                        onClick={() => selectedField ? null : handleClick("Android")}
                                        className={`text-sm rounded-lg block w-full text-[#3a3f47] p-2 ${selectedField
                                            ? `${selectedField === "Android" ? "bg-gray-200 cursor-not-allowed" : "cursor-not-allowed"}` // Selected or disabled stylebg
                                            : "hover:bg-[#e8e8e876] hover:font-medium cursor-pointer"
                                            }`}
                                    >
                                        Android??
                                    </div>
                                </li>
                                <hr />
                                <li>
                                    <div
                                        onClick={() => selectedField ? null : handleClick("Web")}
                                        className={`text-sm rounded-lg block w-full text-[#3a3f47] p-2 ${selectedField
                                            ? `${selectedField === "Web" ? "bg-gray-200 cursor-not-allowed" : "cursor-not-allowed"}` // Selected or disabled stylebg
                                            : "hover:bg-[#e8e8e876] hover:font-medium cursor-pointer"
                                            }`}
                                    >
                                        Web??
                                    </div>
                                </li>
                                <hr />
                                <li>
                                    <div
                                        onClick={() => selectedField ? null : handleClick("Machine Learning")}
                                        className={`text-sm rounded-lg block w-full text-[#3a3f47] p-2 ${selectedField
                                            ? `${selectedField === "Machine Learning" ? "bg-gray-200 cursor-not-allowed" : "cursor-not-allowed"}` // Selected or disabled stylebg
                                            : "hover:bg-[#e8e8e876] hover:font-medium cursor-pointer"
                                            }`}
                                    >
                                        Machine Learning??
                                    </div>
                                </li>
                            </ul>
                            {selectedField && (
                                <p className="text-xs text-green-500 mt-2">You Choose {sessionStorage.getItem("field")}</p>
                            )}
                        </div>
                        {selectedField && (
                            <div className="flex gap-2.5 justify-end">
                                <div className="grid mb-2">
                                    <div className="justify-center">
                                        <h5 className="text-right text-gray-900 text-sm font-semibold leading-snug pb-1">You</h5>

                                        <div className="grid w-fit ml-auto">
                                            <div className="px-3 py-2 bg-white rounded-xl ring-1 ring-[#1f478b36] ">
                                                <h2 className="text-[#3a3f47] text-sm capitalize font-normal leading-snug">{sessionStorage.getItem("field")}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <img src="https://pagedone.io/asset/uploads/1704091591.png" alt="Hailey image" className="w-10 h-11" />
                            </div>
                        )}
                    </div>


                    {/* Tampilkan komponen sesuai dengan pilihan */}
                    {selectedField === "Web" && <Web />}
                    {/* {selectedField === "Android" && <Android />} */}
                    {selectedField === "Machine Learning" && <MachineLearning />}
                    {selectedField === "Android" && <Android />}
                </div>
            </div>
        </div>
    );
}

export default Page;
