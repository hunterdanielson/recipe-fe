import { createStore } from 'redux';
import reducer, { initialState } from './reducers/appReducer';

const store = createStore(
  reducer,
  initialState
);
export default store;
