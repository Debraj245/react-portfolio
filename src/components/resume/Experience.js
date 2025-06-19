import React from "react";
import {motion} from "framer-motion"
//import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
          <p>Currently building experience through personal projects and learning new technologies</p>
      </div>
      </div>
    </motion.div>
  );
};

export default Experience;