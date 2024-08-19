"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const videos = [
  {
    id: 1,
    title: "Obstructive Sleep Apnea - Unhealthy Snoring is major Symptom",
    videoLink:
      "https://www.youtube.com/watch?v=_vVV8MyMgkk&pp=ygUSZG9jdG9yIGlyZmFuIG1hbGlr",
    image: "/screenshot1.png",
  },
  {
    id: 2,
    title: "Smog an Invisible Killer by Dr Irfan Malik",
    videoLink:
      "https://www.youtube.com/watch?v=djUECF1c7hk&t=90s&pp=ygUSZG9jdG9yIGlyZmFuIG1hbGlr",
    image: "/screenshot2.png",
  },
  {
    id: 3,
    title: "Why Asthma Sufferers Should be Concerned About Coronavirus",
    videoLink:
      "https://www.youtube.com/watch?v=VsQ7XdwJWv8&t=11s&pp=ygUSZG9jdG9yIGlyZmFuIG1hbGlr",
    image: "/screenshot3.png",
  },
  {
    id: 4,
    title: "What Is Asthma? | Symptoms, Causes & Treatment",
    videoLink:
      "https://www.youtube.com/watch?v=LC_n_Mvagw4&pp=ygUSZG9jdG9yIGlyZmFuIG1hbGlr",
    image: "/screenshot4.png",
  },
  {
    id: 5,
    title:
      "Covid 2nd wave and new Strain of corona virus by Dr.Irfan Malik Associate Professor Pulmonology LGH",
    videoLink:
      "https://www.youtube.com/watch?v=C8ojCwzBhzA&pp=ygUSZG9jdG9yIGlyZmFuIG1hbGlr",
    image: "/screenshot5.png",
  },
  {
    id: 6,
    title:
      "How to Sleep Better? Tips for Deep Sleep - Prof. Dr. Mohammad Irfan Malik with Shams Ul Haq",
    videoLink:
      "https://www.youtube.com/watch?v=3sxMuTHDPZ0&pp=ygUSZG9jdG9yIGlyZmFuIG1hbGlr",
    image: "/screenshot6.png",
  },
  {
    id: 7,
    title: "Sleep Apnea Syndrome by Dr M Irfan Malik",
    videoLink:
      "https://www.youtube.com/watch?v=MoHunUemNPo&pp=ygUSZG9jdG9yIGlyZmFuIG1hbGlr",
    image: "/screenshot7.png",
  },
  {
    id: 8,
    title: "New Global Updates in Asthma Management by Prof. Irfan Malik",
    videoLink:
      "https://www.youtube.com/watch?v=fU1RjhVbInQ&pp=ygUSZG9jdG9yIGlyZmFuIG1hbGlr",
    image: "/screenshot8.png",
  },
  {
    id: 9,
    title:
      "Global Strategy for Asthma Management and Prevention by Prof. Dr. M. Irfan Malik",
    videoLink:
      "https://www.youtube.com/watch?v=O1qFaAyX4Bk&pp=ygUSZG9jdG9yIGlyZmFuIG1hbGlr",
    image: "/screenshot9.png",
  },
];

export default function Blogs() {
  return (
    <div className="min-h-screen p-4 flex flex-col items-center">
      <div className="w-full max-w-screen-xl">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold py-5">Videos</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <a
              key={video.id}
              href={video.videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="m-2 shadow-xl dark:shadow-slate-600 dark:shadow-md h-[350px] flex flex-col cursor-pointer rounded-md overflow-hidden">
                <div className="flex-1">
                  <Image
                    src={video.image}
                    alt={video.title}
                    width={640}
                    height={360}
                    className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
                  />
                </div>
                <p className="p-2 text-center font-semibold">{video.title}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="w-full max-w-screen-xl mt-12">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold py-5">
            Frequently Asked Questions
          </h1>
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-bold">
              How to book an appointment with Prof. Dr. Irfan Malik?
            </AccordionTrigger>
            <AccordionContent>
              You can also call at <span>0333-43-67-220 | 0334-43-76-222</span>{" "}
              from 1PM to 6PM to book an appointment with Prof. Dr. Irfan Malik.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-bold">
              What is the fee of Prof. Dr. Irfan Malik?
            </AccordionTrigger>
            <AccordionContent>
              Prof. Dr. Irfan Malik fee is <span>Rs. 2000</span>.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-bold">
              What is the education of Prof. Dr. Irfan Malik?
            </AccordionTrigger>
            <AccordionContent>
              Prof. Dr. Irfan Malik has the following degrees: MBBS, FCPS
              (Pulmonology), FRCP (Glasgow), CMT (UHS), European Diplomate In
              Adult Respiratory Medicine.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="font-bold">
              What is the feedback of Prof. Dr. Irfan Malik?
            </AccordionTrigger>
            <AccordionContent>
              99% of users had a positive experience with Prof. Dr. Mohammad
              Irfan Malik.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="font-bold">
              What common health conditions are treated by Assoc. Prof. Dr.
              Mohammad Irfan Malik?
            </AccordionTrigger>
            <AccordionContent>
              Prof. Dr. Mohammad Irfan Malik regularly addresses patients
              conditions and health issues related to pulmonology. You may
              consult Prof. Dr. Mohammad Irfan Malik by specifying the reasons
              for your visit.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="font-bold">
              What is Prof. Dr. Irfan Malik specialty and area of expertise?
            </AccordionTrigger>
            <AccordionContent>
              Dr. Mohammad Irfan Malik is a specialist pulmonologist. His areas
              of expertise include Allergic Rhinitis, Invasive Ventilation,
              Pneumonia After Acute Stage, Cough With Viscous Sputum, Allergy,
              Chronic Obstructive Pulmonary Disease, Allergies To Industrial And
              Household, Cystic Fibrosis, Rhinitis And Respiratory Allergies,
              and Mucosal Edema.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
