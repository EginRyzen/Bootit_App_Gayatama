"use client";
import React, { useEffect, useState } from "react";
import Beginer from "./beginer/beginer";
import Intermediate from "./intermediate/intermediate";
import Profesional from "./professional/professional";
export default function MachineLearning() {
    const [selectedField, setSelectedField] = useState("");

    useEffect(() => {
        const savedChoice = sessionStorage.getItem("level");
        if (savedChoice) {
            setSelectedField(savedChoice);
        }
    }, []);

    const handleClick = (choice) => {
        sessionStorage.setItem("level", choice);
        setTimeout(() => {
            setSelectedField(choice);
        }, 1500)
    };

    const dataButton = [
        {
            id: 1,
            name: "Beginer",
            button: 'Beginer'
        },
        {
            id: 2,
            name: "Intermediate",
            button: 'Intermediate'
        },
        {
            id: 3,
            name: "Professional",
            button: 'Professional'
        }
    ];
    return (
        <>
            <div className="grid pb-5">
                <div className="flex gap-2.5 mb-4">
                    <img src="/shanaybot.png" alt="Shanay image" className="w-10 h-11" />
                    <div className="grid w-1/2">
                        <h5 className="text-gray-900 text-sm font-semibold leading-snug pb-1">Shanay cruz</h5>
                        <div className="w-full grid mb-2">
                            <div className="px-3.5 py-2 bg-indigo-600 rounded-xl justify-start items-center gap-3 inline-flex">
                                <h5 className="text-white text-sm font-medium leading-snug">Hi! I`m Shaney Cruz, ready to guide you to the right class for you. Let`s choose your skill level so we can start learning together!</h5>
                            </div>
                        </div>
                        <div className="w-full grid">
                            <div className="px-3.5 py-2 bg-indigo-600 rounded-xl justify-start items-center gap-3 inline-flex">
                                <h5 className="text-white text-sm font-medium leading-snug">Choose the level that suits you</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid mb-2 justify-end">
                <div className="px-3 py-2 bg-white rounded-xl w-[250px] md:min-w-96 mb-5 ring-1 ring-[#1f478b36]">
                    <p className='text-md font-medium capitalize'>Choose the level that suits your level</p>
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
                                    {item.name}
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
                                        <h2 className="text-[#3a3f47] text-sm capitalize font-normal leading-snug">{sessionStorage.getItem("level")}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src="https://pagedone.io/asset/uploads/1704091591.png" alt="Hailey image" className="w-10 h-11" />
                    </div>
                )}
            </div>

            {selectedField === "Beginer" && <Beginer />}
            {selectedField === "Intermediate" && <Intermediate />}
            {selectedField === "Professional" && <Profesional />}

        </>
    )
}