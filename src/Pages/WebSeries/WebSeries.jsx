import React from "react";

const WebSeries = () => {
  return (
    <div className=" flex flex-col justify-center items-center bg-[url('/bg-main-reverse.png')] bg-cover bg-center h-screen">
      <div className="flex flex-col justify-center items-center">
        <h1 className=" text-3xl md:text-7xl xl:text-6xl 2xl:text-8xl md:tracking-wide text-white font-bold pt-20 text-shadow-red">
          HISTORIA{" "}
          <span className="text-[#D31010] text-shadow-white">NUCLEAR</span>
        </h1>
      </div>
      <div className=" p-4 mt-4 mx-4 rounded-2xl bg-[#00000080] backdrop-blur-sm md:w-[50%] xl:w-[80%]">
        <p className="text-white text-[15px] text-justify md:text-4xl text-shadow-red xl:text-2xl 2xl:text-4xl">
          La familia Rodriguez conformada por los padres Kamila Hernandez y
          Fabio Rodriguez, su hija Mía Rodriguez de 12 años y Alice Rodriguez de
          19 años quién es muy rebelde y tiene un conflicto con sus padres,
          ellos deciden mudarse a una casa nueva, al llegar a la casa Mía
          encuentra una muñeca de felpa llamada Amara en donde habita un
          demonio, Mía le pregunta a sus padres Kamila Hernandez y Fabio
          Rodriguez si se puede quedar con la muñeca, ellos convencidos aceptan,
          rápidamente forma un vínculo con la muñeca y la comienza a poseer,
          pero al pasar los días Amara posee el cuerpo de Mía para mate a sus
          padres y a su hermana Alice Rodriguez con su ayuda, así logrando matar
          a los padres pero menos a la hermana ya que trató de escapar y avisar
          a la policía, la policía y el psicólogo David Álvarez al no creerle y
          ellos pensando que en realidad ella había matado a sus padres la
          llevan con un psiquiatra, así el Juez Gonzalo Velez dando a Mía en
          adopción con una nueva familia.
        </p>
      </div>
    </div>
  );
};

export default WebSeries;
