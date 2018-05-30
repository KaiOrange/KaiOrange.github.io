import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import CustomHome from './CustomHome.js';
import store from '../store/createStore';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route component={CustomHome} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
