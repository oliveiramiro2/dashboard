import React from 'react'
<<<<<<< HEAD
import { connect } from 'react-redux'

import { changeCompany } from './../store/actions/TrocaEmpresa'

let symbolCompany = ''

const HeaderSearch = ({changeCompany}) => {
    
    React.useEffect(()=>{
        changeCompany(`https://cloud.iexapis.com/v1/stock/${symbolCompany}/quote/?token=pk_c778b6dbd2154d6fa15043568d469931`)
    }, [changeCompany])

    function GetInputValue(e){
        symbolCompany = e.target.value
    }

    function SetCompanyInformation(e, company){
        e.preventDefault(()=>{
            changeCompany(`https://cloud.iexapis.com/v1/stock/${company}/quote/?token=pk_c778b6dbd2154d6fa15043568d469931`)
        })
=======
import { connect, useSelector, useDispatch } from 'react-redux'

import axios from 'axios'

import { changeCompany } from './../store/actions/TrocaEmpresa'

const HeaderSearch = ({informacoes}) => {
    const dispatch = useDispatch()
    const inf = useSelector(state => state)
    const loadCompany = (e) => {
        if(e.target.value !== ''){
            try{
                const url= 'https://cloud.iexapis.com/v1/stock/'+e.target.value+'/quote/?token=pk_c778b6dbd2154d6fa15043568d469931'
                axios.get(url)
                    .then(res =>{
                        //const info = res.data
                        dispatch(changeCompany(res.data))
                        console.log(res.data) 
                        console.log(informacoes.then(info => info.results))
                    })
                
            }catch{
                console.log('deu ruim')
            }
        }
        
>>>>>>> 6971c093d2c49b3b4138e3772c5aacfa9d8afc4d
    }

    console.log('header', symbolCompany)

    return (
        <div className="form-group form-search">
            <form>
                <label className="pesquise-lb"><strong>Pesquise aqui</strong></label>
                <input type="search" onChange={e=>GetInputValue(e)} className="form-control ipt-search" id="exampleFormControlInput1" placeholder="Ex: aapl" />
                <button type="submit" onClick={e=>SetCompanyInformation(e, symbolCompany)} className="btn btn-info btn-search">Pesquisar</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return { informacoes: state.informacoes }
}

export default connect(mapStateToProps, { changeCompany })(HeaderSearch)
