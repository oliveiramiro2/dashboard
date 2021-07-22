import React from 'react'
import { connect } from 'react-redux'

import { FcShop } from 'react-icons/fc'
import { VscSymbolString } from 'react-icons/vsc'
import { AiOutlineDollar } from 'react-icons/ai'
import { TiArrowDownOutline, TiArrowUpOutline } from 'react-icons/ti'

function InfoDashboard({ informacoes }){
    // imprimindo as informacoes da empresa consultada

    return (
        <div className='info-company'>
            {informacoes ?
                <ul className='lista-informacao'>
                    <li>
                        <p className='icone-grafico'><FcShop className='animar' /></p>
                        Nome da empresa: {informacoes.companyName}
                    </li>
                    <li>
                        <p className='icone-grafico'><VscSymbolString className='animar' /></p>
                        Simbolo: {informacoes.symbol}
                    </li>
                    <li className='latest-price'>
                        <p className='icone-grafico'><AiOutlineDollar className='animar' /></p>
                        Latest Price  (gráfico): {informacoes.latestPrice}
                    </li>
                    <li className='high'>
                        <p className='icone-grafico'><TiArrowUpOutline className='animar' /></p>
                        High  (gráfico): {informacoes.high}
                    </li>
                    <li>
                        <p className='icone-grafico'><TiArrowDownOutline className='animar' /></p>
                        Low: {informacoes.low}
                    </li>
                </ul>
            :
                < >
                </>
            } 
        </div> 

    )
}

const mapStateToProps = state => {
    return { 
        informacoes: state.informacoes
    }
}

export default connect(mapStateToProps)(InfoDashboard)