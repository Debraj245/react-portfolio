import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">What i do in 2025</p>
          <h2 className="text-4xl font-bold">My Certificates</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Introduction to Generative AI"
            subTitle="Authorized by : Google Cloud Form Coursera"
            result="Success"
            des="This course introduces the basics of Generative AI, covering how models like language models and diffusion models generate content, and how they are trained."
            link="https://coursera.org/share/435c2d944d89a5fe8edeffa11ceb4d08"
          />
         <ResumeCard
           title="Algorithms for Searching, Sorting, and Indexing"
           subTitle="University of Colorado Boulder from Coursera"
           result="Success"
           des="This course covers classic algorithms related to searching, sorting, and indexing data efficiently â€” foundational topics for data structures and algorithmic problem solving."
           link="https://coursera.org/share/aa069ee743f64015a50edbdbe88fc254"
          />
          <ResumeCard
            title="Generative Al: Introduction and Applications"
            subTitle="Authorized by : IBM Form Coursera"
            result="Success"
            des="Generative AI is a type of artificial intelligence that creates new content like text, images, or music by learning from existing data. It is used in many fields such as art, healthcare, and entertainment."
            link="https://coursera.org/share/7a2ba87d6c0a69f5fd94bba5de59cb15"
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2> </h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Google AI Essentials"
            subTitle="Authorized by : Google Form Coursera"
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
            link="https://coursera.org/share/ce3e9732b3a0d54e30147f29c15656c7"
          />
          <ResumeCard
            title=""
            subTitle=""
            result="Prosses"
            des=""
          />
          <ResumeCard
            title=""
            subTitle=""
            result="Prosses"
            des=""
            />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;