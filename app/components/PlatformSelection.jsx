'use client';

import { Check } from 'lucide-react';
import clsx from 'clsx';

export default function PlatformSelection({ options = [], selectedPlatform, onSelect }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 xl:gap-16 gap-4 sm:mb-24 mb-4">
      {options.map((platform, key) => (
        <div
          key={key}
          onClick={() => onSelect(platform.text)}
          className={clsx(
            'border rounded-[18px] px-3 py-5 sm:px-6 sm:py-8 flex items-center justify-between cursor-pointer transition hover:border-[#174273]',
            selectedPlatform === platform.text
              ? 'borderBlue bg-blue-100'
              : 'border-[#0000004D]'
          )}
        >
          <span className={clsx(
            'text-[15px] sm:text-[23px] font-medium',
            selectedPlatform === platform.text && 'textBlue'
          )}>
            {platform.text}
          </span>

          {/* Check Circle */}
          <div
            className={clsx(
              'w-8 h-8 sm:w-16 sm:h-16 border rounded-full flex items-center justify-center transition-all duration-200',
              selectedPlatform === platform.text
                ? 'borderBlue bgBlue'
                : 'border-[#0000004D]'
            )}
          >
            {selectedPlatform === platform.text && (
              <Check size={36} className="text-white" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
