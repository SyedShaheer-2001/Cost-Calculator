'use client';

import clsx from 'clsx';
import { Check } from 'lucide-react';

export default function DesignSelectionStep({
  options,
  setDesignHours,
  selectedDesign,
  selectedPlatform,
  setSelectedDesign,
}) {
  const handleSelect = (option) => {
  setSelectedDesign(option.text);

  let hours = 0;

  if (selectedPlatform === 'Android') {
    hours = option.AndroidHours || 0;
  } else if (selectedPlatform === 'IOS') {
    hours = option.IOSHours || 0;
  } else if (selectedPlatform === 'Both') {
    hours = option.BothHours || 0;
  }

  setDesignHours(hours);
};


  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 xl:gap-16 gap-4 sm:mb-24 mb-4">
      {options?.map((option, key) => (
        <div
          key={key}
          onClick={() => handleSelect(option)}
          className={clsx(
            'border rounded-[18px] px-3 py-5 sm:px-6 sm:py-8 flex items-center justify-between cursor-pointer transition hover:border-[#174273]',
            selectedDesign === option.text ? 'borderBlue bg-blue-100' : 'border-[#0000004D]'
          )}
        >
          <div className="flex flex-col gap-2">
            <span className={clsx(
              'text-[15px] sm:text-[23px]',
              selectedDesign === option.text && 'textBlue'
            )}>
              {option.text}
            </span>
            <span className="text-[15px] font-medium text-gray-400">
              +{selectedPlatform === 'Android' && option.AndroidHours}
              {selectedPlatform === 'IOS' && option.IOSHours}
              {selectedPlatform === 'Both' && option.BothHours}hours
            </span>
          </div>

          <div
            className={clsx(
              'w-8 h-8 sm:w-16 sm:h-16 border rounded-full flex items-center justify-center',
              selectedDesign === option.text ? 'borderBlue bgBlue' : 'border-[#0000004D]'
            )}
          >
            {selectedDesign === option.text && (
              <Check size={36} className="text-white" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
