"use client";

import React, { useEffect, useState } from "react";
import { useCountdown } from "./countdown";
import { FaRegBuilding } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { db } from "./../../../../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Timeline() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "competitions"));
        const competitionData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setItems(competitionData);
      } catch (error) {
        console.error("Error fetching competitions data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) {
    return (
      <div className="text-center text-lg font-bold m-10">
        Loading Bootcamp...
      </div>
    );
  }

  return (
    <div>
      <section className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-10">
            <div className="w-full max-w-4xl mx-auto">
              <div className="font-bold text-2xl mb-8 mt-5 text-center">
                Latest Competition
              </div>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent before:z-0">
                {items.map((item, index) => (
                  <TimelineItem key={index} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function TimelineItem({ item }) {
  const router = useRouter();
  const timeLeft = useCountdown(item.endTime) || {
    hours: "00",
    minutes: "00",
    seconds: "00",
  }; // Default values

  const handleCardClick = (id) => {
    router.push(`/competition/detail/${id}`);
  };

  const truncateDescription = (description, maxWords) => {
    const words = description.split(" ");
    return words.length <= maxWords
      ? description
      : words.slice(0, maxWords).join(" ") + "...";
  };

  return (
    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group my-4">
      {/* Countdown Timer */}
      <div
        suppressHydrationWarning
        className="hidden md:flex relative z-10 items-center justify-center w-10 mx-20 h-10 rounded-lg text-red-650 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"
      >
        {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
      </div>

      {/* Card */}
      <button
        onClick={() => handleCardClick(item.id)}
        className="w-full md:w-[calc(40%-2rem)] p-4 rounded bg-white border-solid border-2 border-[#9e9e9e] flex flex-col justify-between h-full transition hover:bg-gray-100 text-left"
      >
        <div className="flex flex-col mb-1">
          <span className="text-[#3a3f47] bg-transparent font-medium border-2 border-[#f2f2f2] rounded-md text-xs">
            {item.field}
          </span>
          <div className="font-bold text-sm text-[#3a3f47]">{item.title}</div>
        </div>
        <div className="font-medium text-xs text-slate-700 mb-1 space-y-1">
          <div className="flex items-center gap-1">
            <FaRegBuilding />
            <span>{item.organizer}</span>
          </div>
          <div className="flex items-center gap-1">
            <MdOutlineLocationOn />
            <span>{item.place}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaRegClock />
            <span>
              {item.dateStart} - {item.dateEnd}
            </span>
          </div>
        </div>
        <div className="text-xs text-slate-500 mt-1">
          {truncateDescription(item.description, 20)}
        </div>
        <div className="text-right mt-auto text-blue-500 cursor-pointer">
          View More...
        </div>
      </button>
    </div>
  );
}
