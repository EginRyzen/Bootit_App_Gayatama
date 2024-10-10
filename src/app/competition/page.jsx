"use client";

import React from "react";
import Carousel from "./carousel/carousel";
import Timeline from "./timeline/timeline";
import { useCarousel } from "./carousel/animation";

export default function Page() {
  const { currentIndex, images } = useCarousel();

  return (
    <>
      <main>
        <div className="fixed flex top-0 -z-10 h-full w-full bg-white">
          {/* Warna Ungu */}
          <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>

          {/* Warna Merah */}
          <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] translate-x-[10%] translate-y-[50%] rounded-full bg-[rgba(244,109,109,0.5)] opacity-50 blur-[80px]"></div>

          {/* Warna Biru */}
          <div className="absolute bottom-auto left-0 top-0 h-[500px] w-[500px] translate-x-[10%] translate-y-[20%] rounded-full bg-[rgba(95,164,242,0.5)] opacity-50 blur-[80px]"></div>
        </div>
        <Carousel currentIndex={currentIndex} images={images} />
        <Timeline />
      </main>
    </>
  );
}
