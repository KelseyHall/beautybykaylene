import React from 'react';

import HeaderNav from './components/HeaderNav';

import HomePage from './pages/Home';
import ServicesPage from './pages/Services';
import GalleryPage from './pages/Gallery';
import ContactUsPage from './pages/ContactUs';
import FaqPage from './pages/Faq';
import FormPage from './pages/FormPage';

//import GetintouchForm from './components/GetInTouchForm';
import Footer from './components/Footer';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import './styles/style.scss';

function App() {
  return (
    <div>
      <div className="App">
        <BrowserRouter>
          <header className="App-header">
            <HeaderNav />
          </header>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/services" component={ServicesPage}></Route>
            <Route exact path="/gallery" component={GalleryPage}></Route>
            <Route exact path="/ContactUs" component={ContactUsPage}></Route>
            <Route exact path="/faq" component={FaqPage}></Route>
            <Route exact path="/form" component={FormPage}></Route>
          </Switch>
        </BrowserRouter>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
