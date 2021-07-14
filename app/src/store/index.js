import { createStore } from 'redux'

function reducer(){
    return [{
        acoes : []
    }]
}

const store = createStore(reducer)

export default store