import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiRedux,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiAntdesign,
  SiMaterialui,
  SiBootstrap,
} from "react-icons/si";
const itemStyle = {
  fontSize: "30px",
};

export default function Carousel() {
  return (
    <div className="py-10">
      <OwlCarousel
      className="py-10"
        loop
        margin={5}
        autoplay
        autoplaySpeed={500}
        responsive={{
          600: {
            items: 4,
          },
          1000: {
            items: 5,
          },
        }}
      >
        <div className="item text-5xl">
          <SiHtml5 className="mx-auto text-orange-600" />
        </div>
        <div className="item text-5xl">
          <SiCss3 className="mx-auto text-blue-500" />
        </div>
        <div className=" item text-5xl">
          <SiJavascript className="mx-auto text-yellow-300" />
        </div>
        <div className=" item text-5xl">
          <SiReact className="mx-auto text-cyan-400" />
        </div>
        <div className=" item text-5xl">
          <SiRedux className="mx-auto text-purple-600" />
        </div>
        <div className=" item text-5xl">
          <SiTypescript className="mx-auto text-blue-500" />
        </div>
        <div className=" item text-5xl">
          <SiBootstrap className="mx-auto text-purple-500" />
        </div>
        <div className=" item text-5xl">
          <SiTailwindcss className="mx-auto text-cyan-600" />
        </div>
        <div className=" item text-5xl">
          <SiMaterialui className="mx-auto text-blue-500" />
        </div>
        <div className=" item text-5xl">
          <SiAntdesign className="mx-auto text-blue-500" />
        </div>
      </OwlCarousel>
    </div>
  );
}
