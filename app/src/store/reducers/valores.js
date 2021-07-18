// statos inicial de informacoes
const initialState = {
    informacoes : []
}

// funcao que troca os valores do reducer
const valoresReducer = (state=initialState.informacoes, action) => {
  switch(action.type){
    case 'TROCA_EMPRESA':
      return { informacoes: action.payload }
    default:
      return state
  }
}

export default valoresReducer