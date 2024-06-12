import React, { useState } from "react";
import MovieModal from "../../components/Modal/MovieModal";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const Movie = () => {
  const images = [
    {
      name: "Iván Suárez",
      image: "/movieIvanSuarez.png",
    },
    {
      name: "Valeria García",
      image: "/movieValeriaGarcia.png",
    },
    {
      name: "Jhanna Torres",
      image: "/movieJhannaTorres.png",
    },
    {
      name: "Maximo Martinez",
      image: "/movieMaximoMartinez.png",
    },
    {
      name: "Amara",
      image: "/amara.png",
    },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[url('/bg-main-reverse.png')] bg-cover bg-center bg-fixed">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-7xl xl:text-6xl 2xl:text-8xl md:tracking-wide text-[#D31010] text-shadow-white text-center font-bold pt-20">
          AMARA LA MUÑECA POSEIDA:{" "}
          <span className="text-[#D31010] text-shadow-white">EL ORIGEN</span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center p-4 m-4 rounded-2xl bg-[#00000080] backdrop-blur-sm md:w-[80%]">
        <img
          src="/cd-cover.png"
          alt="movie"
          className="w-[50%] md:w-[50%] floating-image"
        />
        <p className="text-white text-base text-justify md:text-4xl text-shadow-red md:w-full xl:text-2xl 2xl:text-4xl">
          Un grupo de amigos, Iván Suárez, Valeria García y Jhanna Torres,
          decide jugar a la ouija en una casa abandonada. Durante el juego,
          invocan a un demonio que posee el cuerpo de Iván, quien luego asesina
          a Valeria y Jhanna. En busca de ayuda, Iván acude a un sacerdote para
          que le realice un exorcismo en la misma casa abandonada con el
          objetivo de cerrar el portal. Aunque creen haber cerrado el portal, el
          demonio se traslada al cuerpo de una muñeca.
        </p>
        <button
          className="text-white md:text-2xl p-2 mx-2 rounded-lg bg-[#D31010] hover:bg-white hover:text-[#D31010] duration-200 ease"
          onClick={() => setOpen(true)}
        >
          Personajes
        </button>
      </div>
      <img src="/doll.jpg" alt="doll" className="w-1/2 mb-8" />
      <MovieModal open={open} onClose={() => setOpen(false)}>
        <div className="overflow-auto max-h-[80vh]">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
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
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img.image}
                  alt={img.name}
                  className="w-[180px] h-[180px] xl:w-[180px] xl:h-[200px] object-cover rounded-xl border border-red-900"
                />
                <h2 className="text-[#D31010] text-4xl md:text-3xl mt-5 text-center tracking-widest">
                  {img.name}
                </h2>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </MovieModal>
    </div>
  );
};

export default Movie;
