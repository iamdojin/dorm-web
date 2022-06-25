import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { TextField } from "../components/TextField";


export const NoticePage = () => {
    const { push, replace } = useHistory();
    const history = useHistory();

    
 return(
<div>
     <div>
        <div className=" p-3 h-screen border border-emerald-800 rounded text-gray-800 my-10 mx-10">
           공지사항입니다. </div>
  </div>
  </div>
 );
};