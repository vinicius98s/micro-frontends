import React from "react";
import routes from "../routes";

export default function App() {
  return (
    <>
      <h1>React App</h1>
      <button onClick={() => routes.to("/vue")}>Go to vue page</button>
    </>
  );
}
