import React from 'react';
import HeaderNav from './components/HeaderNav';
//import GetintouchForm from './components/GetInTouchForm';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import NavRouter from './Router/Router';

import './styles/style.scss';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div className="App">
        <BrowserRouter>
          <header className="App-header">
            <HeaderNav />
          </header>
          <NavRouter />
        </BrowserRouter>
      </div>
      <footer style={{ marginTop: 'auto' }}>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
