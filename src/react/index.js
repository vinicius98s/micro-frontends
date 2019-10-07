import React from "react";

import routes from "../routes";
import Counter from "./components/Counter";

export default function App() {
  return (
    <>
      <h1>React App</h1>
      <Counter />
      <button onClick={() => routes.to("/vue")}>Go check the counter</button>
    </>
  );
}
