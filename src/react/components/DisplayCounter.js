import React, { useEffect, useState } from "react";

import useReducer from "../../utils/useReducer";

export default function DisplayCounter() {
  const [counter, setCounter] = useState(0);
  useReducer(setCounter, "counter");

  return <h1>React display counter: {counter}</h1>;
}
