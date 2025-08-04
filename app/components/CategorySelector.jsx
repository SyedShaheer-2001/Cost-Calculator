'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function CategorySelector({ categories, onSelectCategory }) {
  const router = useRouter();

  return (
    <div className="pt-12 max-w-[1440px] mx-auto relative rounded-2xl pb-36">
      {/* Back Button */}
      <div className="absolute top-8 left-6">
        <button
          onClick={() => router.push('/')}
          className="text-sm text-gray-600 hover:underline flex items-center gap-1"
        >
          <ArrowLeft size={16} />
          Back
        </button>
      </div>

      {/* Header and Logo */}
      <div className="flex justify-between items-center">
        <h1 className="text-sm sm:text-xl md:text-2xl font-semibold text-black mx-8 mt-8">
          Choose your Business
        </h1>
        <div className="mx-8 mt-12">
          <img src="/logo-light.png" alt="Logo" className="h-4 sm:h-10 md:h-12" />
        </div>
      </div>

      {/* Category Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:pt-8 pt-8 mx-2 sm:mx-8">
        {Object.entries(categories).map(([name, _]) => (
          <button
            key={name}
            onClick={() => onSelectCategory(name)}
            className="cursor-pointer border border-[#0000004D] py-[20px] sm:px-[52px] px-[5px] rounded-[12px] hover:bg-[#174273] hover:text-white transition text-[12px] sm:text-[18px]"
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
}
