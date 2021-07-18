import { doResquestCompany } from './../../api'

export const changeCompany = url => {
    const payload = doResquestCompany(url)

    return {
        type: "TROCA_EMPRESA",
        payload
    }   
}