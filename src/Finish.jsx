import Button from "./Components/Button";

function Finish({ totalScore, fullScore, dispatch }) {
  const percentage = Math.round((totalScore / fullScore) * 100);
  let emoji;
  let title;
  if (percentage === 100) {
    emoji = "🥇";
    title = "Excellent, Nice Job!";
  } else if (percentage >= 80) {
    emoji = "🎉";
    title = "Very Good";
  } else if (percentage >= 50) {
    emoji = "👍";
    title = "Good, Nice try";
  } else {
    emoji = "💡";
    title = "Failed , Please try again!";
  }

  return (
    <div className="flex justify-center items-center mt-12">
      <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm text-center max-w-md w-full flex flex-col items-center gap-5">
        <span className="text-6xl">{emoji}</span>

        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-1">{title}</h2>
          <p className="text-slate-500 font-medium text-sm">
            The exam has finished
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 w-full">
          <p className="text-slate-700 font-semibold text-lg">
            You got{" "}
            <span className="text-amber-600 font-bold">{totalScore}</span>/
            <span className="font-bold">{fullScore}</span>
          </p>
          <p className="text-amber-700 font-bold text-sm mt-1">
            Percentage: {percentage}%
          </p>
        </div>

        <Button
          onClick={() => dispatch({ type: "restart" })}
          className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2.5 px-6 rounded-xl transition-all shadow-sm cursor-pointer w-full"
        >
          Try again
        </Button>
      </div>
    </div>
  );
}

export default Finish;
