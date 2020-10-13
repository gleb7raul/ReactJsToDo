import { combineReducers } from 'redux';
import show from './show';
import ratingSearch from './ratingSearch';

const rootReducer = combineReducers({ show, ratingSearch });

export default rootReducer;
