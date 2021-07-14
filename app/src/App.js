import { Provider } from 'react-redux'

import store from './store/index'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <p>
            ok
          </p>
        </Provider>
      </header>
    </div>
  );
}

export default App;
