import { createReducer } from '@reduxjs/toolkit'
import { changeCompany, teste } from './../actions/TrocaEmpresa'
import { consulta } from './../fetchActions/index'

/*async function busca() {
    const res = await axios.get('https://cloud.iexapis.com/v1/stock/aapl/quote/?token=pk_c778b6dbd2154d6fa15043568d469931')
    return res.data
}*/


const initialState = {
    /*informacoes : [
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
    ]*/

    informacoes : consulta()
}

export default createReducer(initialState, {
    [changeCompany.type]: (state, action) => [ ...state, action.payload ],
    [teste.type]: (state, action) => [ ...action.payload ]
})