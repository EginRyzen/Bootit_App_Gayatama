"use client";

import React from "react";
import Carousel from "./carousel/carousel";
import { useCarousel } from "./carousel/animation";

export default function Page() {
  const { currentIndex, images } = useCarousel();

  return (
    <>
      <main>
        <Carousel currentIndex={currentIndex} images={images} />
      </main>
    </>
  );
}
