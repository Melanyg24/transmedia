import React from "react";


const Home = () => {
  return (
    <div className=" flex justify-center items-center bg-[url('/bg-main.jpg')] bg-cover bg-center h-screen flex-col">
      <div className='flex flex-col justify-center items-center'>
        <h1 className=" text-3xl md:text-7xl 2xl:text-8xl xl:text-5xl md:tracking-wide text-blue-900 font-bold pt-20">AMARA <span className="text-[#D31010]">LA MUÑECA POSEIDA</span></h1>
        <p className="text-[#D31010] text-lg md:text-5xl 2xl:text-6xl xl:text-3xl pt-5">MAPA TRANSMEDIA</p>
      </div>
      <div className="p-8 mt-5 mx-4 rounded-2xl bg-[#00000080] backdrop-blur-sm">
        <img src="./mapa.png" alt="map" className='w-[750px] lg:w-[750px] xl:w-[500px] 2xl:w-[750px]' />
      </div>
    </div>
  );
};

export default Home;
