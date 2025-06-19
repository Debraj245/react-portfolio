import React from 'react'
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { togetherImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={togetherImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Let's work together</h3>
        <p className="text-lg font-normal text-gray-400">
          
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        Feel free to reach out for collaboration opportunities or any queries!
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 8167280461</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">debrajganguly8167@gmail.com</span>
        </p>
      </div>
      <div>
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
      <FaGithub />
    </a>
    <a
      href="https://www.linkedin.com/in/debraj-ganguly-47194227b/"
      target="_blank"
      rel="noopener noreferrer"
      className="bannerIcon"
    >
      <FaLinkedin />
    </a>
  </div>
        </div>
      </div>
            
  );
}

export default ContactLeft