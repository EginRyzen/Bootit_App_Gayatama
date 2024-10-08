import React from 'react'
import { MdOutlineKeyboardDoubleArrowRight, MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

export default function Pagination() {
    return (
        <>
            <div className='w-full flex justify-center mt-10'>
                <nav aria-label="Page navigation example">
                    <ul className="inline-flex -space-x-px text-base h-10">
                        <li>
                            <a href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-md hover:bg-gray-100 hover:text-gray-700">
                                <MdOutlineKeyboardDoubleArrowLeft />
                            </a>
                        </li>
                        <li>
                            <a href="#" aria-current="page" className="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700">1</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">2</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">3</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">4</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">5</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-md hover:bg-gray-100 hover:text-gray-700 ">
                                <MdOutlineKeyboardDoubleArrowRight />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
