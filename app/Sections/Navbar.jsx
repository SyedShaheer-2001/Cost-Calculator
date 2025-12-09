'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import navLogo from '../../public/myGallery/navLogo.png';
import Image from 'next/image';

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    scrollToSection(id);
    setMenuOpen(false); // closes mobile menu
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4  relative z-50 max-w-[1300px] mx-auto">
      <Link href="/"><div className="">
        <Image 
            src={navLogo} 
            alt="Logo" 
            className="h-12 w-auto" // tailwind classes for styling
          />
        </div></Link>

      {/* Hamburger icon (mobile only) */}
      <button
        className="lg:hidden block"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Desktop nav */}
      <ul className="hidden lg:flex text-gray-700 text-[15px]">
        <div className="flex xl:gap-[35px] gap-[28px] items-center text-[#FBFBF8]">
          {/* <li className='cursor-pointer'><button  className='cursor-pointer' onClick={() => handleScroll('content')}>Content</button></li> */}
          <li className='cursor-pointer'><button  className='cursor-pointer font-thin nav-item' onClick={() => handleScroll('testimonial')}>TESTIMONIAL</button></li>
          <li className='cursor-pointer'><button  className='cursor-pointer font-thin nav-item' onClick={() => handleScroll('benefits')}>BENEFITS</button></li>
         <li className='cursor-pointer'><button  className='cursor-pointer font-thin nav-item' onClick={() => handleScroll('faq')}>FAQ</button></li>
          {/* <li className='cursor-pointer'><button  className='cursor-pointer' onClick={() => handleScroll('cta')}>CTA</button></li> */}
          
          <li>
            <button
              onClick={() => handleScroll('cta')}
              className="bgPinkGradient py-3 px-8 sm:px-10 rounded-full text-white font-semibold text-[15px] hover:opacity-90 transition cursor-pointer"
            >
              Contact us
            </button>
          </li>
        </div>
      </ul>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="lg:hidden absolute top-full left-0 w-full bg-white px-6 py-4 shadow-md flex flex-col gap-4 text-gray-700 font-medium text-[18px]">
          {/* <li><button onClick={() => handleScroll('content')}>Content</button></li> */}
          {/* <li><button onClick={() => handleScroll('cta')}>CTA</button></li> */}
          <li><button onClick={() => handleScroll('testimonial')}>Testimonial</button></li>
          <li><button onClick={() => handleScroll('benefits')}>Benefits</button></li>
          <li><button onClick={() => handleScroll('faq')}>FAQ</button></li>
          
          
          <li>
            <button
              onClick={() => handleScroll('cta')}
              className="bgPinkGradient hover:bg-black text-white px-[23px] py-[14px] rounded-[100px] text-[18px] cursor-pointer hover:bg-blue-700 w-full"
            >
              Contact us
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
