import React from "react";
import "./App.css";
import Photo from "./Profile/ProfilePhoto";
import Name from "./Profile/FullName";
import Address from "./Profile/Address";
function App() {
  return (
    <>
      <h1>React Components Checkpoint</h1>
      <Name />
      <Photo />
      <Address />
    </>
  );
}

export default App;
