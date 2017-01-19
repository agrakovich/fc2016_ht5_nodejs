import { combineReducers } from 'redux';

import authentication from '../authentication/reducer';
import article from '../article/reducer';

const rootReducer = combineReducers({
    authentication,
    article
});

export default rootReducer;
