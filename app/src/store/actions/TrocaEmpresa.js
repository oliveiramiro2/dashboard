import { doResquestCompany } from './../../api'

export const changeCompany = url => {
    // construindo a funcao que vai trocar os valores do reducer
    const payload = doResquestCompany(url)

    return {
        type: "TROCA_EMPRESA",
        payload
    }   
}