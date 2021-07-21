import React from 'react'
import { connect } from 'react-redux'

import { changeCompany } from './../store/actions/TrocaEmpresa'

const HeaderSearch = ({changeCompany}) => {
    
    //capturando o simbolo da empresa com um hook
    const [ symbol, setSymbol ] = React.useState({symbol: 'aapl'}) // criando o hook

    function GetInputValue(e){
        setSymbol({symbol: e.target.value})                         // capturando a informacao
    }

    function SetCompanyInformation(e){
        e.preventDefault()                                          // parando o refresh da pagina e chamando a funcao
                                                                    // que troca as informações da empresa
        changeCompany(
            `https://cloud.iexapis.com/v1/stock/${symbol.symbol}/quote/?token=pk_c778b6dbd2154d6fa15043568d469931`
        )
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
    return { informacoes: state.informacoes }
}

export default connect(mapStateToProps, { changeCompany })(HeaderSearch)
