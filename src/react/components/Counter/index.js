import React from "react";

import useReducer from "../../../utils/useReducer";
import { addCounter, decreaseCounter } from "../../../store/actions/counter";

export default function Counter() {
  const [store, dispatch] = useReducer();

  return (
    <>
      <button onClick={() => dispatch(addCounter(1))}>add to counter</button>
      <br />
      <button onClick={() => dispatch(decreaseCounter(1))}>
        decrease to counter
      </button>
      <br />
      <br />
    </>
  );
}
