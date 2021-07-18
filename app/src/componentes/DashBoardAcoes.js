import React from 'react'
<<<<<<< HEAD
import { connect } from 'react-redux'

import { LineChart, XAxis, CartesianGrid, Line } from 'recharts'
import { changeCompany } from './../store/actions/TrocaEmpresa'
=======
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
>>>>>>> 6971c093d2c49b3b4138e3772c5aacfa9d8afc4d

function DashBoardAcoes({ informacoes, changeCompany }){
    React.useEffect(()=>{
        changeCompany('https://cloud.iexapis.com/v1/stock/aapl/quote/?token=pk_c778b6dbd2154d6fa15043568d469931')
    }, [changeCompany])
    console.log('dashboard', informacoes)
    return (
        <div>
<<<<<<< HEAD
            <LineChart width={500} height={300} data={[informacoes]}>
=======
            <LineChart width={500} height={300} data={informacoes}>
>>>>>>> 6971c093d2c49b3b4138e3772c5aacfa9d8afc4d
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
