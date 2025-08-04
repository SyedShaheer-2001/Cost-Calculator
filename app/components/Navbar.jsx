'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // or any icon library

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white relative z-50 ">
      <Link href="/"><div className="text-xl font-bold">COST-CALCULATOR</div></Link> 

      {/* Hamburger icon (mobile only) */}
      <button
        className="lg:hidden block"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Nav Links - hidden on small screens */}
      <ul className="hidden lg:flex text-gray-700 font-medium text-[18px]">
        <div className="flex xl:gap-[26px] gap-[26px] items-center">
         
          <li><Link href="#">Services</Link></li>
          <li><Link href="#">Industries</Link></li>
          <li><Link href="#">Expertise</Link></li>
          <li><Link href="#">Company</Link></li>
          <li><Link href="#">Portfolio</Link></li>
          <li><Link href="#">Blog</Link></li>
          <li>
            <Link href="#">
              <button className="bgPink text-white px-[20px] py-[13px] rounded-[100px] text-[18px] cursor-pointer hover:bg-blue-700 font-[500px]">
                Contact us
              </button>
            </Link>
          </li>
        </div>
      </ul>

      {/* Mobile menu (dropdown) */}
      {menuOpen && (
        <ul className="lg:hidden absolute top-full left-0 w-full bg-white px-6 py-4 shadow-md flex flex-col gap-4 text-gray-700 font-medium text-[18px]">
          <li><Link href="/pricing">Pricing</Link></li>
          <li><Link href="#">Services</Link></li>
          <li><Link href="#">Industries</Link></li>
          <li><Link href="#">Expertise</Link></li>
          <li><Link href="#">Company</Link></li>
          <li><Link href="#">Portfolio</Link></li>
          <li><Link href="#">Blog</Link></li>
          <li>
            <Link href="#">
              <button className="bgPink text-white px-[23px] py-[14px] rounded-[100px] text-[18px] cursor-pointer hover:bg-blue-700 w-full">
                Contact us
              </button>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
