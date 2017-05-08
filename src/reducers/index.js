import { combineReducers } from 'redux';
import counter from './counter.reducer';

const allReducers = combineReducers({
  counter: counter
});

export default allReducers;
