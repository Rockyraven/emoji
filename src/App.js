import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [likeCounter, setLikeCounter] = useState(0);

  //var likeCounter = 0;
  function likeClickHandler() {
    var newLikeCounterhandler = likeCounter + 1;
    setLikeCounter(newLikeCounterhandler);
  }
  // likeCounter = likeCounter + 1;
  //console.log("clicked" , likeCounter);

  return (
    <div className="App">
      <h1>emoji</h1>
      <button onClick={likeClickHandler}> Like! </button> {likeCounter}
    </div>
  );
}
