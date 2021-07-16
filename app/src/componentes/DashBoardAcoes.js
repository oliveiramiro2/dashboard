import React from 'react'
import { connect } from 'react-redux'
//import axios from 'axios'

import { LineChart, XAxis, CartesianGrid, Line } from 'recharts'
//import { changeCompany } from './../store/actions/TrocaEmpresa'

function DashBoardAcoes(informacoes){

    return (
        <div>
            <LineChart width={500} height={300} data={informacoes.informacoes}>
                <XAxis dataKey="companyName"/>
                <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                <Line type="monotone" dataKey="latestPrice" stroke="#8884d8" />
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                <Line type="monotone" dataKey="amt" stroke="#8884d8" />
            </LineChart>
        </div>

    )
}

export default connect(state => ({informacoes:state.informacoes}))(DashBoardAcoes)
