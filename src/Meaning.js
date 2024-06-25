import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <p>{props.meaning.definition}</p>
      <em>
        <p>{props.meaning.example}</p>
      </em>
    </div>
  );
}
