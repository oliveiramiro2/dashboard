import axios from 'axios'

export const doResquestCompany = (url)=>{
    return axios
            .get(url)
            .then(response => response.data)
}