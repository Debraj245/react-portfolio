import React from 'react';
import { debrajImg } from '../../assets';

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <div className="absolute bottom-0 w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne rounded-xl"></div>
      
      <img
        className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lgl:w-[500px] lgl:h-[500px] object-cover rounded-xl z-10"
        src={debrajImg}
        alt="Debraj"
      />
    </div>
  );
};

export default RightBanner;