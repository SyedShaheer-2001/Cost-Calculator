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
    <div className="grid grid-cols-1 lg:grid-cols-3 xl:gap-16 gap-4 lg:mb-[130px] mb-4">
      {options?.map((option, key) => (
        <div key={key}  onClick={() => handleSelect(option)}
          className={clsx(
            ' border rounded-[18px] px-4 py-4 sm:px-4 sm:py-4  lg:px-6 lg:py-8 flex items-center justify-between cursor-pointer transition  gradient-border',
            selectedDesign === option.text ? 'border-[#000] bg-gradient text-white' : 'border-[#0000004D]'
          )}
        >
          <div className="flex sm:flex-col gap-2 relative justify-center items-center">
            <span className={clsx(
              'text-[15px] sm:text-[23px]',
              selectedDesign === option.text && ''
            )}>
              {option.text}
            </span>
            <span className="text-[12px] sm:text-[15px] font-medium text-gray-400">
              +{selectedPlatform === 'Android' && option.AndroidHours}
              {selectedPlatform === 'IOS' && option.IOSHours}
              {selectedPlatform === 'Both' && option.BothHours}hours
            </span>
          </div>

          <div
            className={clsx(
              'w-8 h-8 sm:w-16 sm:h-16 border rounded-full flex items-center justify-center',
              selectedDesign === option.text ? 'border-none bg-white ' : 'border-none'
            )}
          >
            {selectedDesign === option.text && (
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
