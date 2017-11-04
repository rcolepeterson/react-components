/**
 * Simple pub sub code.
 */
const observe = () => {
  let actions = {};

  return {
    /**
     * action {string} What u want to know about.
     * l - {function} Callback.
     */
    subscribe: (action, l) => {
      if (!l){
        return new Error('no callback');
      }
      // if no .. create
      if (actions.hasOwnProperty(action) === false) {
        actions[action] = [l];
      } else {
        actions[action].push(l);
      }
    },
    /**
     * Dispatch msg.
     * action {string} string to broadcast.
     * value {*} Item to pass thru callback.
     */
    publish: (action, value) => {
      if (actions.hasOwnProperty(action)) {
        actions[action].forEach(l => l(value));
      } else {
        console.warn(`no action matches ${action}`);
      }
    }
  };
};

export default observe;
