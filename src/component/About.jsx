import React from "react";
import cv from "../assets/pdf/NDK-CV.pdf";


export default function About(props) {
  const { about,contact,scrollToSection } = props;
  return (
    <section ref={about} className="py-10 text-center mx-auto md:max-w-xl">
      <h1 className=" text-4xl text-teal-500 font-medium">About Me</h1>
      <p className="text-md dark:text-white py-10">
        I'm a Front-End Web Developer building the Front-end of Websites and Web
        Applications that leads to the success of the overall product. Check out
        some of my work in the Projects section. 
      </p>
      <p className="text-md dark:text-white ">I'm open to Job opportunities
        where I can contribute, learn and grow. If you have a good opportunity
        that matches my skills and experience then don't hesitate to contact me.</p>
      <div className="pt-10 flex gap-11 justify-center">
        <a href={cv} className="px-4 py-3 bg-gradient-to-r text-lg dark:text-white from-cyan-500 to-teal-500 rounded-md">Resume</a>
        <span onClick={()=>{
            scrollToSection(contact)
        }} className="px-4 py-3 bg-gradient-to-r cursor-pointer text-lg dark:text-white from-cyan-500 to-teal-500 rounded-md">Contact</span>
      </div>
    </section>
  );
}
