const buyCakesReducer = (state = 10, action) => {
  switch (action.type) {
    case 'BUY_CAKE':
      // Think about passing a copy for later like: ...state
      return state - 1;
    default:
      return state;
  }
};

export default buyCakesReducer;
