'use client';
import { ArrowRight } from 'lucide-react';
import clsx from 'clsx';

export default function SelectedOverview({
  selectedPlatform,
  features,
  currentQuestion,
  questions,
  selectedMVP,
  selectedAdditional,
  setCurrentStep,
  // New props for the button
  isDisabled,
  handleLast,
  handleNext,
  currentStep
}) {
  return (
    <>
      <hr className="h-[1.5px] bg-gradient-to-r from-[#b91151] via-[#5a4891] to-[#8a79c5] rounded-full border-0 mt-4 mb-3 " />
      <div className="flex gap-8 text-[10px] sm:text-sm text-white relative">
        {/* Selected Platform */}
        <div className="flex flex-col gap-4">
          <strong className="text-sm lg:text-lg ">Platform:</strong>
          <div>
            {selectedPlatform ? (
              <span className="bg-[#5a4891] text-white sm:text-[13px] sm:px-4 sm:py-2 px-2 py-1 text-[8px] rounded-full">
                {selectedPlatform}
              </span>
            ) : (
              <span className="">Not Selected</span>
            )}
          </div>
        </div>

        {/* Selected Features */}
        {currentQuestion?.id !== 'q0' && (
          <div className="sm:flex flex-col gap-2 max-w-[650px] hidden">
            <strong className="text-sm lg:text-lg">Features:</strong>
            <span className="max-h-[44px] min-h-[44px] overflow-y-auto custom-scrollbar">
              {features && features.size > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {Array.from(features).map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-[#5a4891] text-white sm:text-[13px] sm:px-4 sm:py-2 px-2 py-1 text-[8px] rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              ) : (
                <span className="text-gray-400">Not Selected</span>
              )}
            </span>
          </div>
        )}

        {/* Moved button section */}
        <div className="flex justify-end sm:mb-6 mb-4 mt-2 absolute  right-0 mt-[20px] bottom-[-14px]">
          <button
            className={clsx(
              'sm:px-4 sm:py-3 px-5 py-3 rounded-full text-white transition sm:text-[14px] text-[12px]',
              !isDisabled ? 'bg-gradient cursor-pointer' : 'bg-[#D8216D]/40 cursor-not-allowed bg-gray-400'
            )}
            disabled={isDisabled}
            onClick={() => {
              if (currentStep > questions.length - 2) {
                handleLast(); // Final action
              } else {
                handleNext(); // Proceed to next step
              }
            }}
          >
            <div className='flex flex-row justify-center items-center gap-2'>
              <p>Save and continue</p>
              <ArrowRight size={20} />
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
