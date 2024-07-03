import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../../styles";
import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { textVariant } from "../../utils/motion";

const ExperienceCard = ({ exp }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#D31010",
      color: "#fff",
    }}
    contentArrowStyle={{ borderRight: "10px solid  #D31010" }}
    date={
      <span style={{ fontSize: "30px", color: "#fff", marginTop: "20px" }}>
        {exp.date}
      </span>
    }
    icon={
      <div className="flex justify-center items-center w-full h-full bg-white rounded-full">
        <img
          src={exp.icon}
          alt={exp.company_name}
          className="w-[100%] h-[100%] object-contain"
        />
      </div>
    }
  >
    <div>
      <img className="w-[40%] mx-auto" src={exp.img} alt="" />
      <h3 className="text-center text-white text-[40px] font-bold text-shadow-black">
        " {exp.title} "
      </h3>
      <h3 className="text-white text-shadow-black text-center text-[30px]">
        {exp.company_name}
      </h3>
      <h3 className="text-[25px] text-shadow-black text-center">
        {exp.points}
      </h3>
      <ul>
        {exp.capitulos &&
          exp.contenido &&
          exp.capitulos.map((capitulo, index) => (
            <React.Fragment key={index}>
              <div className=" py-5">
                <li className="text-[25px] text-shadow-black text-center">{capitulo}</li>
                <li className="text-[19px] text-shadow-black">
                  {exp.contenido[index]}
                </li>
              </div>
            </React.Fragment>
          ))}
      </ul>
    </div>
  </VerticalTimelineElement>
);

const TimeLine = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[url('/bg-main.jpg')] bg-cover bg-center bg-fixed">
      <div className="flex flex-col justify-center items-center mt-40 xl:mt-52 2xl:mt-80">
        <h1 className="text-5xl md:text-7xl xl:text-8xl 2xl:text-8xl md:tracking-wide text-[#D31010] text-shadow-white text-center font-bold pt-20">
          Linea de Tiempo
        </h1>
      </div>
      <div className="mt-20 flex flex-col w-full xl:w-full">
        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default TimeLine;
