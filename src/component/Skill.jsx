import React, { useRef } from "react";
import Carousel from "./Carousel/Carousel";

export default function Skill(props) {
  const {skill} = props; 
  return (
    <section ref={skill} className=" py-10 text-center">
      <div>
        <h1 className="py-10 text-4xl text-teal-500 text-medium">
          Skills and Technologies
        </h1>
        <p className="dark:text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
          beatae, fugit doloribus autem dolore fugiat. Magnam ab numquam saepe
          praesentium!
        </p>
        <Carousel />
      </div>
    </section>
  );
}
