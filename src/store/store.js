import { legacy_createStore as createStore, combineReducers } from 'redux'

import { productReducer } from './reducers/product.reducer.js'
import { userReducer } from './reducers/user.reducer.js'

const rootReducer = combineReducers({
    productModule: productReducer,
     userModule: userReducer,
})

const middleware = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : undefined
export const store = createStore(rootReducer, middleware)