import {combineReducers} from 'redux';
import userInfo from './userInfo';
import assetAllocation from './assetAllocation';

const rootReducer = combineReducers({
  userInfo,
  assetAllocation
});

export default rootReducer;