import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import Typewriter from "typewriter-effect";
import dev from "../assets/img/dev-ed-wave.png";
export default function Hero() {
  return (
    <section className="py-10">
      <div className=" text-center p-10 py-10">
        <h2 className="md:text-5xl text-4xl py-2 font-medium dark:text-white">Hi, I'm</h2>
        <h2 className="md:text-5xl text-4xl py-2 font-medium text-teal-500">
          <Typewriter
            className=" font-burtons"
            options={{
              strings: ["Nguyen Duy Khang", "A Frontend Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>

        <p className="text-md py-5 leading-8 text-gray-800 dark:text-white">
          A Developer passionate about creating interactive
          applications and experiences on the web.
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
        <a href="https://www.facebook.com/khangdanielnguyen/"><AiFillFacebook className=" hover:text-cyan-200 transition-all" /></a>
        <a href="https://github.com/dkhang1"><AiFillGithub className=" hover:text-cyan-200 transition-all" /></a>
        <a href="https://www.linkedin.com/in/ndkdev/"><AiFillLinkedin className=" hover:text-cyan-200 transition-all" /></a>
      </div>
      <div className="relative overflow-hidden mt-10 bg-gradient-to-b mx-auto from-teal-500 w-80 h-80 rounded-full">
        <img src={dev} alt="dev" className=" absolute top-11 scale-110"/>
      </div>
    </section>
  );
}
