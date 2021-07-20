import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { SiFord, SiVisa, SiMcdonalds } from 'react-icons/si'
import { AiOutlineApple } from 'react-icons/ai'

function NavbarAcoes(){

    return(
        <nav>
            <h5 className='info-exemplo'>Empresas Conhecidas</h5> 
            <div className='div-exemplo'>
                <p className='icone-exemplo face'><FaFacebook /></p>
                <p className='icone-exemplo ford'><SiFord /></p>
                <p className='icone-exemplo mcdonald'><SiMcdonalds /></p>
                <p className='icone-exemplo visa'><SiVisa /></p>
                <p className='icone-exemplo apple'><AiOutlineApple /></p> 
            </div>
            
        </nav>
    )
}

export default NavbarAcoes