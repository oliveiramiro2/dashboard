import { combineReducers } from 'redux'

import valoresReducer from './valores'

export const rootReducer = combineReducers({
   informacoes: valoresReducer
})