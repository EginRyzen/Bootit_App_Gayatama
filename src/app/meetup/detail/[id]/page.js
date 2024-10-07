"use client";
import React from 'react'
import { FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useParams } from 'next/navigation';
import { Data } from '../../data';
import { useEffect, useState } from 'react';

function Page() {
    const params = useParams();
    const { id } = params;
    const [meetup, setMeetup] = useState(null);

    useEffect(() => {
        const foundMeetup = Data.find(item => item.id === parseInt(id));
        if (foundMeetup) {
            setMeetup(foundMeetup);
        }
    }, [id]);

    if (!meetup) {
        return <p>Meetup not found</p>;
    }


    return (
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row py-20 justify-between gap-10'>
            <div className='w-full md:w-[65%]'>
                <div className='w-full mb-5 overflow-hidden'>
                    <img src="/img/cardmeetup/1.png" className='h-96 hidden md:block' />
                </div>
                <div className='text-2xl font-normal text-[#3a3f47] mb-8'>Acara ini sepenuhnya GRATIS dan akan diselenggarakan hari Minggu, 18 Agustus 2024 pukul 09.00 - 12.00 WIB Live di YouTube</div>
                <div className='text-lg font-medium text-[#3a3f47] mb-2'>Details</div>
                <p className='text-normal text-sm text-[#3a3f47]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id quam non diam porttitor gravida sit amet eget nibh. Phasellus cursus congue egestas. Ut in sollicitudin nisi. Maecenas mollis erat ut sodales mollis. Aliquam rutrum semper aliquet. Donec hendrerit sit amet mauris vitae dapibus. Quisque eu ipsum vitae sem aliquam lobortis in tincidunt turpis. Aliquam convallis condimentum orci a vehicula.
                    <br />
                    <br />
                    Curabitur vitae felis placerat, suscipit nisi ac, pulvinar risus. Suspendisse pretium nisi sit amet neque euismod ultrices. Praesent quis libero risus. Suspendisse nec augue metus. Donec vitae venenatis neque. Quisque eros elit, feugiat sollicitudin pulvinar et, cursus vitae tellus. Duis cursus purus ut orci sollicitudin pharetra. Nunc venenatis hendrerit eros, in laoreet tortor auctor vel. Donec convallis mi mi. Nullam scelerisque, nisi at finibus dictum, lectus magna pellentesque magna, non commodo dolor urna a mi. Integer pellentesque ante in ipsum laoreet rhoncus.
                </p>
                <div className='w-full mt-5'>
                    <div className='text-lg font-medium text-[#3a3f47]'>Related Topics</div>
                    <div className='flex flex-wrap gap-2'>
                        <span className='py-1 px-2 text-[#3a3f47] bg-transparent font-medium border-2 border-[#f2f2f2] rounded-md text-xs'>
                            Android
                        </span>
                        <span className='py-1 px-2 text-[#3a3f47] bg-transparent font-medium border-2 border-[#f2f2f2] rounded-md text-xs'>
                            Web Developer
                        </span>
                        <span className='py-1 px-2 text-[#3a3f47] bg-transparent font-medium border-2 border-[#f2f2f2] rounded-md text-xs'>
                            Kontlin
                        </span>
                        <span className='py-1 px-2 text-[#3a3f47] bg-transparent font-medium border-2 border-[#f2f2f2] rounded-md text-xs'>
                            React
                        </span>
                    </div>
                </div>
                <div className='w-full mt-10'>
                    <div className='text-xl font-normal text-[#3a3f47] capitalize'>event rundown</div>
                    <div className="relative overflow-x-auto mt-2">
                        <table className="w-full text-sm rtl:text-right text-gray-500 border border-gray-300">
                            <thead className="text-xs md:text-sm text-white capitalize text-center bg-blue-500 border-b border-gray-300">
                                <tr>
                                    <th scope="col" className="px-4 py-2 border-r border-gray-300 font-normal">
                                        Time
                                    </th>
                                    <th scope="col" className="px-4 py-2 border-r border-gray-300 font-normal">
                                        Session
                                    </th>
                                    <th scope="col" className="px-4 py-2 border-r border-gray-300 font-normal">
                                        Speaker
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b border-gray-300">
                                    <th scope="row" className="px-4 py-2 font-normal text-gray-900 whitespace-nowrap border-r border-gray-300 text-center">
                                        16.00 - 16.10
                                    </th>
                                    <td className="px-4 py-2 border-r border-gray-300">
                                        Opening Dicoding Developer Coaching
                                    </td>
                                    <td className="px-4 py-2 border-r border-gray-300">
                                        <span className='font-bold'>Tressa Agista Bella </span>
                                        Program Officer
                                    </td>
                                </tr>
                                <tr className="bg-white border-b border-gray-300">
                                    <th scope="row" className="px-4 py-2 font-normal text-gray-900 whitespace-nowrap border-r border-gray-300 text-center">
                                        16.00 - 16.10
                                    </th>
                                    <td className="px-4 py-2 border-r border-gray-300">
                                        Opening Dicoding Developer Coaching
                                    </td>
                                    <td className="px-4 py-2 border-r border-gray-300">
                                        <span className='font-bold'>Tressa Agista Bella </span>
                                        Program Officer
                                    </td>
                                </tr>
                                <tr className="bg-white border-b border-gray-300">
                                    <th scope="row" className="px-4 py-2 font-normal text-gray-900 whitespace-nowrap border-r border-gray-300 text-center">
                                        16.00 - 16.10
                                    </th>
                                    <td className="px-4 py-2 border-r border-gray-300">
                                        Opening Dicoding Developer Coaching
                                    </td>
                                    <td className="px-4 py-2 border-r border-gray-300">
                                        <span className='font-bold'>Tressa Agista Bella </span>
                                        Program Officer
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>



                </div>
            </div>
            <div className='w-full md:w-[25%]'>
                <div className='sticky top-28'>
                    <div className='text-2xl text-[#3a3f47] font-normal'>Keikutsertaan</div>
                    <p className='text-sm font-light text-[#3a3f47] my-5'>Silakan masuk dahulu ke Dicoding untuk dapat mendaftar ke event ini secara gratis.</p>
                    <a href="#" className="inline-flex items-center justify-center w-full text-white hover:text-[#3a3f47] hover:bg-white border bg-gray-600 border-[#3a3f47] focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal px-2 py-2 text-xs md:text-sm text-center rounded-md">
                        Bergabung Sekarang
                    </a>
                    <div className='my-8'>
                        <div className='p-4'>
                            <img src='/img/cardmeetup/1.png' />
                        </div>
                        <div className='text-md font-normal text-[#3a3f47]'>
                            Acara ini sepenuhnya GRATIS dan akan diselenggarakan hari Minggu, 18 Agustus 2024 pukul 09.00 - 12.00 WIB Live di YouTube
                        </div>
                        <div className='text-md font-normal text-[#3a3f47] mt-5'>Jadwal Pelaksanaan</div>
                        <ul className='my-5'>
                            <li className='flex items-center mb-2'>
                                <FaClock className="size-5 text-slate-500 flex-shrink-0" />
                                <span className='text-xs font-semibold text-[#3a3f47] ms-2 capitalize'>16.00 - 17.00</span>
                            </li>
                            <li className='flex items-center mb-2'>
                                <FaLocationDot className="size-5 text-slate-500 flex-shrink-0" />
                                <span className='text-xs font-semibold text-[#3a3f47] ms-2 capitalize'>Fakultas Teknik, Gedung E1, Jl. Ketintang, UNESA, Kec. Gayungan, Surabaya, Jawa Timur 60231
                                </span>
                            </li>
                        </ul>
                        <div className='py-8 overflow-hidden'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.3391118063096!2d112.72248320281506!3d-7.315749815559753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fd1b53388db7%3A0x7225123405846665!2sGedung%20E1%20Fakultas%20Teknik%20Kampus%20UNESA%20Ketintang!5e0!3m2!1sid!2sid!4v1728231451561!5m2!1sid!2sid" width={250} height={250} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page