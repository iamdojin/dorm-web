import React from "react";

const IMAGE_URL = "http://localhost:1337";

type MovieCardProps = {
  movie: any;
};

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  console.log(movie);

  return (
    <div className="flex space-x-3">
      <img
        src={`${IMAGE_URL}${movie.attributes.thumbnail.data.attributes.url}`}
        alt=""
        className="w-20 h-50 object-cover rounded-xl"
      />
      <div className="mt-4">
        <div className="text-lg flex flex-row font-semibold">
          {movie.attributes.name}
        </div>
        <div className="text gray-500 truncate-2-lines">
          {movie.attributes.description}
          <div className="text-xs text-gray-400">{`등록일: ${movie.attributes.createdAt}`}</div>
        </div>
      </div>
    </div>
  );
};
