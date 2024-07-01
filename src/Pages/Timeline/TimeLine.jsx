import React from "react";

const TimeLine = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[url('/bg-main.jpg')] bg-cover bg-center bg-fixed">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-7xl xl:text-6xl 2xl:text-8xl md:tracking-wide text-[#D31010] text-shadow-white text-center font-bold pt-20">
            Linea de Tiempo
        </h1>
      </div>
      <div className="p-8 mt-5 mx-4 rounded-2xl bg-[#00000080] backdrop-blur-sm">
        <img
          src="./TimeLine.png"
          alt="map"
          className="w-full h-full lg:w-[750px] xl:w-[900px] xl:h-[350px] 2xl:w-[750px]"
        />
      </div>
    </div>
  );
};

export default TimeLine;
