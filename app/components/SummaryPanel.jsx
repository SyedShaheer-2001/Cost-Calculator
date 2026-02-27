'use client';

export default function SummaryPanel({ totalHours }) {
  const nonDevHours = Math.floor(totalHours / 2.7);
  const summaryTime = parseFloat((totalHours + nonDevHours).toFixed(1));

  return (
    <div className="flex lg:flex-col flex-row gap-4 w-full lg:w-[250px] pb-4">
      {/* Summary Time */}
      <div className="w-full bg-gradient text-white rounded-[18px] flex flex-col justify-center items-start sm:p-8 shadow-xl">
        <p className="text-[10px] sm:text-[15px] md:text-xl ml-4 sm:ml-2">Summary time</p>
        <p className="text-[15px] sm:text-xl md:text-2xl font-bold ml-4 sm:ml-2">{summaryTime}h</p>
      </div>

      {/* Development Time */}
      <div className="w-full rounded-[18px] p-4 sm:p-8 shadow-xl border-2 gradient-border relative overflow-hidden">
        <p className="text-[10px] sm:text-[15px] md:text-xl text-white relative z-10">Development time</p>
        <p className="text-[13px] sm:text-xl md:text-2xl text-white relative z-10">{totalHours}h</p>
      </div>

      {/* Non-Dev Time */}
      <div className="w-full rounded-[18px] flex flex-col justify-center items-start sm:p-8 shadow-xl border-2 gradient-border relative overflow-hidden">
        <p className="text-[10px] sm:text-[15px] md:text-xl text-white ml-4 sm:ml-2">Non-dev time</p>
        <p className="text-[13px] sm:text-xl md:text-2xl  text-white ml-4 sm:ml-2">{nonDevHours}h</p>
      </div>
    </div>
  );
}
