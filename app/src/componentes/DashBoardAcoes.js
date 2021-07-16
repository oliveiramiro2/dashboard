import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { LineChart, XAxis, CartesianGrid, Line } from 'recharts'
import { consulta } from './../store/fetchActions/index'

function DashBoardAcoes(informacoes){
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(consulta())
    }, [dispatch])

    //const t = useSelector(state => state.teste)
    console.log(informacoes)

    return (
        <div>
            <LineChart width={500} height={300} data={informacoes}>
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
