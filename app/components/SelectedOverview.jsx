'use client';

export default function SelectedOverview({ selectedPlatform, features, currentQuestion }) {
  return (
    <>
      <hr className="mb-4 gray-text" />
      <div className="flex gap-8 text-[10px] sm:text-sm text-gray-600">
        {/* Selected Platform */}
        <div className="flex flex-col gap-4">
          <strong>Platform:</strong>
          <div>
            {selectedPlatform ? (
              <span className="bg-[rgba(23,66,115,0.6)] text-white sm:text-sm sm:px-4 sm:py-2 px-2 py-1 text-[8px] rounded-full">
                {selectedPlatform}
              </span>
            ) : (
              <span className="text-gray-400">Not Selected</span>
            )}
          </div>
        </div>

        {/* Selected Features */}
        {currentQuestion?.id !== 'q0' && (
          <div className="flex flex-col gap-2">
            <strong>Features:</strong>
            <span className="max-h-20 overflow-y-auto">
              {features && features.size > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {Array.from(features).map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-[rgba(23,66,115,0.6)] text-white sm:text-sm sm:px-4 sm:py-2 px-2 py-1 text-[8px] rounded-full"
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
      </div>
    </>
  );
}
