"use client";

import React, { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useParams } from "next/navigation";

import { db } from "./../../../../../firebase"; // Import Firestore instance
import { doc, getDoc } from "firebase/firestore";

function Page() {
  const { id } = useParams();
  const [meetup, setMeetup] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const docRef = doc(db, "meetup", id); // Mengakses dokumen berdasarkan Firestore ID
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setMeetup(docSnap.data()); // Menyimpan data dari Firestore
        } else {
          setError("Meet Up not found.");
        }
      } catch (err) {
        setError("Error fetching Meet Up details.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center text-lg font-bold m-10">
        Loading Detail Meet Up...
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-lg font-bold m-10">{error}</div>;
  }

  if (!meetup) {
    return (
      <div className="text-center text-lg font-bold m-10">
        Meet Up not found.
      </div>
    );
  }

  return (
    <main>
      <div className="fixed flex top-0 -z-10 h-full w-full bg-white">
        {/* Warna Ungu */}
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>

        {/* Warna Merah */}
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] translate-x-[10%] translate-y-[50%] rounded-full bg-[rgba(244,109,109,0.5)] opacity-50 blur-[80px]"></div>

        {/* Warna Biru */}
        <div className="absolute bottom-auto left-0 top-0 h-[500px] w-[500px] translate-x-[10%] translate-y-[20%] rounded-full bg-[rgba(95,164,242,0.5)] opacity-50 blur-[80px]"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row py-20 justify-between gap-10">
        <div className="w-full md:w-[65%]">
          <div className="w-full mb-5 overflow-hidden">
            <img
              src={meetup.img}
              className="h-96 hidden md:block"
              alt={meetup.title}
            />
          </div>
          <div className="text-2xl font-normal text-[#3a3f47] mb-8">
            {meetup.title}
          </div>
          <div className="text-lg font-medium text-[#3a3f47] mb-2">Details</div>
          <p className="text-normal text-sm text-[#3a3f47]">
            {meetup.description1}
            <br />
            <br />
            {meetup.description2}
          </p>
          <div className="w-full mt-5">
            <div className="text-lg font-medium text-[#3a3f47]">
              Related Topics
            </div>
            <div className="flex flex-wrap gap-2">
              {meetup.category.map((cat) => (
                <span
                  key={cat.id}
                  className="py-1 px-2 text-[#3a3f47] bg-transparent font-medium border-2 border-[#f2f2f2] rounded-md text-xs"
                >
                  {cat.name}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full mt-10">
            <div className="text-xl font-normal text-[#3a3f47] capitalize">
              event rundown
            </div>
            <div className="relative overflow-x-auto mt-2">
              <table className="w-full text-sm rtl:text-right text-gray-500 border border-gray-300">
                <thead className="text-xs md:text-sm text-white capitalize text-center bg-blue-500 border-b border-gray-300">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-2 border-r border-gray-300 font-normal"
                    >
                      Time
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 border-r border-gray-300 font-normal"
                    >
                      Session
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 border-r border-gray-300 font-normal"
                    >
                      Speaker
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(meetup.rundown) &&
                  meetup.rundown.length > 0 ? (
                    meetup.rundown.map((item, index) => (
                      <tr
                        key={index}
                        className="bg-white border-b border-gray-300"
                      >
                        <th
                          scope="row"
                          className="px-4 py-2 font-normal text-gray-900 whitespace-nowrap border-r border-gray-300 text-center"
                        >
                          {item.time}
                        </th>
                        <td className="px-4 py-2 border-r border-gray-300">
                          {item.session}
                        </td>
                        <td className="px-4 py-2 border-r border-gray-300">
                          {item.speaker}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" className="text-center py-4">
                        No rundown available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[25%]">
          <div className="sticky top-28">
            <div className="text-2xl text-[#3a3f47] font-normal">
              Participation
            </div>
            <p className="text-sm font-light text-[#3a3f47] my-5">
              Please log in first to be able to register for this event for
              free.
            </p>
            <a
              href={meetup.link}
              className="inline-flex items-center justify-center w-full text-white hover:text-[#3a3f47] hover:bg-white border bg-gray-600 border-[#3a3f47] focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal px-2 py-2 text-xs md:text-sm text-center rounded-md"
            >
              Join Now
            </a>
            <div className="my-8">
              <div className="p-4">
                <img src={meetup.img} alt="Event Visual" />
              </div>
              <div className="text-md font-normal text-[#3a3f47]">
                {meetup.description3}
              </div>
              <div className="text-md font-normal text-[#3a3f47] mt-5">
                Event Schedule
              </div>
              <ul className="my-5">
                <li className="flex items-center mb-2">
                  <FaClock className="size-5 text-slate-500 flex-shrink-0" />
                  <span className="text-xs font-semibold text-[#3a3f47] ms-2 capitalize">
                    {meetup.startTime} - {meetup.endTime}
                  </span>
                </li>
                <li className="flex items-center mb-2">
                  <FaLocationDot className="size-5 text-slate-500 flex-shrink-0" />
                  <span className="text-xs font-semibold text-[#3a3f47] ms-2 capitalize">
                    {meetup.address}
                  </span>
                </li>
              </ul>
              <div className="py-8 overflow-hidden">
                <iframe
                  src={meetup.map}
                  width={250}
                  height={250}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page;
