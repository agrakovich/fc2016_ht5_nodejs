import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducer'

const loggerMiddleware = createLogger()

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        ))

    if (module.hot) {
        module.hot.accept('../reducer', () => {
            const nextRootReducer = require('../reducer')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}
