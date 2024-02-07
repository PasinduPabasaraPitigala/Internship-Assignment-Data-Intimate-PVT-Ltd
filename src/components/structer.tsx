import React from "react";
import { FaSearch } from "react-icons/fa";


const structer = ()=>{

    return(
        <div className={'absolute text-blue-300 bg-white h-[80px] w-full '}>
            <div className={'w-[50px] sm:w-[50px] md:w-[450px] relative justify-between items-center top-5 bottom-5 left-[250px]  '}>
                <input type={'text'}  placeholder={'Search for...'} className={'border-gray-200 border p-2 px-4 rounded-lg w-full' }/>
                <button className={'bg-blue-500 hover:bg-blue-300   relative w-[41px] h-[41.5px] top-[-41.7px] rounded-r-lg left-[414.5px] fixed'}>
                    <FaSearch className={'relative right-1 left-3 text-white fixed flex-auto'}/>
                </button>

            </div>
        </div>
    )
}
export default structer;