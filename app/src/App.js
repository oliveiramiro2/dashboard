import { Provider } from 'react-redux'
import { store } from './store/store'
import React from 'react'

import HeaderSearch from './componentes/HeaderSearch'
import DashBoardAcoes from './componentes/DashBoardAcoes'

export default class App extends React.Component {
  
  render(){
    console.log(store)
    return (
      
      <div className="App">
          <Provider store={store}>
            <HeaderSearch />
            <DashBoardAcoes />
          </Provider>
      </div>
    );
  }
  
}