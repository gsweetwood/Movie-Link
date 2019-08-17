import React from "react";

const Movie = ({ movieName, releaseDate }) => {
  return (
    <div>
      <span className="movie-name">{movieName}</span> (
      {releaseDate.substring(0, 4)})
    </div>
  );
};

export default Movie;
