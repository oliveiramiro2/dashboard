import React from 'react'
import { connect } from 'react-redux'
import { FaFacebook, FaTwitter } from 'react-icons/fa'
import { SiFord, SiVisa, SiMcdonalds } from 'react-icons/si'
import { AiOutlineApple } from 'react-icons/ai'

import { changeCompany } from './../store/actions/TrocaEmpresa'
import { changeSymbol } from './../store/actions/TrocaSimbolo'
import { intervalo } from './DashBoardAcoes'

let choice = 0

function NavbarAcoes({ changeCompany, changeSymbol, simbolo, informacoes}){
    const showExample = empresa => {
        if(empresa === simbolo.simbolo || empresa === simbolo){     //if para verificar se vai concatenar ou                                                   
            choice = 0                                              //excluir o atual array de informacao
        }else{
            choice = 1
            clearInterval(intervalo)                                // pararando a setInterval do dashboard
            changeSymbol(empresa)                                   //trocando o simbolo no reducer e att pag
            changeCompany(                                          //renderizando a nova empresa na tela
                `https://cloud.iexapis.com/v1/stock/${empresa}/quote/?token=pk_c778b6dbd2154d6fa15043568d469931`,
                choice
            )            
        }
    }

    return(
        <div className='container-exemplo-full'>
            <nav className='container-exemplo'>
                <h5 className='info-h5'>Empresas Conhecidas</h5> 
                <div className='div-exemplo'>
                    <p className='icone-exemplo face' onClick={()=>showExample('fb')}>
                        <FaFacebook className='icon-ex' />
                    </p>
                    <p className='icone-exemplo ford' onClick={()=>showExample('f')}>
                        <SiFord className='icon-ex' />
                    </p>
                    <p className='icone-exemplo twitter' onClick={()=>showExample('twtr')}>
                        <FaTwitter className='icon-ex' />
                    </p>
                    <p className='icone-exemplo mcdonald' onClick={()=>showExample('mcd')}>
                        <SiMcdonalds className='icon-ex' />
                    </p>
                    <p className='icone-exemplo visa' onClick={()=>showExample('v')}>
                        <SiVisa className='icon-ex' />
                    </p>
                    <p className='icone-exemplo apple' onClick={()=>showExample('aapl')}>
                        <AiOutlineApple className='icon-ex' />
                    </p> 
                </div>        
            </nav>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        informacoes: state.informacoes,
        simbolo: state.simbolo 
    }
}

export default connect(mapStateToProps, { changeCompany, changeSymbol })(NavbarAcoes)