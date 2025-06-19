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
          <p className="text-sm text-designColor tracking-[4px]">2021-2025 in</p>
          <h2 className="text-4xl font-bold">Development Skills</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Python & Django"
            subTitle="I specialize in building powerful and efficient web applications using Python and Django. With Python's versatility and Django’s robust framework, I create secure, scalable, and database-driven sites. From crafting RESTful APIs to integrating user authentication and admin dashboards, I focus on clean code, performance, and a seamless user experience."
            result="Success"
            des=""
        
          />
         <ResumeCard
           title="C++ & Object-Oriented Programming"
           subTitle="I write efficient, high-performance code in C++ with a strong focus on Object-Oriented Programming principles like encapsulation, inheritance, polymorphism, and abstraction. I use C++ to build structured, reusable, and scalable applications—ranging from system-level utilities to simulations and problem-solving algorithms"
           result="Success"
           des=""
           
          />
          <ResumeCard
            title="React & Tailwind CSS Development"
            subTitle="I build responsive and dynamic user interfaces using React. With a strong grasp of components, hooks, and state management, I create seamless front-end experiences that are fast, interactive, and scalable. From single-page applications to fully integrated platforms, I use modern tools like React Router, Tailwind CSS, and APIs to bring designs to life."
            result="Success"
            des=""
          />
           <ResumeCard
            title="JavaScript Development"
            subTitle="I use JavaScript to bring interactivity and dynamic features to the web. From responsive user interfaces to real-time functionality, I build seamless front-end experiences using vanilla JavaScript and modern libraries. Whether it's DOM manipulation, API integration, or event-driven logic, I write clean, efficient, and scalable code that enhances usability."
            result="Success"
            des=""
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">What I learning in </p>
          <h2 className="text-4xl font-bold">Professional Skills</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Problem-Solving"
            subTitle="I approach challenges with a logical mindset, breaking down complex problems into manageable steps to find effective and efficient solutions. This skill helps me deliver reliable and optimized results in my projects."
            result="Success"
            des=""
          />
          <ResumeCard
            title="Teamwork"
            subTitle="Collaborating effectively with diverse teams is a strength of mine. I value open communication, respect different perspectives, and contribute actively to achieve common goals, ensuring projects are completed smoothly and efficiently."
            result="Sccess"
            des=""
          />
          <ResumeCard
            title="Communication"
            subTitle="Clear and concise communication is key to successful development. I prioritize transparency with clients and team members, articulate technical concepts in an understandable way, and maintain consistent updates to foster trust and alignment throughout the project lifecycle."
            result="Success"
            des=""
            />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;