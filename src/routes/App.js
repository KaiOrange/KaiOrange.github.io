import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import CustomHome from './CustomHome.js';
import store from '../store/createStore';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Route component={CustomHome} />
      </HashRouter>
    </Provider>
  );
}

export default App;
