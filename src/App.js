import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';

import Store from './Store';
import Layout from './Components/Layout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={Store}>
          <div className="App">
            <Layout />
          </div> 
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
