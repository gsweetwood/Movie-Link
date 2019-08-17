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
          <th>TV Show</th>
          <th>Movie</th>
          <th>Character</th>
        </tr>
        {props.castList.map(credit => {
          return (
            <tr
              className="credit-row"
              onClick={() => {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
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
              <td>{credit.name || "-"}</td>
              <td>{credit.original_title || "-"}</td>
              <td>{credit.character || "not listed"}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Details;
