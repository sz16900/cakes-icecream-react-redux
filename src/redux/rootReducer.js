import { combineReducers } from 'redux';
import cakeReducer from './cake/cakeReducer';
import iceCreamReducer from './iceCream/iceCreamReducer';

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: iceCreamReducer,
});

export default rootReducer;
