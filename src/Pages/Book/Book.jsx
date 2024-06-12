import React, { useState } from "react";
import BookModal from "../../components/Modal/BookModal";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const Book = () => {
  const images = [
    {
      name: "Amara",
      image: "/amara.png",
    },
    {
      name: "Mía Rodríguez",
      image: "/bookMiaRodriguez.png",
    },
    {
      name: "Alice Rodríguez",
      image: "/bookAliceRodriguez.png",
    },
    {
      name: "José Perales",
      image: "/bookJosePerales.png",
    },
    {
      name: "María Coveñas",
      image: "/bookMariaCovenas.png",
    },
    {
      name: "Hugo Perales",
      image: "/bookHugoPerales.png",
    },
    {
      name: "Gerardo Ruiz",
      image: "/bookGerardoRuiz.png",
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[url('/bg-main-reverse.png')] bg-cover bg-center bg-fixed">
      <div className="flex flex-col justify-center items-center mt-[-10px]">
        <h1 className="text-2xl md:text-7xl xl:text-6xl 2xl:text-8xl md:tracking-wide text-[#D31010] text-shadow-white text-center font-bold mt-20 px-2 ">
          AMARA LA MUÑECA POSEIDA:{" "}
          <span className="text-[#D31010] text-shadow-white">LA BUSQUEDA</span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center p-4 mt-4 mx-4 rounded-2xl bg-[#00000080] backdrop-blur-sm md:w-[70%] xl:w-[80%] ">
        <img
          src="/libro.png"
          alt="movie"
          className=" w-[75%] md:w-[50%] floating-image"
        />
        <p className="text-white text-[14px] text-justify md:text-4xl text-shadow-red xl:text-xl 2xl:text-4xl">
          Han pasado 5 años desde lo sucedido con Mía Rodríguez. Ahora vive en
          una nueva casa con sus padres adoptivos, José Perales y María Coveñas,
          y su hermanastro, Hugo Perales. Con el tiempo, Alice es dada de alta y
          visita a su hermana Mía, gracias a la intervención de su psicólogo,
          Gerardo Ruiz, quien ha estado tratando su caso. Amara, la muñeca,
          intenta nuevamente convencer a Mía y ahora también a Alice de asesinar
          a su hermanastro. Esta vez, la muñeca no solo manipula a Mía, sino
          también a Alice, logrando que ambas maten a Hugo. Después del
          asesinato, las hermanas Rodríguez escapan de la casa.
        </p>
        <button
          className="text-white md:text-2xl p-2 mx-2 rounded-lg bg-[#D31010] hover:bg-white hover:text-[#D31010] duration-200 ease"
          onClick={() => setOpen(true)}
        >
          Personajes
        </button>
      </div>
      <BookModal open={open} onClose={() => setOpen(false)}>
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
              <h2 className="text-[#D31010] text-4xl md:text-3xl mt-5  text-center tracking-widest">
                {img.name}
              </h2>
            </SwiperSlide>
          ))}
        </Swiper>
      </BookModal>
    </div>
  );
};

export default Book;
