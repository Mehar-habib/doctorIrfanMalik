"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PhotoGallery() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {!loading && (
        <>
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 mt-14">
            Gallery
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
            <div className="md:col-span-2 lg:col-span-2 shadow-xl hover:shadow-2xl rounded-tl-2xl rounded-br-2xl border border-gray-200">
              <Image
                src="/col1.png"
                width={848}
                height={320}
                alt="dfs"
                className="w-full h-full object-cover rounded-tl-2xl rounded-br-2xl transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="shadow-xl hover:shadow-2xl rounded-tr-2xl rounded-bl-2xl border border-gray-200">
              <Image
                src="/col4.png"
                width={416}
                height={320}
                alt="dfs"
                className="w-full h-full object-cover rounded-tr-2xl rounded-bl-2xl transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="shadow-xl hover:shadow-2xl rounded-tr-2xl rounded-bl-2xl border border-gray-200">
              <Image
                src="/p4.png"
                width={416}
                height={320}
                alt="dfs"
                className="w-full h-full object-cover rounded-tr-2xl rounded-bl-2xl transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="md:col-span-2 lg:col-span-2 shadow-xl hover:shadow-2xl rounded-tl-2xl rounded-br-2xl border-2 border-gray-200">
              <Image
                src="/p5.png"
                width={848}
                height={320}
                alt="dfs"
                className="w-full h-full object-cover rounded-tl-2xl rounded-br-2xl transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}
