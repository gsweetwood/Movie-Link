import React, { useState, useEffect } from "react";
import Results from "./Results";
import Selection from "./Selection";
import Details from "./Details";
import confusedImg from "../images/confused.png";

console.log(process.env.REACT_APP_ACTOR_APP_API_KEY);
const MovieSearch = props => {
  const [searchTerm, setSearchTerm] = useState("");
  const [resultList, setResultList] = useState([]);
  const [activeSelection, setActiveSelection] = useState({});
  const [selectionDetails, setSelectionDetails] = useState([]);

  const onChooseFromSearch = (selection, id, type, imagePath) => {
    setActiveSelection({
      name: selection,
      id: id,
      type: type,
      imagePath: imagePath
    });
    setResultList([]);
    setSearchTerm("");
  };

  const getSelectionDetails = () => {
    if (typeof activeSelection.id === "undefined") {
      return;
    }
    let type = activeSelection.type;
    let creditType = "credits";
    if (type === "person") {
      creditType = "combined_credits";
    }

    let id = activeSelection.id;

    fetch(`${baseUrl}/${type}/${id}/${creditType}?api_key=${api_key}`)
      .then(response => {
        console.log(`fetched: getSelectionDetails`);
        return response.json();
      })
      .then(data => {
        setSelectionDetails(data.cast);
        setSearchTerm("");
        console.log(`new details set`);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleInput = e => {
    setSearchTerm(e.target.value);
  };

  const enterPressed = e => {
    var code = e.keyCode || e.which;
    if (code === 13) {
      handleSearchMovie();
    }
  };

  const baseUrl = "https://api.themoviedb.org/3";
  const api_key = process.env.REACT_APP_ACTOR_APP_API_KEY;

  const handleSearchMovie = () => {
    if (searchTerm !== "") {
      fetch(
        `${baseUrl}/search/multi?api_key=${api_key}&language=en-US&query=${searchTerm}&page=1&incluede_adult=false`
      )
        .then(response => {
          return response.json();
        })
        .then(data => {
          setResultList(data.results);
          setActiveSelection({});
          setSelectionDetails([]);
        })
        .catch(error => {
          console.log(`ERROR!`);
          console.error(error);
        });
      console.log(`Executing multi search`);
    }
  };

  useEffect(() => {
    getSelectionDetails();
  }, [activeSelection]);

  return (
    <div className="movie-search">
      <span className="search-box" id="movie-search-term">
        <input
          type="text"
          placeholder="Enter an actor/movie/tv show"
          onChange={handleInput}
          value={searchTerm}
          onKeyPress={enterPressed}
        />
        <button onClick={handleSearchMovie}>SEARCH</button>
      </span>

      <Results results={resultList} onChooseFromSearch={onChooseFromSearch} />
      {!activeSelection.name ? (
        <img className="confused-pic" src={confusedImg} />
      ) : (
        <Selection
          selectionName={activeSelection.name}
          imagePath={activeSelection.imagePath}
        />
      )}
      {typeof selectionDetails === undefined ||
      selectionDetails.length === 0 ? (
        <p hidden>No details yet</p>
      ) : (
        <Details
          selection={activeSelection}
          castList={selectionDetails}
          onChooseFromSearch={onChooseFromSearch}
        />
      )}
    </div>
  );
};

export default MovieSearch;
