import { Provider } from 'react-redux'
import { store } from './store/store'
import React from 'react'

import HeaderSearch from './componentes/HeaderSearch'
import DashBoardAcoes from './componentes/DashBoardAcoes'
import NavbarAcoes from './componentes/NavbarAcoes'

export default class App extends React.Component {
  
  render(){
    return (
      <div className="App">
          <Provider store={store}>
            <HeaderSearch />
            <NavbarAcoes />
            <DashBoardAcoes />
          </Provider>
      </div>
    );
  }
  
}