import axios from 'axios'

export const doResquestCompany = (url)=>{
    // fazendo a requicao com o axios na api 
    return axios
            .get(url)
            .then(response => response.data)
}