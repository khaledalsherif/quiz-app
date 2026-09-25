function Options({ options, dispatch, answer, correctOptionIndex }) {
  const hasAnswered = answer !== null;

  return (
    <div className="grid gap-2.5">
      {options.map((opt, index) => {
        const isSelected = answer === index;
        const isCorrect = index === correctOptionIndex;

        let statusStyle =
          "bg-slate-50 text-slate-700 border-slate-200 hover:bg-amber-50 hover:border-amber-300";

        if (hasAnswered) {
          if (isCorrect) {
            statusStyle =
              "bg-emerald-50 text-emerald-900 border-emerald-400 font-medium";
          } else if (isSelected) {
            statusStyle =
              "bg-rose-50 text-rose-900 border-rose-400 font-medium";
          } else {
            statusStyle = "bg-gray-50 text-gray-400 border-gray-200 opacity-50";
          }
        }

        return (
          <button
            key={index}
            disabled={hasAnswered}
            onClick={() => dispatch({ type: "answerSelected", payload: index })}
            className={`w-full text-center rounded-xl px-4 py-3 text-sm transition-all border duration-150 shadow-sm cursor-pointer disabled:cursor-not-allowed ${statusStyle}`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

export default Options;
