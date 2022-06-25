import React, { useEffect, useState } from "react";
import { CategoryButton } from "../components/CategoryButton";
import { MovieCard } from "../components/MovieCard";
import popularImg from "../assets/images/popcorn.png";
import nowPlayingImg from "../assets/images/seats.jpeg";
import axios from "axios";
import { replaceEqualDeep } from "react-query/types/core/utils";
import { useHistory } from "react-router-dom";

const API_KEY = "c275787762fb2904adb52c4ad6412662";

export type Category = {
  id: number;
  label: string;
  url: string;
  image: string;
};

const CATEGORY_LIST = [
  { id: 0, label: "인기영화", url: "/popular", image: popularImg },
  { id: 1, label: "현재 상영작", url: "/now_playing", image: nowPlayingImg },
];

export type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
};

export const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState<any[]>([]);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const { push, replace } = useHistory();
  const history = useHistory();

  const setCategory = (index: number) => {
    setCategoryIndex(index);
  };

  const getData = async (categoryIndex: number) => {
    axios
      .get("http://localhost:1337/api/movies?populate=%2A", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        // Handle success.
        console.log("Data: ", response.data);
        setMovies(response.data.data);
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
    setIsLoading(false);
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      replace("/login");
    }
    getData(categoryIndex);
  }, [categoryIndex]);

  return (
    <div className="m-4">
      <div
        className="p-5 border border-emerald-800 rounded mb-10"
        onClick={() => history.push("/notice")}
      >
        <div className="text-2xl font-medium">공지사항</div>
        <p className="mt-3 text-gray-700 text-sm">공지사항입니다.</p>
      </div>

      <div className="flex justify-end space-x-4 mr-5 mb-5">
        <button onClick={() => history.push("/post")}>
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
            <path d="M12 5V19" />
            <path d="M5 12H19" />
          </svg>{" "}
        </button>
        <button onClick={() => history.push("/join")}>
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
        </button>
      </div>

      <div>
        <div className="space-y-2">
          <div
            className="bg-emerald-100 shadow-lg rounded-lg px-6 py-6 cursor-pointer"
            onClick={() => history.push("/comment")}
          >
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                iamdojin{" "}
              </h2>
              <small className="text-sm text-gray-700 ">22h ago</small>
            </div>
            <p className="mt-3 text-gray-700 text-sm">
                  오늘 저녁에 반짓고리 빌려주실 분! 
          </p>
          <p className="font-semibold"> #1000 </p>
            <div className="mt-4 ">
              <div className="flex text-gray-700 text-sm ">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
                <span>2</span>
              </div>
            </div>
          </div>
          <div className="bg-emerald-100 shadow-lg rounded-lg px-6 py-6 ">
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                hello{" "}
              </h2>
              <small className="text-sm text-gray-700 ">22h ago</small>
            </div>
            <p className="mt-3 text-gray-700 text-sm">
                  내일 하루 검은색 구두 빌려주실 분 있을까요? 사이즈는 240입니다
          </p>
          <p className="font-semibold"> #3000 </p>
            <div className="mt-4 ">
              <div className="flex text-gray-700 text-sm ">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
                <span>8</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
