import {  combineReducers } from 'redux';
import filtersReducers from './filters';
import videosReducers from './videos';

const rootReducers = combineReducers({filtersReducers, videosReducers})


export default rootReducers