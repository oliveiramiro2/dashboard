import axios from 'axios'

export default axios.create({
    baseURL: 'https://cloud.iexapis.com/v1/stock/'
})