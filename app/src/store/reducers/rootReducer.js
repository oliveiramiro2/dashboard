import { combineReducers } from 'redux'

import valoresReducer from './valores'

const rootReducer = combineReducers({
   informacoes : valoresReducer
})

export default rootReducer