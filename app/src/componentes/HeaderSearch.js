import React, { Component } from 'react'
import { connect } from 'react-redux'

import axios from 'axios'

import { changeCompany } from './../store/actions/TrocaEmpresa'

export class HeaderSearch extends Component {
    loadCompany = (e) => {
        try{
            const url= 'https://cloud.iexapis.com/v1/stock/'+e.target.value+'/quote/?token=pk_c778b6dbd2154d6fa15043568d469931'
            axios.get(url)
                .then(res =>{
                    //const info = res.data
                    changeCompany(this.state.informacoes) 
                })
            
        }catch{
            console.log('deu ruim')
       }
    }

    render() {
        return (
            <div className="form-group form-search">
                <form>
                    <label className="pesquise-lb"><strong>Pesquise aqui</strong></label>
                    <input type="search" className="form-control ipt-search" id="exampleFormControlInput1" placeholder="Ex: aapl" />
                    <button type="submit" className="btn btn-info btn-search">Pesquisar</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    informacao : state.valoresReducer
})

const mapDispatchToProps = () => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSearch)
