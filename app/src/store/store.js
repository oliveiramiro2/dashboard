import { applyMiddleware, createStore } from 'redux'
import ReduxPromise from 'redux-promise'

import { rootReducer } from './reducers/rootReducer'

export const store = createStore(rootReducer, applyMiddleware(ReduxPromise))