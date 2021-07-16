import axios from 'axios'

const busca = ()=>{
    axios.get('https://cloud.iexapis.com/v1/stock/aapl/quote/?token=pk_c778b6dbd2154d6fa15043568d469931')
        .then(info => {
            console.log(info.data)
            return info.data
        })
}


const initialState = {
    informacoes : [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
          },
          {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
          },
          {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
          },
          {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
          }
    ]

    //informacoes : busca
}

const valoresReducer = (state=initialState.informacoes, action) => {
    if(action.type === 'TROCA_EMPRESA'){
        return [ 
            ...state,
            action.empresa 
        ]
    }
    return state
}

export default valoresReducer