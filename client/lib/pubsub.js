const observe = () => {
  let actions = {};

  return {
    subscribe: (action, l) => {
      if (actions.hasOwnProperty(action) === false) {
        actions[action] = [l];
      } else {
        actions[action].push(l);
      }
    },

    publish: action => {
      if (actions.hasOwnProperty(action)) {
        actions[action].forEach(l => l());
      } else {
        console.warn(`no action matches ${action}`);
      }
    }
  };
};

export default observe;
