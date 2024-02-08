import React from "react";
import { FaSearch } from "react-icons/fa";
import {RiSettings3Fill} from "react-icons/ri";
import { FaBell } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import { RiAccountCircleFill } from "react-icons/ri";






const structer = ()=>{

    return(
        <div className={'absolute text-blue-300 bg-white h-[80px] w-full '}>
            <div className={'w-[50px] sm:w-[50px] md:w-[450px] relative justify-between items-center top-5 bottom-5 left-[250px]  '}>
                <input type={'text'}  placeholder={'Search for...'} className={'border-gray-200 border p-2 px-4 rounded-lg w-full' }/>
                <button className={'bg-blue-500 hover:bg-blue-300   relative w-[41px] h-[41.5px] top-[-41.7px] rounded-r-lg left-[414.5px] fixed'}>
                    <FaSearch className={'relative left-3 text-white fixed flex-auto'}/>
                </button>
            </div>


            <div className={'relative left-[900px]  top-[-70px]'}>
                <FaBell className={'text-gray-300  h-8 w-4  right-[310px] top-6 fixed flex-auto  '}/>
                <div className={'bg-red-500 rounded h-4 w-4 text-xs right-[300px] top-6 fixed flex-auto '}>
                    3+
                </div>
            </div>

            <div className={'relative left-[900px]  top-[-70px]'}>
                <HiMail className={'text-gray-300  h-8 w-5  right-[260px] top-6 fixed flex-auto '}/>
                <div className={'bg-red-500 rounded h-4 w-4 text-xs right-[250px] top-6 fixed flex-auto '}>
                    7+
                </div>
            </div>

            {/*<hr className={"border-separate sm:block divide-border-black-400 visible h-5 box-content right-[250px] top-6 fixed flex-auto w-[200px]"}/>*/}

            <div className={'relative left-[900px]  top-[-70px]'}>
                <a className="nav-link text-black text-opacity-75 hover:text-white" href="">
                    <RiAccountCircleFill className={"iconSpeedMeter  h-10 w-10 top-[15px] right-[30px] fixed flex-auto"}/>
                    <span className={" font-mono text-xs text-zinc-950 top-[0px] right-[200px] fixed flex-auto"}>Douglas McGee</span>
                </a>
            </div>

        </div>
        // <div className={"content"}>
        //     <nav className={"absolute text-blue-300 bg-white h-[70px] w-full"}></nav>
        //     <button className={"bg-blue-500 hover:bg-blue-300   absolute w-[41px] h-[41.5px] top-[-41.7px] rounded-r-lg left-[414.5px] fixed"}>
        //         <li className={"absolute  left-[-10rem] text-white fixed flex-auto"}>
        //             <AiOutlineMenu className={"text-blue-800  h-16 w-8"} />
        //         </li>
        //     </button>
        // </div>
    )
}
export default structer;