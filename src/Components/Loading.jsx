//Loading Page until the data received .
function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-400 font-bold text-4xl text-cyan-900">
      <span>Loading </span>
      <span className="animate-bounce inline-block ">.</span>
      <span className="animate-bounce inline-block [animation-delay:-0.3s]">
        .
      </span>
      <span className="animate-bounce inline-block [animation-delay:-0.4s]">
        .
      </span>
    </div>
  );
}

export default Loading;
