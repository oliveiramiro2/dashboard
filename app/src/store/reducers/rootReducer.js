import { combineReducers } from 'redux'

import valoresReducer from './valores'

// criando um combine para caso haja mais de um reducer
export const rootReducer = combineReducers({
   informacoes: valoresReducer
})