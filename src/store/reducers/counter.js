import { ADD_COUNTER, DECREASE_COUNTER } from "../actions/counter";

export default function counter(state = 0, action) {
  switch (action.type) {
    case ADD_COUNTER:
      return state + action.value;
    case DECREASE_COUNTER:
      return state - action.value;
    default:
      return state;
  }
}
