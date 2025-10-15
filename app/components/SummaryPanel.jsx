'use client';

export default function SummaryPanel({ totalHours }) {
  const nonDevHours = Math.floor(totalHours / 2.7);
  const summaryTime = parseFloat((totalHours + nonDevHours).toFixed(1));

  return (
    <div className="flex md:flex-col flex-row gap-4 w-full lg:w-[250px] pb-4">
      {/* Summary Time */}
      <div className="bgBlue text-white rounded-[18px] p-4 sm:p-8 shadow-xl">
        <p className="text-[10px] sm:text-[15px] md:text-xl">Summary time</p>
        <p className="text-[15px] sm:text-xl md:text-2xl font-bold">{summaryTime}h</p>
      </div>

      {/* Development Time */}
      <div className="rounded-[18px] p-4 sm:p-8 shadow-xl">
        <p className="text-[10px] sm:text-[15px] md:text-xl text-gray-600">Development time</p>
        <p className="text-[13px] sm:text-xl md:text-2xl font-semibold">{totalHours}h</p>
      </div>

      {/* Non-Dev Time */}
      <div className="rounded-[18px] p-4 sm:p-8 shadow-xl">
        <p className="text-[10px] sm:text-[15px] md:text-xl text-gray-600">Non-dev time</p>
        <p className="text-[13px] sm:text-xl md:text-2xl font-semibold">{nonDevHours}h</p>
      </div>
    </div>
  );
}
