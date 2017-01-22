import { combineReducers } from 'redux'
import authentication from './authentication/reducer'
import article from './articles/reducer'

const rootReducer = combineReducers({
    authentication,
    article
});

export default rootReducer
