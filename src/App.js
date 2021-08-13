import React from 'react';

import HeaderNav from './components/HeaderNav';

import HomePage from './pages/Home';
import ServicesPage from './pages/Services';
import GalleryPage from './pages/Gallery';
import ContactUsPage from './pages/ContactUs';
import FaqPage from './pages/Faq';

import GetintouchForm from './components/GetInTouchForm';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  BrowserRouter,
} from 'react-router-dom';

import './styles/style.scss';
// const Header = () => {
//   return (
//     <div>
//       <div className="header">
//         <NavLink page="home">home</NavLink>
//       </div>
//     </div>
//   );
// };
// const Home = () => (
//   <div>
//     <HomePage />
//   </div>
// );
// const Services = () => (
//   <div>
//     <ServicesPage />
//   </div>
// );
// const Gallery = () => (
//   <div>
//     <GalleryPage />
//   </div>
// );
// const Contact = () => (
//   <div>
//     <ContactUsPage />
//   </div>
// );
// const Faq = () => (
//   <div>
//     <FaqPage />
//   </div>
// );

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
          </Switch>
        </BrowserRouter>
        <GetintouchForm />
        <footer></footer>
      </div>
    </div>
  );
}

export default App;
// <HomePage />
// <ServicesPage />
// <GalleryPage />
// <ContactUsPage />
// <FaqPage />

// <div className="App">
// <Router>
//   <Route path="/:page" component={Header} />
//   <Route exact path="/" component={Home} />
//   <Route exact path="/home" component={Home} />
//   <Route exact path="/services" component={Services} />
//   <Route exact path="/gallery" component={Gallery} />
//   <Route exact path="/contactUs" component={Contact} />
//   <Route exact path="/faq" component={Faq} />
// </Router>
// </div>
