const store = reducer => {
  if (!reducer) throw Error("no reducer");
  let listeners = [];
  let state = [];
  const subscribe = l => listeners.push(l);
  const publish = () => listeners.forEach(l => l());
  const dispatch = action => {
    state = reducer(state, action);
    publish();
  };
  const getState = () => state;

  return {
    subscribe,
    dispatch,
    getState
  };
};

const reducer = (state, action) => {
  if (action.type === "add") return [...state, action.item];
  else return state;
};

export { store, reducer };
