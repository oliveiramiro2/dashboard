import React from 'react'
import { connect } from 'react-redux'

import { LineChart, XAxis, YAxis, CartesianGrid, Line } from 'recharts'
import { changeCompany } from './../store/actions/TrocaEmpresa'

import InfoDashboard from './InfoDashboard'

export let intervalo = null

function DashBoardAcoes({ informacoes, changeCompany }){

    React.useEffect(()=> {
        intervalo = setInterval(()=>{
            if(informacoes.simbolo.simbolo)
                changeCompany(`https://cloud.iexapis.com/v1/stock/${informacoes.simbolo.simbolo}/quote/?token=pk_c778b6dbd2154d6fa15043568d469931`)
        }, 7000)
    }, [informacoes.simbolo.simbolo, changeCompany])
    
    return (
        <div>
            <LineChart width={700} height={400} data={informacoes.informacoes.map((valor)=>{
                return valor.informacoes
            })}>
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
    return { 
        informacoes: state,
    }
}

export default connect(mapStateToProps, { changeCompany })(DashBoardAcoes)
