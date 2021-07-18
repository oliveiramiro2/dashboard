import React from 'react'
import { connect } from 'react-redux'

import { changeCompany } from './../store/actions/TrocaEmpresa'

let symbolCompany = ''

const HeaderSearch = ({changeCompany}) => {
    
    React.useEffect(()=>{
        changeCompany(`https://cloud.iexapis.com/v1/stock/${symbolCompany}/quote/?token=pk_c778b6dbd2154d6fa15043568d469931`)
    }, [changeCompany])

    function GetInputValue(e){
        symbolCompany = e.target.value
    }

    function SetCompanyInformation(e, company){
        e.preventDefault(()=>{
            changeCompany(`https://cloud.iexapis.com/v1/stock/${company}/quote/?token=pk_c778b6dbd2154d6fa15043568d469931`)
        })
    }

    console.log('header', symbolCompany)

    return (
        <div className="form-group form-search">
            <form>
                <label className="pesquise-lb"><strong>Pesquise aqui</strong></label>
                <input type="search" onChange={e=>GetInputValue(e)} className="form-control ipt-search" id="exampleFormControlInput1" placeholder="Ex: aapl" />
                <button type="submit" onClick={e=>SetCompanyInformation(e, symbolCompany)} className="btn btn-info btn-search">Pesquisar</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return { informacoes: state.informacoes }
}

export default connect(mapStateToProps, { changeCompany })(HeaderSearch)
