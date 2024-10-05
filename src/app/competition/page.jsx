"use client";

import React from "react";
import Carousel from "./carousel/carousel";
import Timeline from "./timeline/timeline"
import { useCarousel } from "./carousel/animation";

export default function Page() {
  const { currentIndex, images } = useCarousel();

  return (
    <>
      <main>
        <Carousel currentIndex={currentIndex} images={images} />
        <Timeline />
      </main>
    </>
  );
}
