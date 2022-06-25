import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { TextField } from "../components/TextField";

export const CommentPage = () => {
  const { push, replace } = useHistory();
  const history = useHistory();

  const post = () => {};

  return <div>
         <div className="bg-emerald-100 px-6 py-6 " >
          <div className="flex justify-between">
              <h2 className="text-lg font-semibold text-gray-900">iamdojin </h2>
              <small className="text-sm text-gray-700 ">22h ago</small>
          </div>
          <p className="mt-3 text-gray-700 text-sm">
                  오늘 저녁에 반짓고리 빌려주실 분! 
          </p>
          <p className="font-semibold"> #1000 </p>
          <div className="mt-4 ">
                  <div className="flex text-gray-700 text-sm ">
                    <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
                    </svg>
                    <span>2</span>
                  </div>
          </div>
        </div>
        <hr></hr>
        <div className="">
        <div className="bg-white px-6 py-6 " >
          <div className="flex flex-row justify-between">
          <div className="flex flex-row items-end space-x-4">
              <h2 className="text-lg font-semibold text-gray-900">byebye </h2>
              <small className="text-xs text-gray-700 ">22h ago</small>
                    </div>
          <div className="flex flex-row space-x-2">
                <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#333D4B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" />
                <path d="M22 6L12 13L2 6" />
              </svg>
              <div className="bg-gray-200 px-2 rounded">삭제</div>
          </div>
          </div>
          <p className="mt-3 text-gray-700 text-sm">
                  제가 빌려드릴게요
          </p>
                  </div>
          <hr></hr>
          <div className="bg-white px-6 py-6 " >
          <div className="flex flex-row justify-between">
          <div className="flex flex-row items-end space-x-4">
              <h2 className="text-lg font-semibold text-gray-900">iamdojin </h2>
              <small className="text-xs text-gray-700 ">22h ago</small>
                    </div>
          <div className="flex flex-row space-x-2">
                <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#333D4B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" />
                <path d="M22 6L12 13L2 6" />
              </svg>
              <div className="bg-gray-200 px-2 rounded">삭제</div>
          </div>
          </div>
          <p className="mt-3 text-gray-700 text-sm">
                  넵 채팅하겠습니다!
          </p>
                  </div>
                  </div>
          <hr></hr>
  </div>;
};
