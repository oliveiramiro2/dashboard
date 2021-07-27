import React from 'react'
import { connect } from 'react-redux'

import { FcShop } from 'react-icons/fc'
import { VscSymbolString } from 'react-icons/vsc'
import { AiOutlineDollar } from 'react-icons/ai'
import { TiArrowDownOutline, TiArrowUpOutline } from 'react-icons/ti'

function InfoDashboard({ informacoes }){
    // imprimindo as informacoes da empresa consultada
    const [data, setData] = React.useState(null)
    if(informacoes && informacoes[0] !== data)
        setData(informacoes[informacoes.length-1])                     //informacoes que serao usadas na descricao

    return (
        <div className='info-company'>
            {data ?
                <ul className='lista-informacao'>
                    <li>
                        <p className='icone-grafico'><FcShop className='animar' /></p>
                        Nome da empresa: <strong>{data.informacoes.companyName}</strong>
                    </li>
                    <li>
                        <p className='icone-grafico'><VscSymbolString className='animar' /></p>
                        Simbolo: <strong>{data.informacoes.symbol}</strong>
                    </li>
                    <li className='latest-price'>
                        <p className='icone-grafico'><AiOutlineDollar className='animar' /></p>
                        Latest Price  (gráfico): <strong>{data.informacoes.latestPrice}</strong>
                    </li>
                    <li className='high'>
                        <p className='icone-grafico'><TiArrowUpOutline className='animar' /></p>
                        High  (gráfico): <strong>{data.informacoes.high}</strong>
                    </li>
                    <li>
                        <p className='icone-grafico'><TiArrowDownOutline className='animar' /></p>
                        Low: <strong>{data.informacoes.low}</strong>
                    </li>
                </ul>
            :
                <p> Clique no ícone ou busque uma empresa </p>
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