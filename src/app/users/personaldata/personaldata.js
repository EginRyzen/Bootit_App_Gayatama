"use client";
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { parseISO } from 'date-fns';

export default function PersonalData() {
    const [startDate, setStartDate] = useState(parseISO("2004-10-10"));
    return (
        <>
            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow w-full">
                <h5 className="mb-2 text-xl font-medium tracking-tight text-slate-500">Personal Data</h5>
                <hr />
                <form>
                    <div className='mt-10 w-full md:w-3/4'>
                        <div className="flex flex-col mb-5">
                            <label htmlFor="phone-input" className="mb-2 text-md font-medium text-gray-900">Phone number:</label>
                            <div className='flex items-center'>
                                <div className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-md hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100">
                                    <div className="inline-flex items-center">
                                        🇮🇩 +62
                                    </div>
                                </div>
                                <div className="relative w-full">
                                    <input type="phone" id="phone-input" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-md border-s-0 border border-gray-300 focus:ring-blue-500 focus:border-blue-500" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required />
                                </div>
                            </div>
                        </div>

                        <div className="mb-5">
                            <label htmlFor="username" className="block mb-2 text-md font-medium text-gray-900">Current City/District <sup className='text-red-500'>*</sup></label>
                            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" >
                                <option defaultValue="Ponorogo">Ponorogo</option>
                                <option value="Madiun">Madiun</option>
                                <option value="Treggalek">Trenggalek</option>
                                <option value="Surabaya">Surabaya</option>
                                <option value="Sidoarjo">Sidoarjo</option>
                            </select>
                            <p className='text-xs text-gray-400 mt-1'>Fill in the city/district where you currently live.</p>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="username" className="block mb-2 text-md font-medium text-gray-900">Place of birth</label>
                            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                <option defaultValue="Ponorogo">Kabupaten Ponorogo</option>
                                <option value="US">Kabupaten Madiun</option>
                                <option value="CA">Kabupaten Trenggalek</option>
                                <option value="FR">Kabupaten Surabaya</option>
                                <option value="DE">Kabupaten Sidoarjo</option>
                            </select>
                            <p className='text-xs text-gray-400 mt-1'>Fill in the city/district where you were born.</p>
                            <div className='flex items-start gap-5 justify-beetwen mt-8'>
                                <div className="relative w-1/2">
                                    <label htmlFor="Date of birth" className="block mb-2 text-md font-medium text-gray-900">Date of birth</label>
                                    <div className="absolute z-10 inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-4 h-4 mt-7 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                        </svg>
                                    </div>
                                    <DatePicker
                                        id='Date of birth'
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                                        placeholderText="Select date"
                                        dateFormat="yyyy-MM-dd"
                                    />
                                </div>
                                <div className='flex flex-col w-1/2'>
                                    <div className="block mb-2 text-md font-medium text-gray-900">Gender</div>
                                    <div className="flex items-center mb-4">
                                        <input id="default-radio-1" type="radio" defaultChecked name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 outline-none" />
                                        <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900">Man</label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input id="default-radio-1" type="radio" defaultValue name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 outline-none" />
                                        <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900">Woman</label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input id="default-radio-1" type="radio" defaultValue name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 outline-none" />
                                        <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900">Choose Not to Mention</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-5">
                            <label htmlFor="username" className="block mb-2 text-md font-medium text-gray-900">Last Education</label>
                            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                <option defaultValue="Tidak Sekolah">Not in School/Not Yet in School</option>
                                <option value="US">Graduated from elementary school/equivalent</option>
                                <option value="CA">Graduated from junior high school/equivalent</option>
                                <option value="FR">Graduated from high school</option>
                                <option value="DE">Diploma/Literature I</option>
                            </select>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="job" className="block mb-2 text-md font-medium text-gray-900">Current Job/Profession</label>
                            <select id="job" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                <option defaultValue="Pelajar/Mahasiswa">Students</option>
                                <option value="US">Arsitektur</option>
                                <option value="CA">Industri</option>
                                <option value="FR">Doctor</option>
                                <option value="DE">Lawyer</option>
                            </select>
                            <p className='text-xs text-gray-400 mt-1'>Select student or pupil if you are still studying.</p>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="company" className="block mb-2 text-md font-medium text-gray-900">Current Company/Institution</label>
                            <input type="name" id="company" className="bg-gray-50 border text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-gray-400 placeholder-gray-400" placeholder="Your Current Company/Institution" required />
                            <p className='text-xs text-gray-400 mt-1'>You can write the name of the company or campus.</p>
                        </div>
                        <button
                            type="button"
                            className="border focus:ring-4 focus:outline-none font-bold rounded-sm text-sm px-5 py-2.5 text-center me-2 mb-2 border-[#3a3f47] text-white bg-gray-600 ring-gray-800 transition-all duration-500 ease-in-out"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
