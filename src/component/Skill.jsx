import React, { useRef } from "react";
import Carousel from "./Carousel/Carousel";

export default function Skill(props) {
  const { skill } = props;
  return (
    <section ref={skill} className=" py-10 text-center">
      <div>
        <h1 className="py-10 text-4xl text-teal-500 font-medium">
          Skills and Technologies
        </h1>
        <p className= "text-md dark:text-white">
          My current skills mostly in terms of programming and technology.
        </p>
        <Carousel />
      </div>
    </section>
  );
}
