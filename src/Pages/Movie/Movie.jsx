import React, { useRef, useState } from "react";
import { FaRegCirclePlay, FaRegCirclePause } from "react-icons/fa6";

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
  const [videoState, setVideoState] = useState({
    video1: { isPlaying: false, showPauseButton: false },
  });

  const videoRefs = {
    video1: useRef(null),
  };

  const handlePlayPause = (videoKey) => {
    const currentVideo = videoRefs[videoKey].current;
    const isPlaying = videoState[videoKey].isPlaying;

    if (isPlaying) {
      currentVideo.pause();
    } else {
      currentVideo.play();
    }

    setVideoState((prevState) => ({
      ...prevState,
      [videoKey]: { ...prevState[videoKey], isPlaying: !isPlaying },
    }));
  };

  const handleVideoEnd = (videoKey) => {
    setVideoState((prevState) => ({
      ...prevState,
      [videoKey]: { isPlaying: false, showPauseButton: false },
    }));
  };

  const handleVideoClick = (videoKey) => {
    const isPlaying = videoState[videoKey].isPlaying;

    if (isPlaying) {
      setVideoState((prevState) => ({
        ...prevState,
        [videoKey]: { ...prevState[videoKey], showPauseButton: true },
      }));
      videoRefs[videoKey].current.pause();
      setVideoState((prevState) => ({
        ...prevState,
        [videoKey]: { ...prevState[videoKey], isPlaying: false },
      }));
    } else {
      handlePlayPause(videoKey);
    }
  };

  const handleVideoPause = (videoKey) => {
    setVideoState((prevState) => ({
      ...prevState,
      [videoKey]: { ...prevState[videoKey], isPlaying: false },
    }));
  };

  const handleVideoPlay = (videoKey) => {
    setVideoState((prevState) => ({
      ...prevState,
      [videoKey]: { ...prevState[videoKey], isPlaying: true },
    }));
  };

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
      <div className="xl:w-[80%] xl:mt-14 mt-5 flex flex-col justify-center items-center">
        <h1 className="text-[#D31010] text-[25px] xl:text-[50px] xl:text-shadow-white w-full text-center xl:text-center md:text-4xl text-shadow-black xl:text-5xl 2xl:text-4xl">
          Teaser
        </h1>
        <div className="flex xl:flex-row flex-col">
          <div className="my-5">
            <div className="relative flex justify-center items-center">
              <video
                ref={videoRefs.video1}
                src="teaser.mp4"
                controls
                className="w-[90%] max-w-[750px] lg:w-[750px] xl:w-[500px] 2xl:w-[750px] rounded-3xl"
                onEnded={() => handleVideoEnd("video1")}
                onPause={() => handleVideoPause("video1")}
                onPlay={() => handleVideoPlay("video1")}
              />
              {!videoState.video1.isPlaying && !videoState.video1.showPauseButton && (
                <button
                  onClick={() => handlePlayPause("video1")}
                  className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-2xl rounded-3xl"
                >
                  <FaRegCirclePlay className="text-7xl xl:text-9xl z-50" />
                </button>
              )}
              {videoState.video1.showPauseButton && (
                <button
                  onClick={() => {
                    setVideoState((prevState) => ({
                      ...prevState,
                      video1: { ...prevState.video1, showPauseButton: false },
                    }));
                    handlePlayPause("video1");
                  }}
                  className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white text-2xl rounded-3xl"
                >
                  <FaRegCirclePause className="text-7xl xl:text-9xl z-50" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
