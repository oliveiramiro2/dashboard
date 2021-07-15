import axios from 'axios'

function busca(chave = 'aapl'){
    try{
        const url= `https://cloud.iexapis.com/v1/stock/${chave}/quote/?token=pk_c778b6dbd2154d6fa15043568d469931`
            axios.get(url)
                .then(info => {
                    return info
                })
    }catch{
        console.log('deu ruim')
    }
    
    
}
const t = busca
console.log(t)

const initialState = {
    
    informacoes : t,
}

const valoresReducer = (state=initialState.informacoes, action) => {
    if(action.type === 'TROCA_EMPRESA'){
        return {
            state,
            informacoes: action.empresa
        }
    }
    console.log('1 '+state.informacoes)
    return state
}

export default valoresReducer