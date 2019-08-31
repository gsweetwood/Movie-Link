import React from "react";

const Details = props => {
  const onChoose = (name, id, type, imagePath) => {
    props.onChooseFromSearch(name, id, type, imagePath);
  };

  return (
    <div className="details-container">
      <h3>Credits</h3>
      <table>
        <tr>
          <th>{props.selection.type === "person" ? "TV Show" : "Actor"}</th>
          <th>{props.selection.type === "person" ? "Movie" : ""}</th>
          <th>Character</th>
        </tr>
        {props.castList.map(credit => {
          return (
            <tr
              className="credit-row"
              onClick={() => {
                if (props.selection.type === "person") {
                  onChoose(
                    credit.original_title,
                    credit.id,
                    credit.media_type,
                    credit.poster_path
                  );
                } else {
                  onChoose(
                    credit.name,
                    credit.id,
                    "person",
                    credit.profile_path
                  );
                }
              }}
            >
              <td>
                <a href="#movie-search-term">{credit.name || ""}</a>
              </td>
              <td>
                <a href="#movie-search-term">{credit.original_title || ""}</a>
              </td>
              <td>
                <a href="#movie-search-term">
                  {credit.character || "not listed"}
                </a>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Details;
