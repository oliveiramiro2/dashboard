import { configureStore } from '@reduxjs/toolkit'
import valoresReducer from './valores'

export default configureStore({
   reducer: {
      informacoes: valoresReducer
   }
})