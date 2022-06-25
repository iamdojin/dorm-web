import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { TextField } from "../components/TextField";

export const socket = io(STRAPI_ENDPOINT);

export const ChatRoom = () => {
  const { push, replace } = useHistory();
  const history = useHistory();
  const [Message, setMessage] = useState("");
  const post = () => {};

  const handleChange = (e: any) => {
    setMessage(e.target.value);
  };

  const handleClick = (e: any) => {
    sendMessage(Message);
  };

  const sendMessage = (Message: any) => {
    if (Message) {
      socket.emit(
        "sendMessage",
        { userId: joinData.userData.id, Message },
        (error: any) => {
          if (error) {
            alert(error);
            history.push("/join");
          }
        }
      );
      setMessage("");
    } else {
      alert("Message can't be empty");
    }
  };

  return (
    <div>
      <div className="ml-4 my-4 font-medium text-lg ">byebye 님과의 대화</div>
      <hr
        style={{
          color: "black",
          height: "3px",
        }}
      />
      <div className="space-y-4">
        <div className="flex flex-row justify-end space-x-4 space-x-2 items-end mr-4">
          <div>4:32</div>
          <div className="message bg-emerald-800 text-white p-2 ml-auto my-2 rounded-md shadow w-1/2">
            안녕하세요
          </div>
        </div>
        <div className="flex flex-row justify-start space-x-2 items-end ml-4">
          <div className="message bg-emerald-100 text-gray p-2 mr-1 my-2 rounded-md  w-1/2">
            안녕하세요
          </div>
          <div>4:32</div>
        </div>
      </div>

      <div>
        <div className=" flex flex-row px-4 space-x-2 fixed inset-x-0 bottom-4 ">
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-emerald-800 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="메시지를 입력해 주세요."
            type="text"
            value={Message}
            onChange={handleChange}
          />
          <button
            className="flex items-center justify-center bg-emerald-800 rounded-md text-white px-4 py-1 flex-shrink-0"
            onClick={handleClick}
          >
            <span>전송</span>
          </button>
        </div>
      </div>
    </div>
  );
};

function STRAPI_ENDPOINT(STRAPI_ENDPOINT: any) {
  throw new Error("Function not implemented.");
}
function io(STRAPI_ENDPOINT: (STRAPI_ENDPOINT: any) => void) {
  throw new Error("Function not implemented.");
}
