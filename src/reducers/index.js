import {combineReducers} from 'redux';
import userInfo from './userInfo';
import assetAllocation from './assetAllocation';
import moves from './moves';

const rootReducer = combineReducers({
  userInfo,
  assetAllocation,
  moves
});

export default rootReducer;