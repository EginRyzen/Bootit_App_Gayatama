// "use client"
// import React from 'react'

// const handleClick = () => {
//     alert('clicked')
// }

// function Page() {
//     return (
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="py-20">
//                 <div className="w-full bg-slate-100 p-5 rounded-xl">
//                     <div className="grid pb-5">
//                         <div className="flex gap-2.5 mb-4">
//                             <img src="https://course-recommender.app.dicoding.space/static/images/dibantu-logo.png" alt="Shanay image" className="w-10 h-11" />
//                             <div className="grid">
//                                 <h5 className="text-gray-900 text-sm font-semibold leading-snug pb-1">Shanay cruz</h5>
//                                 <div className="w-max grid mb-2">
//                                     <div className="px-3.5 py-2 bg-indigo-600 rounded-xl justify-start  items-center gap-3 inline-flex">
//                                         <h5 className="text-white text-sm font-medium leading-snug">Guts, I need a review of work. Are you ready?</h5>
//                                     </div>
//                                 </div>
//                                 <div className="w-max grid">
//                                     <div className="px-3.5 py-2 bg-indigo-600 rounded-xl justify-start items-center gap-3 inline-flex">
//                                         <h5 className="text-white text-sm font-medium leading-snug">Let me know</h5>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="grid mb-2 justify-end">
//                         <div className="px-3 py-2 bg-white rounded-xl min-w-96 mb-5 ring-1 ring-[#1f478b36]">
//                             <p>Pilih 1 Minat Belajar</p>
//                             <ul className="px-2 mt-2 space-y-1 list-none">
//                                 <li>
//                                     <div onClick={handleClick} className="hover:bg-[#e8e8e876] hover:font-medium rounded-lg block w-full text-[#3a3f47] p-2 cursor-pointer">
//                                         Android??
//                                     </div>
//                                 </li>
//                                 <hr />
//                                 <li>
//                                     <div className="hover:bg-[#e8e8e876] hover:font-medium rounded-lg block w-full text-[#3a3f47] p-2 cursor-pointer">
//                                         Web??
//                                     </div>
//                                 </li>
//                                 <hr />
//                                 <li>
//                                     <div className="hover:bg-[#e8e8e876] hover:font-medium rounded-lg block w-full text-[#3a3f47] p-2 cursor-pointer">
//                                         Cloud Computing??
//                                     </div>
//                                 </li>
//                                 <hr />
//                                 <li>
//                                     <div className="hover:bg-[#e8e8e876] hover:font-medium rounded-lg block w-full text-[#3a3f47] p-2 cursor-pointer">
//                                         Machine Learning??
//                                     </div>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div className="flex gap-2.5 justify-end">
//                             <div className="grid mb-2">
//                                 <div className="justify-center">
//                                     <h5 className="text-right text-gray-900 text-sm font-semibold leading-snug pb-1">You</h5>

//                                     <div className="grid w-fit ml-auto">
//                                         <div className="px-3 py-2 bg-white rounded-xl ring-1 ring-[#1f478b36] ">
//                                             <h2 className="text-[#3a3f47] text-sm capitalize font-normal leading-snug">Android</h2>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <img src="https://pagedone.io/asset/uploads/1704091591.png" alt="Hailey image" className="w-10 h-11" />
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Page

"use client";
import React, { useState } from "react";

function Page() {
    // State untuk menyimpan history chat
    const [chatHistory, setChatHistory] = useState([
        {
            sender: "bot",
            message: "Guts, I need a review of work. Are you ready?",
        },
    ]);

    // Tambahkan jawaban ke history
    const handleClick = (choice) => {
        // Tambahkan jawaban pengguna dan respon bot ke chat history
        alert(choice);
        if (choice === "Android") {
            setChatHistory((prevHistory) => [
                ...prevHistory,
                { sender: "user", message: choice }, // Jawaban dari pengguna
                { sender: "bot", message: `You chose ${choice}. What's next?` }, // Respon bot
            ]);
        }

    };

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-20">
                <div className="w-full bg-slate-100 p-5 rounded-xl">
                    <div className="grid pb-5">
                        <div className="flex gap-2.5 mb-4">
                            <img src="https://course-recommender.app.dicoding.space/static/images/dibantu-logo.png" alt="Shanay image" className="w-10 h-11" />
                            {/* Chat history display */}
                            <div className="w-full space-y-2">
                            <h5 className="text-gray-900 text-sm font-semibold leading-snug pb-1">Shanay cruz</h5>
                                {chatHistory.map((chat, index) => (
                                    <div
                                        key={index}
                                        className={` ${chat.sender === "bot" ? "flex justify-start" : "hidden"}`}
                                    >
                                        <div
                                            className={`${chat.sender === "bot"
                                                ? "px-4 py-2 rounded-xl max-w-xs bg-indigo-600 text-white"
                                                : "hidden"
                                                }`}
                                        >
                                            <p className="text-sm">{chat.message}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Pilihan jawaban */}
                    <div className="grid mb-2 justify-end">

                        <div className="px-3 py-2 bg-white rounded-xl min-w-96 mb-5 ring-1 ring-[#1f478b36]">
                            <p>Pilih 1 Minat Belajar</p>
                            <ul className="px-2 mt-2 space-y-1 list-none">
                                <li>
                                    <div
                                        onClick={() => handleClick("Android")}
                                        className="hover:bg-[#e8e8e876] hover:font-medium rounded-lg block w-full text-[#3a3f47] p-2 cursor-pointer"
                                    >
                                        Android??
                                    </div>
                                </li>
                                <hr />
                                <li>
                                    <div
                                        onClick={() => handleClick("Web")}
                                        className="hover:bg-[#e8e8e876] hover:font-medium rounded-lg block w-full text-[#3a3f47] p-2 cursor-pointer"
                                    >
                                        Web??
                                    </div>
                                </li>
                                <hr />
                                <li>
                                    <div
                                        onClick={() => handleClick("Cloud Computing")}
                                        className="hover:bg-[#e8e8e876] hover:font-medium rounded-lg block w-full text-[#3a3f47] p-2 cursor-pointer"
                                    >
                                        Cloud Computing??
                                    </div>
                                </li>
                                <hr />
                                <li>
                                    <div
                                        onClick={() => handleClick("Machine Learning")}
                                        className="hover:bg-[#e8e8e876] hover:font-medium rounded-lg block w-full text-[#3a3f47] p-2 cursor-pointer"
                                    >
                                        Machine Learning??
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
