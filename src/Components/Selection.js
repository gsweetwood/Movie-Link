import React from "react";

const Selection = props => {
  console.log(`SELECTION PROPS`);
  console.log(props);
  return (
    <div className="selection-container">
      <div className="title-image">
        <div>{props.selectionName}</div>

        <img
          className="selection-image"
          alt="actor or show image"
          src={`https://image.tmdb.org/t/p/original${props.imagePath}`}
        />
      </div>
    </div>
  );
};

export default Selection;
