import store from "../store";

function useReducer() {
  const state = store.getState();
  const { dispatch } = store;

  return [state, dispatch];
}

export default useReducer;
