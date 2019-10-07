export const ADD_COUNTER = "ADD_COUNTER";
export const DECREASE_COUNTER = "DECREASE_COUNTER";

export function addCounter(value) {
  return {
    type: ADD_COUNTER,
    value
  };
}

export function decreaseCounter(value) {
  return {
    type: DECREASE_COUNTER,
    value
  };
}
