import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { TextField } from "../components/TextField";


export const JoinRoom = () => {
    const { push, replace } = useHistory();
    const history = useHistory();

    const post = () => {}
    
 return (
     <div>
    
    <div className="grid border ">
            <div className="col-span-1 bg-white border-r border-gray-300">

                <ul className="overflow-auto h-96">
                    <h2 className="ml-4  text-emerald-800 font-semibold text-2xl my-4">메시지</h2>
                    <li>
                        <a className="hover:bg-gray-100 border-b border-gray-300 px-3 py-2 cursor-pointer flex items-center text-sm focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out">
                            <div className="w-full pb-2">
                                <div className="flex justify-between">
                                    <span className="block ml-2 font-semibold text-base text-gray-600 ">hello</span>
                                    <span className="block ml-2 text-sm text-gray-600">5 minutes</span>
                                </div>
                                <span className="block ml-2 text-sm text-gray-600">message</span>
                            </div>
                        </a>
                        <a className="bg-gray-100 border-b border-gray-300 px-3 py-2 cursor-pointer flex items-center text-sm focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out" onClick={() => history.push("/chat")}>
                            <div className="w-full pb-2">
                                <div className="flex justify-between">
                                    <span className="block ml-2 font-semibold text-base text-gray-600 ">byebye</span>
                                    <span className="block ml-2 text-sm text-gray-600">15 minutes</span>
                                </div>
                                <span className="block ml-2 text-sm text-gray-600">안녕하세요</span>
                            </div>
                        </a>
                        <a className="hover:bg-gray-100 border-b border-gray-300 px-3 py-2 cursor-pointer flex items-center text-sm focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out">
                            <div className="w-full pb-2">
                                <div className="flex justify-between">
                                    <span className="block ml-2 font-semibold text-base text-gray-600 ">12345</span>
                                    <span className="block ml-2 text-sm text-gray-600">1 hour</span>
                                </div>
                                <span className="block ml-2 text-sm text-gray-600">message</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            
        </div>

</div>
 );
};