import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">What I Do</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B-Tech in Computer Science and Engineering AI & ML (2023 - 2027)"
            subTitle="Sister Nivedita University Form kolkata"
            result="CGP:8.04"
            des="It is the training provided by universities or institutions to prepare individuals for employment in various sectors of the economy or cultural fields."
          />
          <ResumeCard
            title="Secondary School Education (2021 - 2023)"
            subTitle="Chakdaha Ramlal Academy Form Nadia"
            result="Marks:89%"
            des="econdary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
        </div>
    
      </div>
    </motion.div>
  );
}

export default Education