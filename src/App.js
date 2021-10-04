import React from 'react';
import HeaderNav from './components/HeaderNav';
//import GetintouchForm from './components/GetInTouchForm';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import NavRouter from './Router/Router';

import './styles/style.scss';

function App() {
  return (
    <div>
      <div className="App">
        <BrowserRouter>
          <header className="App-header">
            <HeaderNav />
          </header>
          <NavRouter />
        </BrowserRouter>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
