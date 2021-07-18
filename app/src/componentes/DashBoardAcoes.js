import React from 'react'
import { connect } from 'react-redux'

import { LineChart, XAxis, CartesianGrid, Line } from 'recharts'
import { changeCompany } from './../store/actions/TrocaEmpresa'

function DashBoardAcoes({ informacoes, changeCompany }){
    React.useEffect(()=>{
        changeCompany('https://cloud.iexapis.com/v1/stock/aapl/quote/?token=pk_c778b6dbd2154d6fa15043568d469931')
    }, [changeCompany])
    console.log('dashboard', informacoes)
    return (
        <div>
            <LineChart width={500} height={300} data={[informacoes]}>
                <XAxis dataKey="companyName"/>
                <XAxis dataKey="symbol"/>
                <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                <Line type="monotone" dataKey="latestPrice" stroke="#8884d8" />
            </LineChart>
        </div>

    )
}

const mapStateToProps = state => {
    return { informacoes: state.informacoes.informacoes }
}

export default connect(mapStateToProps, { changeCompany })(DashBoardAcoes)
