import buyIceCreamsReducer from './buyIceCreams';
import buyCakesReducer from './buyCakes';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  cakes: buyCakesReducer,
  icecreams: buyIceCreamsReducer,
});

export default allReducers;
