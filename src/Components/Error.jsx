import Button from "./Button";
function Error({
  details = "Failed to fetch quiz data. Please check your connection and try again.",
}) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-100 p-4">
      <div className="bg-white border border-rose-100 rounded-2xl p-8 shadow-sm text-center max-w-md">
        <h1 className="text-rose-600 font-bold text-2xl mb-2">
          Something Went Wrong!
        </h1>
        <p className="text-slate-500 text-sm">{details}</p>
        <Button
          onClick={() => {
            window.location.reload();
          }}
          className="bg-rose-500 hover:bg-rose-600 cursor-pointer p-1 rounded-xl mt-2 px-2 shadow-sm text-white"
        >
          Reload <span className="font-bold ml-1 ">&#8635;</span>
        </Button>
      </div>
    </div>
  );
}

export default Error;
