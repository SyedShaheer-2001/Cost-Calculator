'use client';

import { Check } from 'lucide-react';
import clsx from 'clsx';

export default function PlatformSelection({ options = [], selectedPlatform, onSelect }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 xl:gap-16 gap-4 lg:mb-[130px] mb-4">
      {options.map((platform, key) => (
        <div
          key={key}
          onClick={() => onSelect(platform.text)}
          className={clsx(
            'border rounded-[18px] px-4 py-4 sm:px-4 sm:py-4  lg:px-6 lg:py-8 flex items-center justify-between cursor-pointer transition  gradient-border',
            selectedPlatform === platform.text
              ? 'border-[#000] bg-gradient text-white'
              : 'border-[#0000004D]'
          )}
        >
          <span className={clsx(
            'text-[15px] sm:text-[23px]',
            selectedPlatform === platform.text && ''
          )}>
            {platform.text}
          </span>

          {/* Check Circle */}
          <div
            className={clsx(
              'w-8 h-8 sm:w-16 sm:h-16 border rounded-full flex items-center justify-center transition-all duration-100',
              selectedPlatform === platform.text
                ? 'border-none bg-white'
                : 'border-none'
            )}
          >
            {selectedPlatform === platform.text && (
              <>
              <Check size={36} strokeWidth={5}  className="text-[#5a4891] hidden sm:block" />
              <Check size={24} strokeWidth={5} className="sm:hidden text-[#5a4891]" />
              </>
              
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
