import React from 'react'
import { connect } from 'react-redux'

import { changeCompany } from './../store/actions/TrocaEmpresa'
import { changeSymbol } from './../store/actions/TrocaSimbolo'
import { intervalo } from './DashBoardAcoes'

let choice = 0

const HeaderSearch = ({simbolo, changeCompany, changeSymbol}) => {
    
    //capturando o simbolo da empresa com um hook
    const [ symbol, setSymbol ] = React.useState({symbol: ''}) // criando o hook

    function GetInputValue(e){
        setSymbol({symbol: e.target.value})                         // capturando a informacao
    }

    function SetCompanyInformation(e){
        e.preventDefault()                                          // parando o refresh da pagina e chamando a funcao
        if(symbol.symbol === simbolo){                              // que troca as informações da empresa
            choice = 0
        }else{
            choice = 1
            clearInterval(intervalo)
            changeSymbol(symbol.symbol)                              
            changeCompany(
                `https://cloud.iexapis.com/v1/stock/${symbol.symbol}/quote/?token=pk_c778b6dbd2154d6fa15043568d469931`,
                choice
            )
        }
        
    }

    return (
        <div className="form-group form-search">
            <form onSubmit={ SetCompanyInformation }>
                <input 
                    type="search" 
                    onChange={ GetInputValue } 
                    autoComplete="off" 
                    className="form-control ipt-search" 
                    id="exampleFormControlInput1" 
                    placeholder="Ex: aapl" 
                />
                <button type="submit" className="btn btn-info btn-search">                   
                    <p className='btn-search-text'>                       
                        Pesquisar
                    </p>                   
                </button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return { simbolo: state.simbolo }
}

export default connect(mapStateToProps, { changeCompany, changeSymbol })(HeaderSearch)
