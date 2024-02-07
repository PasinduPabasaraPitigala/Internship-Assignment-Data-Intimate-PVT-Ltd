import React from "react";
import { ImWink2 } from "react-icons/im";
// import { IoIosSpeedometer } from "react-icons/io";
import { FaTachometerAlt } from "react-icons/fa";

import { IoMdSettings } from "react-icons/io";


export default function Home() {
  return (
    <ul>
      <div className={'flex-wrap items-center justify-center bg-gradient-to-b from-blue-500 to-blue-800 h-[100vh] w-[225px]  '}>
        <ImWink2 className={'icon relative left-8 top-4 w-[30px] h-[30px] text-white -rotate-12'}/>
          <div className={"SBAdmin text-xl font-sans  font-bold text-white relative top-[-10px] left-[70px]"}>SB ADMIN<sup>2</sup></div>

          <hr className={"sidebar-divider my-0 border-gray-400 visible h-0 box-content relative top-[10px] left-4 w-[200px]"}/>

          <li className="nav-item-flex">
          <a className="nav-link" href="">
              <FaTachometerAlt className={"iconSpeedMeter text-white relative h-7 w-4 top-[20px] left-5"}/>
              
          </a>
          </li>


      </div>
    </ul>
  );
}
