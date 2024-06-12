import React, { useRef, useState } from "react";
import { FaRegCirclePlay, FaRegCirclePause } from "react-icons/fa6";

const WebSeries = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPauseButton, setShowPauseButton] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setShowPauseButton(false);
  };

  const handleVideoClick = () => {
    if (isPlaying) {
      setShowPauseButton(true);
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      handlePlayPause();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[url('/bg-main-reverse.png')] bg-cover bg-center bg-fixed">
      <div className="flex flex-col justify-center items-center">
        <h1 className=" text-3xl md:text-7xl xl:text-6xl 2xl:text-8xl md:tracking-wide text-[#D31010] text-shadow-white text-center font-bold pt-20 ">
          AMARA LA MUÑECA POSEIDA:{" "}
          <span className="text-[#D31010] text-shadow-white">EL DESPERTAR</span>
        </h1>
      </div>
      <div className=" p-4 mt-4 mx-4 rounded-2xl bg-[#00000080] backdrop-blur-sm md:w-[50%] xl:w-[80%]">
        <p className="text-white text-[15px] text-justify md:text-4xl text-shadow-red xl:text-2xl 2xl:text-4xl">
          La familia Rodriguez conformada por los padres Kamila Hernandez y
          Fabio Rodriguez, su hija Mía Rodriguez de 12 años y Alice Rodriguez de
          19 años quién es muy rebelde y tiene un conflicto con sus padres,
          ellos deciden mudarse a una casa nueva, al llegar a la casa Mía
          encuentra una muñeca de felpa llamada Amara en donde habita un
          demonio, Mía le pregunta a sus padres si se puede quedar con la
          muñeca, ellos convencidos aceptan, rápidamente forma un vínculo con la
          muñeca y la comienza a poseer, pero al pasar los días Amara posee el
          cuerpo de Mía para que mate a sus padres, así logrando matar a su
          madre después de que Fabio Rodriguez tratara de descubrir la verdad le
          da un paro cardiaco. Alice Rodriguez trata de escapar y avisar a la
          policía, la policía y el psicólogo David Álvarez al no creerle y ellos
          pensando que en realidad ella había matado a sus padres la llevan con
          un psiquiatra, así el Juez Gonzalo Velez dando a Mía en adopción con
          una nueva familia.
        </p>
      </div>

      <div className="xl:w-[80%] xl:mt-14 mt-5">
        <h1 className="text-[#D31010] text-[25px] xl:text-[30px] w-full text-center xl:text-justify md:text-4xl text-shadow-black xl:text-5xl 2xl:text-4xl">
          Websodio 01: Un Nuevo Comienzo
        </h1>
        <div className="flex xl:flex-row flex-col">
          <div className="my-5">
            <div className="relative flex justify-center items-center">
              <video
                ref={videoRef}
                src="prueba.mp4"
                className="w-[90%] max-w-[750px] lg:w-[750px] xl:w-[500px] 2xl:w-[750px] rounded-3xl"
                onEnded={handleVideoEnd}
                onClick={handleVideoClick}
              />
              {!isPlaying && !showPauseButton && (
                <button
                  onClick={handlePlayPause}
                  className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-2xl rounded-3xl"
                >
                  <FaRegCirclePlay className="text-7xl xl:text-9xl z-50" />
                </button>
              )}
              {showPauseButton && (
                <button
                  onClick={() => {
                    setShowPauseButton(false);
                    handlePlayPause();
                  }}
                  className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white text-2xl rounded-3xl"
                >
                  <FaRegCirclePause className="text-7xl xl:text-9xl z-50" />
                </button>
              )}
            </div>
          </div>
          <div className="flex justify-center items-center px-10">
            <p className="text-white text-[15px] text-justify md:text-4xl text-shadow-red xl:text-2xl 2xl:text-4xl">
              La familia Rodriguez conformada por los padres Kamila Hernandez y
              Fabio Rodriguez, su hija Mía Rodriguez de 12 años y Alice
              Rodriguez de 19 años quién es muy rebelde y tiene un conflicto con
              sus padres, ellos deciden mudarse a una casa nueva, al llegar a la
              casa Mía encuentra una muñeca de felpa llamada Amara en donde
              habita un demonio, Mía le pregunta a sus padres si se puede quedar
              con la muñeca, ellos convencidos aceptan a que Mía se quede con la
              muñeca.
            </p>
          </div>
        </div>
      </div>

      <div className="xl:w-[80%] xl:mt-14 mt-5">
        <h1 className="text-[#D31010] text-[25px] xl:text-[30px] w-full text-center xl:text-justify md:text-4xl text-shadow-black xl:text-5xl 2xl:text-4xl">
          Websodio 02: Amigas para toda la vida
        </h1>
        <div className="flex xl:flex-row flex-col">
          <div className="my-5">
            <div className="relative flex justify-center items-center">
              <video
                ref={videoRef}
                src="prueba.mp4"
                className="w-[90%] max-w-[750px] lg:w-[750px] xl:w-[500px] 2xl:w-[750px] rounded-3xl"
                onEnded={handleVideoEnd}
                onClick={handleVideoClick}
              />
              {!isPlaying && !showPauseButton && (
                <button
                  onClick={handlePlayPause}
                  className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-2xl rounded-3xl"
                >
                  <FaRegCirclePlay className="text-7xl xl:text-9xl z-50" />
                </button>
              )}
              {showPauseButton && (
                <button
                  onClick={() => {
                    setShowPauseButton(false);
                    handlePlayPause();
                  }}
                  className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white text-2xl rounded-3xl"
                >
                  <FaRegCirclePause className="text-7xl xl:text-9xl z-50" />
                </button>
              )}
            </div>
          </div>
          <div className="flex justify-center items-center px-10">
            <p className="text-white text-[15px] text-justify md:text-4xl text-shadow-red xl:text-2xl 2xl:text-4xl">
              Mía rápidamente forma un vínculo con la muñeca, llegando así a ser
              inseparables llevando a Amara a todos lados, la comienza a poseer
              y a manipular, al pasar las semanas, Mía es manipulada por Amara,
              logrando que Mía empuje a su madre Kamila Hernandez de las
              escaleras matandola.
            </p>
          </div>
        </div>
      </div>

      <div className="xl:w-[80%] xl:mt-14 mt-5">
        <h1 className="text-[#D31010]  text-[25px] xl:text-[30px] w-full text-center xl:text-justify md:text-4xl text-shadow-black xl:text-5xl 2xl:text-4xl">
          Websodio 03: La Injusticia
        </h1>
        <div className="flex xl:flex-row flex-col">
          <div className="my-5">
            <div className="relative flex justify-center items-center">
              <video
                ref={videoRef}
                src="prueba.mp4"
                className="w-[90%] max-w-[750px] lg:w-[750px] xl:w-[500px] 2xl:w-[750px] rounded-3xl"
                onEnded={handleVideoEnd}
                onClick={handleVideoClick}
              />
              {!isPlaying && !showPauseButton && (
                <button
                  onClick={handlePlayPause}
                  className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-2xl rounded-3xl"
                >
                  <FaRegCirclePlay className="text-7xl xl:text-9xl z-50" />
                </button>
              )}
              {showPauseButton && (
                <button
                  onClick={() => {
                    setShowPauseButton(false);
                    handlePlayPause();
                  }}
                  className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white text-2xl rounded-3xl"
                >
                  <FaRegCirclePause className="text-7xl xl:text-9xl z-50" />
                </button>
              )}
            </div>
          </div>
          <div className="flex justify-center items-center px-10">
            <p className="text-white text-[15px] text-justify md:text-4xl text-shadow-red xl:text-2xl 2xl:text-4xl">
              Fabio Rodriguez trata de descubrir la verdad pero antes de ello le
              da un paro cardiaco. Alice Rodriguez trata de escapar y avisar a
              la policía, la policía y el psicólogo David Álvarez al no creerle
              y ellos pensando que en realidad ella había matado a sus padres la
              llevan con un psiquiatra, así el Juez Gonzalo Velez dando a Mía en
              adopción con una nueva familia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebSeries;
