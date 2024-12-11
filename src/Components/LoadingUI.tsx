const LoadingUI = () => {
  return (
    <div className="relative w-full h-screen bg-gray-100">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-black text-white px-10 py-3 rounded-full animate-pulse">
          Loading .....
        </div>
      </div>
    </div>
  );
};

export default LoadingUI;
