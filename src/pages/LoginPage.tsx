import React, { useEffect, useState } from "react";
import { TextField } from "../components/TextField";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Button } from "../components/Button";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { push, replace } = useHistory();
  const history = useHistory();

  const checkUser = () => {
    if (email === "" || password === "") {
      alert("아이디와 비밀번호를 입력해주세요");
      return;
    }
    axios
      .post("http://localhost:1337/api/auth/local", {
        identifier: email,
        password: password,
      })
      .then((response: { data: { jwt: string } }) => {
        console.log("Login!");
        console.log("token", response.data.jwt);
        localStorage.setItem("token", response.data.jwt);
        replace("/");
      })
      .catch((error: { response: { data: { error: { message: any } } } }) => {
        console.log("error:", error.response.data.error.message);
        alert(error.response.data.error.message);
      });
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      replace("/");
    }
  }, []);

  return (
    <div className="m-4">
      <div>
        <img
          src="dorm.png"
          alt=""
          className="w-fit h-fit object-contain"
        />
      </div>

      <div className="bg-emerald-800 pb-20 pt-20">
        <div>
          <TextField
            className="w-4/5 h-16 mx-auto rounded-lg"
            labelClassname="font-medium text-2xl ml-16 text-white "
            label="이메일"
            placeholder="이메일을 입력해주세요."
            value={email}
            onChange={(event: { target: { value: any } }) => {
              setEmail(event.target.value);
            }}
          />
          <TextField
            className="w-4/5 h-16 mx-auto rounded-lg"
            labelClassname="font-medium text-2xl mt-4 ml-16 text-white "
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            type="password"
            value={password}
            onChange={(event: { target: { value: any } }) => {
              setPassword(event.target.value);
            }}
          />
        </div>

        <div className="mt-10">
          <div className="bg-black text-white text-center py-4 rounded-lg w-2/4 text-2xl mx-auto">
            <button
              onClick={() => {
                checkUser();
              }}
            >
              로그인
            </button>
          </div>

          <div className="text-center text-white text-2xl underline mt-10 mx-auto">
            <button onClick={() => history.push("/signup")}>회원가입</button>
          </div>
        </div>
      </div>
    </div>
  );
};
