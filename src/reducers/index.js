import changeActiveLink from './regActiveLink';
import changeSearch from './forSearch';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    changeActiveLink,
    changeSearch
})
export default rootReducer;