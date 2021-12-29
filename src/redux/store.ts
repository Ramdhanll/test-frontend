import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import ReduxThunk from 'redux-thunk'
import rootReducer from './rootReducer'

const createStoreWithMiddleware = applyMiddleware(
   promiseMiddleware,
   ReduxThunk
)(createStore)

const store = createStoreWithMiddleware(rootReducer)

export default store
