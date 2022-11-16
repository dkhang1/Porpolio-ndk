import React from "react";
import Fiverr from "../assets/img/Fiverr.png";
import Kentacus from "../assets/img/Kentacus.png";
export default function Project(props) {
  const { project } = props;

  return (
    <section ref={project} id="project">
      <div className="text-center">
        <h1 className="text-4xl text-teal-500 text-medium pb-10">Projects</h1>
        <p className="dark:text-white text-xl">
          Here you will find some of my lated projects
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap ">
        <div className=" basis-1/3 flex-1 relative overflow-hidden cursor-pointer group">
          <img
            src={Kentacus}
            alt="project"
            className="rounded-lg object-cover group-hover:opacity-50 transition-opacity "
            width={"100%"}
            height={"100%"}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent rounded-md to-black/5 group-hover:from-black/80 group-hover:via-black/60 group-hover:to-black/80 transition-all"></div>
          <div className=" absolute inset-0 flex flex-col items-start justify-center px-9 translate-y-[90%] group-hover:translate-y-0 transition-all">
            <h2 className="text-2xl font-semibold text-teal-500 ">
              Sneaker eCommerce Website
            </h2>
            <p className="text-lg py-5 text-white">
              {" "}
              A full responsive website made by Reactjs - Some feartures: Add,
              Remove, Login, Register,...
            </p>
            <div className="flex gap-10">
              <a
                className="py-2 px-3.5 rounded-md bg-gradient-to-r from-cyan-500 to-teal-500"
                href="https://kentacus.vercel.app"
              >
                Liveview
              </a>
              <a
                className="py-2 px-3.5 rounded-md bg-gradient-to-r from-cyan-500 to-teal-500"
                href="https://github.com/dkhang1/kentacus"
              >
                Github
              </a>
            </div>
          </div>
        </div>
        <div className=" basis-1/3 flex-1 relative overflow-hidden cursor-pointer group">
          <img
            src={Fiverr}
            alt="project"
            className="rounded-lg object-cover group-hover:opacity-50 "
            width={"100%"}
            height={"100%"}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent rounded-md to-black/5 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 transition-all"></div>
          <div className=" absolute inset-0 flex flex-col items-start justify-center px-9 translate-y-[90%] group-hover:translate-y-0 transition-all">
            <h2 className="text-2xl font-semibold text-teal-500 ">
              Fiverr Website Clone
            </h2>
            <p className="text-lg py-5 text-white">
              A full responsive website made by Reactjs, Typescript - Some
              feartures: Add, Remove, Login, Register, Admin,...
            </p>
            <div className="flex gap-10">
              <a
                className="py-2 px-3.5 rounded-md bg-gradient-to-r from-cyan-500 to-teal-500"
                href="https://fiverr-reactjs.vercel.app"
              >
                Liveview
              </a>
              <a
                className="py-2 px-3.5 rounded-md bg-gradient-to-r from-cyan-500 to-teal-500"
                href="https://github.com/DinhhHau/Fiverr__"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
