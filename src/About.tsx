"use client";
import Image from "next/image";
import "@/app/custom.css";
import { useEffect, useState } from "react";

export default function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {!loading && (
        <div id="About" className="p-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center my-12 ">
            About
          </h1>
          <div className="flex flex-wrap items-center justify-between p-2">
            <div className="w-full md:w-auto order-2 md:order-1 max-w-3xl">
              <p className="md:text-lg pb-6 md:pb-0">
                <span className="text-6xl">Hi👋</span>, I&apos;m Prof. Dr.
                Mohammad Irfan Malik. My qualifications include
                <span className="bg-yellow-200 dark:text-black font-semibold px-2 rounded-sm">
                  MBBS, FCPS (Pulmonology), FRCP (Glasg), CMT (UHS), and FCCP
                  (USA)
                </span>
                . I am also a
                <span className="bg-yellow-200 dark:text-black font-semibold px-2 rounded-sm">
                  European Diplomate in Respiratory Medicine (Adult)
                </span>
                . My expertise includes the diagnosis and treatment of lung
                diseases such as bronchitis, cystic fibrosis, and asthma. With
                over
                <span className="bg-yellow-200 dark:text-black font-semibold px-2 rounded-sm">
                  20+
                </span>
                years of experience, I focus on personalized treatment plans for
                patients of all age groups. I am recognized as one of the top
                pulmonologists in Lahore, serving as Professor & Head of the
                Department of Pulmonary, Critical Care & Sleep Medicine at The
                University of Lahore, and Director of the Sleep Research Lab at
                the University College of Medicine & Dentistry. I am also an
                Interventional Pulmonologist, Intensivist, and Sleep Specialist.
              </p>
            </div>
            <div className="w-full md:w-auto order-1 md:order-2 my-6 md:mb-0 flex  justify-center">
              <Image
                src={"/malik.png"}
                alt="Prof. Dr. Mohammad Irfan Malik"
                width={400}
                height={400}
                className="img animate-bounce md:animate-none "
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
