'use client';

export default function SummaryPanel({ totalHours }) {
  const nonDevHours = Math.floor(totalHours / 2.7);
  const summaryTime = totalHours + nonDevHours;

  return (
    <div className="flex sm:flex-col flex-row gap-4 w-full lg:w-[220px]">
      {/* Summary Time */}
      <div className="bgBlue text-white rounded-[18px] p-4 sm:p-8 shadow-xl">
        <p className="text-[10px] sm:text-sm">Summary time</p>
        <p className="text-[15px] sm:text-xl font-bold">{summaryTime}h</p>
      </div>

      {/* Development Time */}
      <div className="rounded-[18px] p-4 sm:p-8 shadow-xl">
        <p className="text-[10px] sm:text-sm text-gray-600">Development time</p>
        <p className="text-[13px] sm:text-xl font-semibold">{totalHours}h</p>
      </div>

      {/* Non-Dev Time */}
      <div className="rounded-[18px] p-4 sm:p-8 shadow-xl">
        <p className="text-[10px] sm:text-sm text-gray-600">Non-dev time</p>
        <p className="text-[13px] sm:text-xl font-semibold">{nonDevHours}h</p>
      </div>
    </div>
  );
}
