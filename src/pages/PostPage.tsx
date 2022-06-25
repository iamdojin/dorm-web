import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { TextField } from "../components/TextField";


export const PostPage = () => {
    const { push, replace } = useHistory();
    const history = useHistory();
    const [content, setContent] = useState("");

    const post = () => {}
    
 return (
     <div>
     <div>
        <div className=" flex flex-col text-gray-800 mt-10 mx-10">
            <textarea className="description sec p-3 h-96 border  border-emerald-800 rounded" placeholder="게시글 작성 시 희망 대여비를 제시해 주시면 원활한 매칭에 도움이 됩니다 :)"
            onChange={(event) => {
              setContent(event.target.value);
            }}></textarea>
        </div>
    
    <div className="flex mt-10 mx-auto">
      <button onClick={() => {
                post();}}
              className="p-2 px-6 font-medium text-white text-lg bg-emerald-800 mx-auto rounded">글 작성</button>
    </div>
  </div>
  </div>
  );
};
