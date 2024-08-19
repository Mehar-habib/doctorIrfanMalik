"use client";
import { useEffect, useState } from "react";
import { AnimatedTooltip } from "./components/ui/animated-tooltip";
import { WavyBackground } from "./components/ui/wavy-background";

interface Instructor {
  id: number;
  name: string;
  designation: string;
  image: string;
}

const instructors: Instructor[] = [
  {
    id: 1,
    name: "Dr. Emily Carter",
    designation: "Professor of Computer Science",
    image: "/tooltip1.jpg",
  },
  {
    id: 2,
    name: "Foto Sushi",
    designation: "Senior Lecturer in Mathematics",
    image: "/tooltip6.jpg",
  },
  {
    id: 3,
    name: "Dr. Lisa Nguyen",
    designation: "Associate Professor of Physics",
    image: "/tooltip2.jpg",
  },
  {
    id: 4,
    name: "Michael Brown",
    designation: "Instructor of Chemistry",
    image: "/tooltip3.jpg",
  },
  {
    id: 5,
    name: "Sara Wilson",
    designation: "Lecturer in Biology",
    image: "/tooltip4.jpg",
  },
  {
    id: 6,
    name: "Dr. David Lee",
    designation: "Assistant Professor of Engineering",
    image: "/tooltip5.jpg",
  },
];

function Footer() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>
      {!loading && (
        <>
          <h1 className="text-4xl md:text-4xl font-bold text-center my-12"></h1>
          <div className="relative h-[384px] overflow-hidden flex items-center justify-center">
            <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
              <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
                Meet Our Teams
              </h2>
              <p className="text-base md:text-lg text-white text-center mb-4">
                Discover the talented pulmonologists who will guide your journey
                to better respiratory health.
              </p>
              <div className="flex flex-row items-center justify-center mb-10 w-full-">
                <AnimatedTooltip items={instructors} />
              </div>
            </WavyBackground>
          </div>
          <div className="flex items-center justify-center text-sm font-semibold bg-gray-900 text-gray-100 ">
            <div>&copy; 2024 Habib-ur-Rehman. All rights reserved.</div>
          </div>
        </>
      )}
    </>
  );
}

export default Footer;
