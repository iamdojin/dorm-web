import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { TextField } from "../components/TextField";

export const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { replace } = useHistory();

  const register = () => {
    axios
      .post("http://localhost:1337/api/auth/local/register", {
        username: name,
        email: email,
        password: password,
      })
      .then((response) => {
        // Handle success.
        console.log("Well done!");
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
        localStorage.setItem("token", response.data.jwt);
        replace("/login");
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
        alert(error.response.data.error.message);
      });
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      replace("/");
    }
  }, []);

  function matchPassword() {
    var pw1 = document.getElementById("pswd1");
    var pw2 = document.getElementById("pswd2");
    if (pw1 != pw2) {
      alert("Passwords did not match");
    } else {
      alert("Passwords confirmed successfully");
    }
  }

  return (
    <div className="m-4">
      <div className="text-3xl text-black font-semibold mt-10 ml-10">
        회원가입
      </div>

      <div className="mt-10 bg-emerald-800 pb-20 pt-20 space-y-4">
        <TextField
          className="w-4/5 h-16 mx-auto rounded-lg"
          labelClassname="font-medium text-xl ml-16 text-white "
          label="E-mail"
          placeholder="이메일을 입력해 주세요."
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <TextField
          className="w-4/5 h-16 mx-auto rounded-lg"
          labelClassname="font-medium text-xl ml-16 text-white "
          label="Password"
          placeholder="비밀번호를 입력해 주세요."
          value={password}
          name="pswd1"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <TextField
          className="w-4/5 h-16 mx-auto rounded-lg"
          placeholder="비밀번호를 한 번 더 입력해 주세요."
          name="pswd2"
        />
        <div className="text-white text-lg bg-black text-center rounded ml-80 mr-16 ">
          <button
            onClick={() => {
              matchPassword();
            }}
          >
            {" "}
            * Confirm Password
          </button>
        </div>

        <TextField
          className="w-4/5 h-16 mx-auto rounded-lg"
          labelClassname="font-medium text-xl ml-16 text-white "
          label="Nickname"
          placeholder="닉네임을 입력해 주세요."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </div>

      <div className="mt-10">
        <div className="bg-black text-white text-center text-2xl py-4 rounded-md w-1/2 mx-auto mb-64">
          <button
            onClick={() => {
              register();
            }}
          >
            {" "}
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};
