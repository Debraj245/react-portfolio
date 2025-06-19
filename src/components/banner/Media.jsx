import React from 'react'
import { FaInstagram, FaGithubAlt, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiDjango, SiNextdotjs } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
       <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
              Find me in
             </h2>
                <div className="flex gap-4">
                   <a
             href="https://www.instagram.com/debraj_ganguly_/"
               target="_blank"
                rel="noopener noreferrer"
                   className="bannerIcon"
                  >
                <FaInstagram />
             </a>
           <a
      href="https://github.com/Debraj245"
      target="_blank"
      rel="noopener noreferrer"
      className="bannerIcon"
    >
      <FaGithubAlt />
    </a>
    <a
      href="https://www.linkedin.com/in/debraj-ganguly-47194227b/"
      target="_blank"
      rel="noopener noreferrer"
      className="bannerIcon"
    >
      <FaLinkedinIn />
    </a>
  </div>
</div>

        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiDjango />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media