import React from "react";
import TVShow from "./TVShow";
import Movie from "./Movie";
import Person from "./Person";

const Results = props => {
  const handleSelection = (name, id, type, imagePath) => {
    props.onChooseFromSearch(name, id, type, imagePath);
  };

  return (
    <div className="results">
      {props.results.length > 0 ? (
        <div>
          <h2>Did you mean...</h2>
          <div className="results-legend">
            <div className="tvShow-blue" />
            <span> = TV Show</span>
            <div className="movie-red" />
            <span> = Movie</span>
            <div className="person-green" />
            <span> = Actor</span>
          </div>
        </div>
      ) : null}

      <ul className="result-list">
        {props.results.map(result => {
          if (result.media_type === "tv") {
            return (
              <li
                className="result-item tv-show"
                key={result.id}
                onClick={() =>
                  handleSelection(
                    result.name,
                    result.id,
                    result.media_type,
                    result.poster_path
                  )
                }
              >
                <TVShow tvShowName={result.name} />
              </li>
            );
          } else if (result.media_type === "movie") {
            return (
              <li
                className="result-item movie"
                key={result.id}
                onClick={() =>
                  handleSelection(
                    result.title,
                    result.id,
                    result.media_type,
                    result.poster_path
                  )
                }
              >
                <Movie
                  movieName={result.title}
                  releaseDate={result.release_date}
                />
              </li>
            );
          } else if (result.media_type === "person") {
            return (
              <li
                className="result-item person"
                key={result.id}
                onClick={() =>
                  handleSelection(
                    result.name,
                    result.id,
                    result.media_type,
                    result.profile_path
                  )
                }
              >
                <Person className="person" personName={result.name} />
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Results;
