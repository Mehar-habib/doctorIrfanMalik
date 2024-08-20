"use client";
import { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "Prof. Dr. Irfan Malik was very helpful in answering my concerns and answering questions related to possible causes of my condition and also helping out with prescriptions. ",
    name: "M. Danyial",
    image: "/user.png",
  },
  {
    quote:
      "A warm visit, with quick resolution of issues and immediate clarification of the arrangements. I had a great experience at Dr. Mohammad Irfan Malik’s practice.",
    name: "M*** ***t",
    image: "/user.png",
  },
  {
    quote:
      "Dr Irfan Malik understands the problem of a patient and explains the problem in the best way anyone can understand. Thanks Doctor.",
    name: "H*** ***i",
    image: "/user.png",
  },
  {
    quote:
      "Prof. Dr. Irfan Malik understands the problem of a patient and explains the problem in the best way anyone can understand. Thanks Doctor.",
    name: "Habib-ur-Rehman",
    image: "/habib.png",
  },
  {
    quote:
      "Very successful doctor in the town. Strongly recommended for his knowledge, skills, expertise, and experience. Super knowledgeable, making me feel comfortable and cared for. I highly recommend.",
    name: "M*** ***r",
    image: "/user.png",
  },
  {
    quote:
      "Dr. Irfan Malik is extremely knowledgeable and kind. He understands the patient's problem and explains it in a way that is easy to understand. I am definitely going to see him again. Thanks, Doctor.",
    name: "D*** ***d",
    image: "/user.png",
  },
];

function Feedback() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>
      {!loading && (
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 mt-14">
            FeedBack
          </h1>

          <div className=" rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Feedback;
