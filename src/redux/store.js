import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlise';
import { filterReduser } from './filterSlice';

const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReduser,
});
export const store = configureStore({
  reducer: reducer,
});
