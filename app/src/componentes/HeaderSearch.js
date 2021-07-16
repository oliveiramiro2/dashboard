import React from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'

import axios from 'axios'

import { changeCompany } from './../store/actions/TrocaEmpresa'

const HeaderSearch = ({informacoes}) => {
    const dispatch = useDispatch()
    const inf = useSelector(state => state)
    const loadCompany = (e) => {
        if(e.target.value !== ''){
            try{
                const url= 'https://cloud.iexapis.com/v1/stock/'+e.target.value+'/quote/?token=pk_c778b6dbd2154d6fa15043568d469931'
                axios.get(url)
                    .then(res =>{
                        //const info = res.data
                        dispatch(changeCompany(res.data))
                        console.log(res.data) 
                        console.log(informacoes.then(info => info.results))
                    })
                
            }catch{
                console.log('deu ruim')
            }
        }
        
    }

    console.log(inf.informacoes)
    return (
        <div className="form-group form-search">
            <form>
                <label className="pesquise-lb"><strong>Pesquise aqui</strong></label>
                <input type="search" onChange={(e)=>loadCompany(e)} className="form-control ipt-search" id="exampleFormControlInput1" placeholder="Ex: aapl" />
                <button type="submit" className="btn btn-info btn-search">Pesquisar</button>
            </form>
        </div>
    )
}

export default connect(state => ({informacoes:state.informacoes}))(HeaderSearch)
