import React from 'react'
import { connect } from 'react-redux'
import { FaFacebook, FaTwitter } from 'react-icons/fa'
import { SiFord, SiVisa, SiMcdonalds } from 'react-icons/si'
import { AiOutlineApple } from 'react-icons/ai'

import { changeCompany } from './../store/actions/TrocaEmpresa'
import { changeSymbol } from './../store/actions/TrocaSimbolo'

function NavbarAcoes({ changeCompany, changeSymbol, simbolo }){
    const showExample = empresa => {
        changeSymbol(empresa)
        changeCompany(
            `https://cloud.iexapis.com/v1/stock/${empresa}/quote/?token=pk_c778b6dbd2154d6fa15043568d469931`
        )
    }

    return(
        <nav className='container-exemplo'>
            <h5 className='info-exemplo'>Empresas Conhecidas</h5> 
            <div className='div-exemplo'>
                <p className='icone-exemplo face' onClick={()=>showExample('fb')}>
                    <FaFacebook className='icon-ex' />
                </p>
                <p className='icone-exemplo ford' onClick={()=>showExample('f')}>
                    <SiFord className='icon-ex' />
                </p>
                <p className='icone-exemplo twitter' onClick={()=>showExample('twtr')}>
                    <FaTwitter className='icon-ex' />
                </p>
                <p className='icone-exemplo mcdonald' onClick={()=>showExample('mcd')}>
                    <SiMcdonalds className='icon-ex' />
                </p>
                <p className='icone-exemplo visa' onClick={()=>showExample('v')}>
                    <SiVisa className='icon-ex' />
                </p>
                <p className='icone-exemplo apple' onClick={()=>showExample('aapl')}>
                    <AiOutlineApple className='icon-ex' />
                </p> 
            </div>
            
        </nav>
    )
}

const mapStateToProps = state => {
    return { informacoes: state.informacoes, simbolo: state.simbolo }
}

export default connect(mapStateToProps, { changeCompany, changeSymbol })(NavbarAcoes)