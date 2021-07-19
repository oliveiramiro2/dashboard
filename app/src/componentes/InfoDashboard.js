import React from 'react'
import { connect } from 'react-redux'

function InfoDashboard({ informacoes }){
    // imprimindo as informacoes da empresa consultada

    return (
        <div className='info-company'>
            {informacoes ?
                    <ul className='lista-informacao'>
                        <li>Nome da empresa: {informacoes.companyName}</li>
                        <li>Simbolo: {informacoes.symbol}</li>
                        <li className='latest-price'>Latest Price  (gráfico): {informacoes.latestPrice}</li>
                        <li className='low'>High  (gráfico): {informacoes.high}</li>
                        <li>Low: {informacoes.low}</li>
                    </ul>
                :
                    < >
                    </ >
            } 
        </div> 

    )
}

const mapStateToProps = state => {
    return { informacoes: state.informacoes.informacoes }
}

export default connect(mapStateToProps)(InfoDashboard)