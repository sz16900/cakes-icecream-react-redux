const buyIceCreamsReducer = (state = 20, action) => {
  switch (action.type) {
    case 'BUY_ICECREAM':
      // Think about passing a copy for later like: ...state
      return state - 1;

    default:
      return state;
  }
};

export default buyIceCreamsReducer;
