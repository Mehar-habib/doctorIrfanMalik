"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import data from "@/pulmo.json"; // Adjust the import path based on where your JSON file is located

export default function Services() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>
      {!loading && (
        <div className="mx-auto" id="Services">
          <h1 className="text-3xl md:text-4xl font-bold text-center my-12">
            Services
          </h1>
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-6">
            {data.map((item) => (
              <div
                key={item.id}
                className="card shadow-md hover:shadow-2xl dark:shadow-slate-600 dark:shadow-md relative overflow-hidden  transition-transform duration-300 transform hover:scale-105 "
              >
                <div className="relative w-full h-64">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    // width={400}
                    // height={256}
                    // objectFit="cover"
                  />
                </div>
                <div className="card__content p-4 bg-white dark:bg-gray-900 dark:text-white">
                  <h2 className="text-xl font-bold">{item.title}</h2>
                  <p className="text-gray-600 dark:text-white">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
