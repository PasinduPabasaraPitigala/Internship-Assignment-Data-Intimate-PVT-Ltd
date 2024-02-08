import React from "react";
import { FaDownload } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";


const Content = ()=>{

    return(
        <div className="row inline-flex gap-2 relative top-5 left-1">


            {/*   <div className={" col-span-3 md:col-span-6 mb-4 bg-white rounded w-[300px] relative top-4"}>
                    <div className={"card  border-l-4 border-blue-600  rounded-l-lg shadow h-100 py-6"}>
                        <div className={"card-body"}>
                            <div className={"row flex gap-0 items-center"}>
                                <div className={"col mr-2"}>
                                    <div className={"text-xs font-semibold text-primary uppercase text-blue-600 mb-1 relative left-6"}>
                                        Earnings (Monthly)</div>
                                    <div className={"text-lg mb-0 font-bold text-gray-600 relative left-6"}>$40,000</div>
                                </div>
                                <div className={"col-auto"}>
                                    <FaCalendar  className={'text-gray-300 w-10 h-7 relative left-14'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>*/}

            <div className="col-span-3 md:col-span-6 mb-4 bg-white rounded w-[300px] relative left-10 top-4">
                <div className="card  border-l-4 rounded-l-lg border-blue-500 shadow h-100 py-6">
                    <div className="card-body">
                        <div className="row flex gap-0 items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-semibold text-primary uppercase text-blue-500 mb-1 relative left-6">
                                    Earnings (Monthly)</div>
                                <div className="text-lg mb-0 font-bold text-gray-600 relative left-6">$40,000</div>
                            </div>
                            <div className="col-auto">
                                <FaCalendar  className={'text-gray-300 w-10 h-7 relative left-20'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-span-3 md:col-span-6 mb-4 bg-white rounded w-[300px] relative left-10 top-4">
                <div className="card  border-l-4 rounded-l-lg border-green-500 shadow h-100 py-6">
                    <div className="card-body">
                        <div className="row flex gap-0 items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-semibold text-primary uppercase text-green-500 mb-1 relative left-6">
                                    Earnings (Annual)</div>
                                <div className="text-lg mb-0 font-bold text-gray-600 relative left-6">$215,000</div>
                            </div>
                            <div className="col-auto">
                                <FaDollarSign  className={'text-gray-300 w-10 h-7 relative left-20'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-span-3 md:col-span-6 mb-4 bg-white rounded w-[300px] relative left-10 top-4">
                <div className="card  border-l-4 rounded-l-lg border-cyan-500 shadow h-100 py-6">
                    <div className="card-body">
                        <div className="row flex gap-0 items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-semibold text-primary uppercase text-cyan-500 mb-1 relative left-6">
                                    Task</div>
                                <div className="text-lg mb-0 font-bold text-gray-600 relative left-6">50%</div>
                            </div>
                            <div className="col-auto">
                                <FaClipboardList  className={'text-gray-300 w-10 h-7 relative left-20'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="col-span-3 md:col-span-6 mb-4 bg-white rounded w-[300px] relative left-10 top-4">
                <div className="card  border-l-4 rounded-l-lg border-yellow-500 shadow h-100 py-6">
                    <div className="card-body">
                        <div className="row flex gap-0 items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-semibold text-primary uppercase text-yellow-500 mb-1 relative left-6">
                                    Pending Request</div>
                                <div className="text-lg mb-0 font-bold text-gray-600 relative left-6">18</div>
                            </div>
                            <div className="col-auto">
                                <FaMessage  className={'text-gray-300 w-10 h-7 relative left-20'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}
export default Content;