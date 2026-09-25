import { useState } from "react";

function SideBar({ totalQuestions = 8, index = 0 }) {
  const [showHelpTooltip, setShowHelpTooltip] = useState(false);

  return (
    <div className="bg-white shadow-sm border border-slate-100 rounded-2xl p-4 md:p-5">
      {/* Header */}
      <div className="Header flex justify-between items-center border-b border-slate-100 pb-3 mb-3 text-sm font-semibold text-slate-600">
        <p>
          Question <span className="text-amber-600 font-bold">{index + 1}</span>
          /{totalQuestions}
        </p>

        <div className="relative inline-block">
          {showHelpTooltip && (
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-max bg-slate-800 text-white text-xs rounded-lg py-1.5 px-3 shadow-md z-10 transition-all duration-200 text-center">
              No :)
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
            </div>
          )}

          <button
            type="button"
            className="text-amber-600 hover:text-amber-700 hover:underline text-xs font-semibold cursor-pointer transition-colors"
            onMouseEnter={() => setShowHelpTooltip(true)}
            onMouseLeave={() => setShowHelpTooltip(false)}
            onClick={() => setShowHelpTooltip((prev) => !prev)}
          >
            Need Help?
          </button>
        </div>
      </div>

      {/* Numbers container */}
      <div className="nums flex flex-wrap justify-center md:grid md:grid-cols-4 gap-2">
        {Array.from({ length: totalQuestions }, (_, i) => {
          const isCurrent = i === index;
          const isPassed = i < index;

          return (
            <div
              key={i}
              className={`w-9 h-9 md:w-auto md:h-auto md:aspect-square flex items-center justify-center rounded-xl font-semibold text-sm transition-all duration-200 ${
                isCurrent
                  ? "bg-amber-500 text-white shadow-sm ring-2 ring-amber-300 scale-105"
                  : isPassed
                    ? "bg-amber-100 text-amber-800"
                    : "bg-slate-100 text-slate-400"
              }`}
            >
              {i + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SideBar;
