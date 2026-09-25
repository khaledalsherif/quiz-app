import Button from "./Components/Button";

function Welcome({ dispatch }) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-100 p-4">
      <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm text-center max-w-md w-full flex flex-col items-center gap-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 mb-1">Welcome!</h1>
          <p className="text-slate-500 font-medium">Are you ready?</p>
        </div>

        <div className="flex items-center gap-3 w-full justify-center">
          <Button
            onClick={() => dispatch({ type: "start" })}
            className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2.5 px-6 rounded-xl transition-all shadow-sm cursor-pointer"
          >
            Let's go!
          </Button>

          <Button
            onClick={() => alert("Go to Sleep 😴")}
            className="bg-slate-100 hover:bg-slate-200 text-slate-600 font-semibold py-2.5 px-6 rounded-xl transition-all cursor-pointer"
          >
            No
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
