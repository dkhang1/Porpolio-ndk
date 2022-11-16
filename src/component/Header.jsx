import React from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import cv from "../assets/pdf/NDK-CV.pdf";

export default function Header(props) {
  const {setDarkMode, darkMode, scrollToSection, scrollRef} = props;
  
  return (
    <header id="home" >
      <nav className=" py-10 mb-12 flex justify-between items-center">
        <h1 className="text-xl font-burtons font-semibold dark:text-white">BeONdEVVV</h1>
        <ul className=" hidden md:flex gap-14">
          <li>
            <span  onClick={()=>{scrollToSection(scrollRef.about)}}  className="text-xl transition-colors cursor-pointer hover:text-teal-500 dark:text-white dark:hover:text-teal-500">About</span>
          </li>
          <li>
            <span onClick={()=>{scrollToSection(scrollRef.skill)}} className="text-xl cursor-pointer transition-colors hover:text-teal-500 dark:text-white dark:hover:text-teal-500">Skill</span>
          </li>
          <li>
            <span onClick={()=>{scrollToSection(scrollRef.project)}} className="text-xl cursor-pointer transition-colors hover:text-teal-500 dark:text-white dark:hover:text-teal-500">Project</span>
          </li>
        </ul>
        <ul className="flex items-center gap-6">
          <li>
            {darkMode ? <BsFillSunFill className="dark:text-white cursor-pointer text-2xl" onClick={()=>{
              setDarkMode(!darkMode);
            }}/> : <BsFillMoonStarsFill className=" cursor-pointer text-2xl" onClick={()=>{
              setDarkMode(!darkMode);
            }} />}
          </li>
          <li>
            <a
              className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-5 py-3 rounded-md"
              href={cv}
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
