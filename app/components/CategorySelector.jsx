'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaSpotify, FaPeriscope, FaAirbnb, FaSnapchatGhost, FaWhatsapp, FaUber, FaSnapchat  } from "react-icons/fa";
import { RiNetflixFill, RiInstagramFill } from "react-icons/ri";
import { LiaUber } from "react-icons/lia";
import { IoMdAddCircle } from "react-icons/io";

export default function CategorySelector({ categories, onSelectCategory, onBack, type  }) {
  const router = useRouter(); 
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

const categoryIcons = {
  'Uber': <FaUber size={42} />,
  'Uber For Drivers': <LiaUber  size={42} />,
  'Netflix': <RiNetflixFill size={42} />,
  'WhatsApp': <FaWhatsapp size={42} />,
  'Spotify': <FaSpotify size={42} />,
  'Periscope': <FaPeriscope  size={42} />,
 // '+ Add': <IoMdAddCircle size={42} />,
  'Airbnb': <FaAirbnb size={42} />,
  'Snapchat': <FaSnapchat  size={42} />,
  'Instagram': <RiInstagramFill size={42} />,
};

const categoryHoverStyles = {
  'Uber': 'hover:bg-black hover:text-white',
  'Netflix': 'hover:bg-[#e50914] hover:text-white',
  'WhatsApp': 'hover:bg-[#25D366] hover:text-white',
  'Spotify': 'hover:bg-[#1DB954] hover:text-white',
  'Periscope': 'hover:bg-[#40a4c4] hover:text-[#EE4737]',
  '+ Add': 'hover:bg-[#cccccc] hover:text-black',
  'Airbnb': 'hover:bg-[#FF5A5F] hover:text-white',
  'Snapchat': 'hover:bg-[#FFFC00] hover:text-black',
  'Instagram': 'hover:bg-gradient-to-r hover:from-[#feda75] hover:via-[#d62976] hover:to-[#4f5bd5] hover:text-white',
};


  return (
    <div className="pt-12 max-w-[1540px] mx-auto relative rounded-2xl pb-32 px-4 shadow-2xl min-h-36">
      {/* Back Button */}
      <div className="absolute top-8 left-6">
        <button
           onClick={onBack}
          className="text-sm text-gray-600 hover:underline flex items-center gap-1"
        >
          <ArrowLeft size={16} />
          Back
        </button>
      </div>

      {/* Header and Logo */}
      <div className="flex justify-between items-center">
        <h1 className="text-sm sm:text-xl  md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-black mx-8 mt-8">
          {type === 'existing' ? 'Choose Application' : 'Choose your Business'}
        </h1>
        {/* <div className="mx-8 mt-12">
          <img src="/logo-light.png" alt="Logo" className="h-4 sm:h-10 md:h-12" />
        </div> */}
      </div>

      {/* Category Buttons */}
      {isLoading ? (
        <>
          <div className="flex flex-col justify-center items-center mt-16 bg-white min-h-60">
            <div className="w-12 h-12 border-4 border-blue-300 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-xl text-gray-700 mt-4">Loading Categories, please wait...</p>
          </div>

        </>
      ) : (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:pt-8 pt-8 mx-2 sm:mx-8">
  {Object.entries(categories).map(([name, _]) => {
    const isExisting = type === 'existing';
    const icon = categoryIcons[name];
    const hoverClasses = isExisting
      ? categoryHoverStyles[name] || 'hover:bg-[#444] hover:text-white'
      : 'hover:bg-[#174273] hover:text-white';

    return (
      <button
        key={name}
        onClick={() => onSelectCategory(name)}
        className={`cursor-pointer border border-[#0000004D] py-[20px] sm:px-[52px] px-[5px] text-[15px] sm:text-[20px] 2xl:text-[24px] bg-white rounded-[12px] transition flex justify-center items-center gap-3 ${hoverClasses}`}
      >
        {isExisting ? (
          <div className="flex items-center gap-2">
            {icon && <span>{icon}</span>}
            <span>{name}</span>
          </div>
        ) : (
          name
        )}
      </button>
    );
  })}
</div>

        </>
      )}
    </div>
  );
}
