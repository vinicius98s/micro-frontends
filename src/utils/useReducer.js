import store from "../store";

function useReducer(onUpdate, key) {
  const state = store.getState();
  const { dispatch } = store;

  if (onUpdate && typeof onUpdate === "function") {
    store.subscribe(() => {
      onUpdate(store.getState()[key]);
    });
  }

  return [state, dispatch];
}

export default useReducer;
