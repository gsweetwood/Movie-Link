import React from "react";
import "./Styles/App.scss";
import MovieSearch from "./Components/MovieSearch";

function App() {
  return (
    <>
      <header className="header">
        <h1>Movie-Link</h1>
        <h2>Where do I know them from...?</h2>
      </header>
      <main>
        <MovieSearch />
      </main>
    </>
  );
}

export default App;
