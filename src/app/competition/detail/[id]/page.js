"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FaRegBuilding, FaShareSquare } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineArrowDown } from "react-icons/ai"; // Ikon panah ke bawah
import generateQRCode from "../qr-generator"; // Import fungsi QR generator
import shareCompetition from "../share";
import { db } from "./../../../../../firebase"; // Import Firestore instance
import { doc, getDoc } from "firebase/firestore";

const CompetitionDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false); // State untuk mengontrol ukuran gambar
  const [qrCodeUrl, setQrCodeUrl] = useState(null); // State untuk menyimpan URL QR code
  const [error, setError] = useState(null); // State untuk menyimpan error

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const docRef = doc(db, "competitions", id); // Mengakses dokumen berdasarkan Firestore ID
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setItem(docSnap.data()); // Menyimpan data dari Firestore
        } else {
          setError("Competition not found.");
        }
      } catch (err) {
        setError("Error fetching competition details.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchQRCode = async () => {
      if (item && item.link) {
        try {
          const url = await generateQRCode(item.link);
          setQrCodeUrl(url);
        } catch (err) {
          console.error("Error generating QR code:", err);
        }
      }
    };

    fetchQRCode();
  }, [item]);

  if (loading) {
    return (
      <div className="text-center text-lg font-bold m-10">
        Loading Detail Competition...
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-lg font-bold m-10">{error}</div>;
  }

  return (
    <div className="max-w-6xl mx-auto my-28 px-4 sm:px-6 lg:px-8">
      <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative">
          <img
            src={item.image}
            alt={item.title}
            className={`w-full object-cover transition-all duration-300 ${
              isExpanded ? "h-full" : "h-60"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-red-500 opacity-50"></div>
          <div className="absolute top-2 right-2 bg-white p-2 rounded shadow">
            {/* Countdown timer (if needed) */}
          </div>
          <div className="absolute bottom-2 left-0 right-0 flex justify-center mb-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              aria-label={isExpanded ? "Collapse image" : "Expand image"}
              className="flex items-center text-white bg-blue-500 rounded-full p-2 shadow-lg"
            >
              <AiOutlineArrowDown
                className={`transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {item.title}
            <span className="text-[#3a3f47] bg-transparent font-medium border-2 border-[#f2f2f2] rounded-md text-sm">
              {" "}
              {item.field}
            </span>
          </h1>
          <hr className="m-7"></hr>
          <div className="flex items-center mb-4">
            <FaRegBuilding className="mr-1" />
            <span className="text-gray-600">
              <strong>Organizer:</strong> {item.organizer}
            </span>
          </div>
          <div className="flex items-center mb-4">
            <MdOutlineLocationOn className="mr-1" />
            <span className="text-gray-600">
              <strong>Place:</strong> {item.place}
            </span>
          </div>
          <p className="text-gray-600 mb-4">
            <strong>Date:</strong> {item.dateStart} - {item.dateEnd}
          </p>
          <div className="text-gray-600 mb-4">
            <strong>Details</strong>
            <p>{item.description}</p>
          </div>

          <div className="flex flex-col items-center mb-4">
            {qrCodeUrl && (
              <img src={qrCodeUrl} alt="QR Code" className="w-24 h-24 mb-2" />
            )}
            <button
              onClick={() => shareCompetition(item)}
              aria-label="Share competition"
              className="flex items-center text-gray-800 hover:text-white bg-gray-300 hover:bg-gray-600 rounded-md p-1 text-xs shadow-lg transition-all duration-500 mb-2"
            >
              <FaShareSquare className="mr-1" />
              <span className="text-sm">Share</span>
            </button>
            <button
              type="button"
              onClick={() => window.open(item.link, "_blank")}
              aria-label="Register for competition"
              className="text-[#3a3f47] hover:text-white hover:bg-gray-600 border bg-white border-[#3a3f47] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-xs px-6 py-2 mt-9 text-center cursor-pointer transition-all duration-500 ease-in-out"
            >
              <strong>REGISTER</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitionDetail;
