"use client";
import About from "@/About";
import Contact from "@/Contact";
import Feedback from "@/Feedback";
import HomePage from "@/HomePage";
import PhotoGallery from "@/PhotoGallery";
import Services from "@/Services";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {!loading && (
        <div className=" flex flex-col items-center ">
          <HomePage />
          <About />
          <Services />
          <Feedback />
          <Contact />
          <PhotoGallery />
        </div>
      )}
    </>
  );
}
