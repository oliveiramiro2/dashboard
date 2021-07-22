import { doRequestCompany } from './../../api'

export const changeCompany = (url) => {
    // construindo a funcao que vai trocar os valores do reducer
    const payload = doRequestCompany(url)

    return {
        type: "TROCA_EMPRESA",
        payload
    }   
}