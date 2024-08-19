"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { ImagesSlider } from "@/components/ui/images-slider";

export default function HomePage() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [showText, setShowText] = useState(true);

  const slideText = [
    "COMMITTED TO IMPROVING THE <br/> LIVES OF THOSE WHO SUFFER <br/> FROM ALLERGIES & ASTHMA...",
    "…BECAUSE WE KNOW QUALITY OF <br/> LIFE MATTERS",
    "BREATHE EASY... <br/>LET KIDS BE KIDS",
  ];

  const images = ["4.png", "2.jpg", "3.jpg"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowText(false); // Hide text after 5 seconds
      setTimeout(() => {
        setShowText(true); // Show text again
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % slideText.length); // Move to the next text
      }, 500);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {!loading && (
        <ImagesSlider
          className="h-[20rem] md:h-[30rem] lg:h-[40rem]"
          images={images}
        >
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: showText ? 1 : 0,
              y: showText ? 0 : -80,
            }}
            transition={{
              duration: 0.6,
            }}
            className="z-50 flex flex-col justify-center items-center h-full"
          >
            <motion.p
              key={currentTextIndex}
              className="font-bold text-lg sm:text-xl md:text-3xl lg:text-4xl text-center bg-clip-text text-transparent bg-gradient-to-b from-red-500 to-blue-400 py-4"
              dangerouslySetInnerHTML={{ __html: slideText[currentTextIndex] }}
            />
          </motion.div>
        </ImagesSlider>
      )}
    </>
  );
}
