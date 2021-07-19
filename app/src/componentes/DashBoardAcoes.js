import React from 'react'
import { connect } from 'react-redux'

import { LineChart, XAxis, YAxis, CartesianGrid, Line } from 'recharts'
import { changeCompany } from './../store/actions/TrocaEmpresa'

import InfoDashboard from './InfoDashboard'

function DashBoardAcoes({ informacoes, changeCompany }){
    // imprimindo o exemplo na renderizacao da aplicacao
    React.useEffect(()=>{
        changeCompany('https://cloud.iexapis.com/v1/stock/aapl/quote/?token=pk_c778b6dbd2154d6fa15043568d469931')
    }, [changeCompany])

    return (
        <div>
            <LineChart width={700} height={400} data={[informacoes]}>
                <XAxis dataKey="companyName"/>
                <YAxis />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                <Line type="monotone" dataKey="latestPrice" stroke="#ff0000" />
                <Line type="monotone" dataKey="high" stroke="#1a1aff" />
            </LineChart>
            <InfoDashboard />
        </div>

    )
}

const mapStateToProps = state => {
    return { informacoes: state.informacoes.informacoes }
}

export default connect(mapStateToProps, { changeCompany })(DashBoardAcoes)
