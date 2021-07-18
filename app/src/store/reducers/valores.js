const initialState = {
    informacoes : []
}

const valoresReducer = (state=initialState.informacoes, action) => {
  switch(action.type){
    case 'TROCA_EMPRESA':
      return { informacoes: action.payload }
    default:
      return state
  }
}

export default valoresReducer