import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "Smile",
  "👍": "Like",
  "😒": "Sad",
  "💕": "Love",
  "🤟": "I LOVE YOU",
  "😮": "Surprise",
  "☠": "Danger",
  "✌": "Victory",
  "👌": "Awesome",
  "🤝": "Handshake",
  "👏": "Clapping"
};
var emojiWeknow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "we dont know";
    }
    setMeaning(meaning);
  }
  function emojiClicktHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> Emoji Translater </h1>

      <input onChange={emojiInputHandler} />

      <h2> {meaning} </h2>
      <h3>Emoji we know</h3>
      {emojiWeknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClicktHandler(emoji)}
            style={{
              fontSize: "2rem",
              padding: "1rem",
              cursor: "pointer ",
              borderRadius: "1rem"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
