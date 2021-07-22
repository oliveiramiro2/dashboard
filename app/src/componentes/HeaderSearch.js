import React from 'react'
import { connect } from 'react-redux'

import { changeCompany } from './../store/actions/TrocaEmpresa'
import { changeSymbol } from './../store/actions/TrocaSimbolo'

const HeaderSearch = ({simbolo, changeCompany, changeSymbol}) => {
    
    //capturando o simbolo da empresa com um hook
    const [ symbol, setSymbol ] = React.useState({symbol: ''}) // criando o hook

    function GetInputValue(e){
        setSymbol({symbol: e.target.value})                         // capturando a informacao
    }

    function SetCompanyInformation(e){
        e.preventDefault()                                          // parando o refresh da pagina e chamando a funcao
        changeSymbol(symbol.symbol)                              // que troca as informações da empresa
        changeCompany(
            `https://cloud.iexapis.com/v1/stock/${simbolo.simbolo}/quote/?token=pk_c778b6dbd2154d6fa15043568d469931`
        )
    }

    /*setInterval(()=>{
        if(simbolo.simbolo)
            changeCompany(`https://cloud.iexapis.com/v1/stock/${simbolo.simbolo}/quote/?token=pk_c778b6dbd2154d6fa15043568d469931`)
    }, 2000)*/

    /*React.useEffect(()=> {
        setInterval(()=>{
            if(simbolo.simbolo)
                changeCompany(`https://cloud.iexapis.com/v1/stock/${simbolo.simbolo}/quote/?token=pk_c778b6dbd2154d6fa15043568d469931`)
        }, 2000)
    }, [simbolo, changeCompany])*/

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
