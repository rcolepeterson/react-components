const Store = () => {
  const subscribe = () => {
    console.log("subscribe");
  };

  return {
    subscribe: subscribe
  };
};

export default Store;
