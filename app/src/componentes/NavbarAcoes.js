import React from 'react'
import { connect } from 'react-redux'
import { FaFacebook, FaTwitter } from 'react-icons/fa'
import { SiFord, SiVisa, SiMcdonalds } from 'react-icons/si'
import { AiOutlineApple } from 'react-icons/ai'

import { changeCompany } from './../store/actions/TrocaEmpresa'

function NavbarAcoes({ changeCompany }){
    const showExample = empresa => {
        changeCompany(
            `https://cloud.iexapis.com/v1/stock/${empresa}/quote/?token=pk_c778b6dbd2154d6fa15043568d469931`
        )
    }

    return(
        <nav>
            <h5 className='info-exemplo'>Empresas Conhecidas</h5> 
            <div className='div-exemplo'>
                <p className='icone-exemplo face' onClick={()=>showExample('fb')}>
                    <FaFacebook />
                </p>
                <p className='icone-exemplo ford' onClick={()=>showExample('f')}>
                    <SiFord />
                </p>
                <p className='icone-exemplo twitter' onClick={()=>showExample('twtr')}>
                    <FaTwitter />
                </p>
                <p className='icone-exemplo mcdonald' onClick={()=>showExample('mcd')}>
                    <SiMcdonalds />
                </p>
                <p className='icone-exemplo visa' onClick={()=>showExample('v')}>
                    <SiVisa />
                </p>
                <p className='icone-exemplo apple' onClick={()=>showExample('aapl')}>
                    <AiOutlineApple />
                </p> 
            </div>
            
        </nav>
    )
}

const mapStateToProps = state => {
    return { informacoes: state.informacoes }
}

export default connect(mapStateToProps, { changeCompany })(NavbarAcoes)