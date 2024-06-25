import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {}

  function search(event) {
    event.preventDefault();

    let apiKey = "cb77c04d96ad2oba3t437155800bf4f6";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Enter a word to search"
          autoFocus={true}
          onChange={handleKeywordChange}
        />
      </form>
    </div>
  );
}
