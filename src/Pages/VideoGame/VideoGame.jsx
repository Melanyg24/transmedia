import React, { useState, useRef } from "react";
import GameModal from "../../components/Modal/GameModal";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const VideoGame = () => {
  const images = [
    {
      name: "Amara",
      image: "/amara.png",
    },
    {
      name: "Mía Rodríguez",
      image: "/gameMiaRodriguez.png",
    },
    {
      name: "Alice Rodríguez",
      image: "/gameAliceRodriguez.png",
    },
    {
      name: "Policias",
      image: "/gamePolices.png",
    },
    {
      name: "Detective",
      image: "/gameDetective.png",
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className=" flex flex-col justify-center items-center bg-[url('/bg-main.jpg')] bg-cover bg-center h-screen">
      <div className="flex flex-col justify-center items-center">
        <h1 className=" text-3xl md:text-7xl xl:text-6xl 2xl:text-8xl md:tracking-wide text-[#D31010] text-shadow-white text-center font-bold pt-20 ">
          AMARA LA MUÑECA POSEIDA:{" "}
          <span className="text-[#D31010] text-shadow-white">EL DESPERTAR</span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center p-4 mx-4 rounded-2xl bg-[#00000080] backdrop-blur-sm md:w-[70%] xl:w-[80%]">
        <img
          src="/juego.png"
          alt="movie"
          className=" w-[75%] md:w-[50%] floating-image"
        />
        <p className="text-white text-base text-justify md:text-4xl text-shadow-red xl:text-2xl 2xl:text-4xl">
          Los jugadores tomarán el control de las hermanas para poder escapar
          fuera de la ciudad y esconderse de la policía ellas podrán esconderse
          en diferentes lugares como casas y podrán usar uso de sus poderes de
          posesión de cuerpo. Donde el jugador toma el control de la policía e
          investigadores los cuales tendrán que usar armamentos de captura y
          también el otro rol de investigación trabajar en equipo para poder
          ubicar y capturar a las hermanas y a la muñeca.
        </p>
        <button
          className="text-white md:text-2xl p-2 xl:ml-3 rounded-lg bg-[#D31010] hover:bg-white hover:text-[#D31010] duration-200 ease"
          onClick={() => setOpen(true)}
        >
          Personajes
        </button>
      </div>
      <GameModal open={open} onClose={() => setOpen(false)}>
        {/* <div className="grid grid-cols-2 gap-4 xl:flex xl:flex-wrap xl:justify-center xl:items-center">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`flex flex-col justify-start items-center rounded-xl mt-1 ${
                    index === images.length - 1 ? "col-span-2" : ""
                  }`}
                >
                  <img
                    src={image.image}
                    alt={image.name}
                    className="w-[80px] h-[80px] xl:w-[180px] xl:h-[200px] object-cover rounded-xl border border-red-900"
                  />
                  <h2 className="text-[#D31010] text-base md:text-2xl text-center">
                    {image.name}
                  </h2>
                </div>
              ))}
            </div> */}

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {images.map((img,index)=>(
            <SwiperSlide key={index}>
              <img src={img.image} alt={img.name} className="w-[180px] h-[180px] xl:w-[180px] xl:h-[200px] object-cover rounded-xl border border-red-900"/>
              <h2 className="text-[#D31010] text-4xl md:text-3xl mt-5  text-center tracking-widest">
                {img.name}
              </h2>
            </SwiperSlide>
          ))}
        </Swiper>
      </GameModal>
    </div>
  );
};

export default VideoGame;
