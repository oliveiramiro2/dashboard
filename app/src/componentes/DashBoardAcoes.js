import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import { LineChart, XAxis, CartesianGrid, Line } from 'recharts'
import { changeCompany } from './../store/actions/TrocaEmpresa'

export class DashBoardAcoes extends Component {

    componentDidMount(){
        const url= 'https://cloud.iexapis.com/v1/stock/aapl/quote/?token=pk_c778b6dbd2154d6fa15043568d469931'
        axios.get(url)
            .then(res =>{
                console.log(res)
                mapDispatchToProps(res.data)
                console.log('2 '+this.state)
            })
        
    }

    render() {
        return (
            <div>
                <LineChart width={500} height={300} data=''>
                    <XAxis dataKey="name"/>
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                </LineChart>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    informacoes : state.valoresReducer
})

const mapDispatchToProps = dispatch => ({
    changeCompany: (informacoes) => dispatch(changeCompany(informacoes))
})

export default connect(mapStateToProps, mapDispatchToProps)(DashBoardAcoes)
