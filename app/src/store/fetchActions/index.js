import api from './../../services/api'
import { changeCompany } from './../actions/TrocaEmpresa'

export const consulta = () => {
    return dispatch => {
        api.get('aapl/quote/?token=pk_c778b6dbd2154d6fa15043568d469931')
            .then(res => {dispatch(changeCompany(res.data))})
            .catch(console.log)
    }
}