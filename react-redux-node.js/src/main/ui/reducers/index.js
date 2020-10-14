import { combineReducers } from 'redux';
import show from './show';
import ratingSearch from './ratingSearch';
import list from './list';

const rootReducer = combineReducers({ show, ratingSearch, list });

export default rootReducer;
