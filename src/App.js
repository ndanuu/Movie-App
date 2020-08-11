import React from 'react';
import './App.css';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Landing from './components/home/Landing';

import store from './store';
import {Provider} from 'react-redux';
function App() {
  return (
    <div>
      <Provider store={store}>
      <NavBar/>
      
      <Landing/>
      <Footer/>
      </Provider>
      
    </div>
  );
}

export default App;
