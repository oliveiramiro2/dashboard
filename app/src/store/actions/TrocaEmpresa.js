<<<<<<< HEAD
import { doResquestCompany } from './../../api'

export const changeCompany = url => {
    const payload = doResquestCompany(url)

    return {
        type: "TROCA_EMPRESA",
        payload
    }   
}
=======
import { createAction } from '@reduxjs/toolkit'

export const changeCompany = createAction('TROCA_EMPRESA')
export const teste = createAction('TESTA')
>>>>>>> 6971c093d2c49b3b4138e3772c5aacfa9d8afc4d
