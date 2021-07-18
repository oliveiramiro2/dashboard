import React from 'react'
import { connect } from 'react-redux'
//import axios from 'axios'

import { LineChart, XAxis, CartesianGrid, Line } from 'recharts'
//import { changeCompany } from './../store/actions/TrocaEmpresa'

function DashBoardAcoes(informacoes){
    const data = [{
        'companyName': 'aapl',
        'latestPrice': 178
    }]

    console.log('dashboard', informacoes.informacoes.informacoes)
    return (
        <div>
            <LineChart width={500} height={300} data={data}>
                <XAxis dataKey="companyName"/>
                <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                <Line type="monotone" dataKey="latestPrice" stroke="#8884d8" />
            </LineChart>
        </div>

    )
}

const mapStateToProps = state => {
    return { informacoes: state.informacoes }
}

export default connect(mapStateToProps)(DashBoardAcoes)
