import React from "react";
import {HiOutlineDeviceMobile, HiOutlineLocationMarker, HiOutlineMail} from "react-icons/hi"
export default function Contact() {
  return (
    <section className="pt-10 ">
      <h1 className="text-4xl text-center font-medium text-teal-500 ">
        My Contact
      </h1>
      <ul className="dark:text-white text-xl py-10 gap-6 flex flex-col md:flex-row md:justify-between">
        <li className="flex flex-col justify-center items-center gap-6">
          <HiOutlineLocationMarker className="text-3xl"/>
          <a className=" ml-2 hover:text-teal-200 transition-colors" href="https://www.google.com/maps/place/200+%C4%90.+3%2F2,+Ph%C6%B0%E1%BB%9Dng+12,+Qu%E1%BA%ADn+10,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.7746002,106.6762405,17z/data=!3m1!4b1!4m6!3m5!1s0x31752edd93a39c27:0x5873ff2d08240f8b!8m2!3d10.7745949!4d106.6784292!16s%2Fg%2F11c1ypw172?hl=vi">
             200 3/2, P.12, Q.10, HCM
          </a>
        </li>
        <li className="flex flex-col justify-center items-center gap-6">
          <HiOutlineDeviceMobile className="text-3xl"/>
          <a className=" ml-2 hover:text-teal-200 transition-colors"  href="tel:0916704791" >
            0916704791
          </a>
        </li>
        <li className="flex flex-col justify-center items-center gap-6">
            <HiOutlineMail className="text-3xl"/>
            <a className=" ml-2 hover:text-teal-200 transition-colors"  href="mailto:dkhang0612@gmail.com">dkhang0612@gmail.com</a>
        </li>
        
    
      </ul>
      <div className=" text-center ">
            This website was made by @Beondevvv        
      </div>
    </section>
  );
}
