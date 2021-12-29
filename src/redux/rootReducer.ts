import { combineReducers } from 'redux'
import cart from './cart/cartReducer'

const rootReducer = combineReducers({
   cart,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
