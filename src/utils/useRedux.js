import store from "../store";

export default function useRedux(onUpdate, key) {
  const state = store.getState();
  const { dispatch } = store;

  const stateAndDispatch = {
    state,
    dispatch
  };

  if (onUpdate && typeof onUpdate === "function") {
    const unsubscribe = store.subscribe(() => {
      onUpdate(store.getState()[key]);
    });

    return {
      ...stateAndDispatch,
      unsubscribe
    };
  }

  return stateAndDispatch;
}
