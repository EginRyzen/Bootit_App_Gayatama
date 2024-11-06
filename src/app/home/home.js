"use client";
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase"; // Import konfigurasi Firestore
import Banner from "./banner/banner";
import LearningPath from "./section/learningpath";
import SlideLogo from "./slide/slidelogo";
import About from "./section/about";
import NewSlideCard from "./slide/newslidecard";
import Questions from "./section/questioons";
import Join from "./banner/join";
import Chatbot from "./components/chatbot";

function HomePage() {
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState(1);
  const [bootcampData, setBootcampData] = useState([]);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const fetchBootcampData = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "bootcamp"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBootcampData(data);
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
      }
      setLoading(false);
    };

    fetchBootcampData();
  }, []);

  if (loading) {
    return <div className="text-center text-lg font-bold m-10">Loading...</div>;
  }

  return (
    <>
      <main>
        <Banner />
        <LearningPath />
        <SlideLogo />
        <About />
        <NewSlideCard bootcampData={bootcampData} />
        <Questions toggleAccordion={toggleAccordion} openIndex={openIndex} />
        <Join />
        <Chatbot />
      </main>
    </>
  );
}

export default HomePage;
