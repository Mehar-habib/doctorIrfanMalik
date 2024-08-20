"use client";
import Image from "next/image";
import "@/app/custom.css";
import { useEffect, useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>
      {!loading && (
        <div className="mx-auto" id="Contact">
          <h1 className="text-3xl md:text-4xl font-bold text-center my-6">
            Contact Us
          </h1>

          <div className="flex-wrap lg:flex items-center justify-between shadow-2xl">
            <div className="flex-1">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1rCgHlkOcWTXnY2B85H1pd-PDmWRfJpQ&ehbc=2E312F&noprof=1"
                className="w-[390px] h-[400px] md:w-[750px] md:h-[400px] lg:w-[840px] lg:h-[480px]"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="text-center w-full flex-1 mt-6 sm:mt-0 px-2">
              <div className="text-center">
                <h1 className="md:text-3xl text-xl font-bold pb-2">
                  Niazi Hospital Lahore
                </h1>
                <div className="flex flex-col items-center">
                  <span className="md:text-lg text-base px-4  font-semibold flex items-center">
                    <span className="ping mr-6"></span>
                    Monday: 5:30PM - 8PM
                  </span>
                  <span className="md:text-lg text-base px-4  font-semibold flex items-center">
                    <span className="ping mr-2"></span>
                    Wednesday: 5:30PM - 8PM
                  </span>
                  <span className="md:text-lg text-base px-4 font-semibold flex items-center">
                    <span className="ping mr-6"></span>
                    Friday: 5:30PM - 8PM
                  </span>

                  <span className="md:text-lg text-base px-4 font-semibold flex items-center">
                    <Image
                      src={"/phone.gif"}
                      alt="phone"
                      width={40}
                      height={40}
                      className="mr-5"
                      unoptimized
                    />
                    0333-4367220 | 03344367222
                  </span>

                  <span className="md:text-lg text-base px-4 font-semibold flex items-center mt-1 ">
                    <Image
                      src={"/email.gif"}
                      alt="email"
                      width={40}
                      height={40}
                      className="mr-4"
                      unoptimized
                    />
                    drmirfanmalik@hotmail.com
                  </span>
                </div>
                <h1 className="md:text-2xl text-xl font-bold py-2 mt-2">
                  University of Lahore Teaching Hospital
                </h1>
                <div>
                  <span className="md:text-lg text-base px-4 font-semibold flex items-center justify-center">
                    <span className="ping mr-2"></span>
                    Monday to Saturday: 8AM - 12PM
                  </span>
                </div>
                <h1 className="md:text-2xl text-xl font-bold py-2 mt-2">
                  General Hospital Lahore
                </h1>
                <div className="md:text-lg text-base px-4 pb-2 font-semibold flex items-center justify-center">
                  <span className="ping mr-2"></span>
                  Monday to Saturday: 12PM to 5:30PM
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
