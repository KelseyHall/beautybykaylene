import React from 'react';
import ReactDom from 'react-dom';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   useParams,
// } from 'react-router-dom';

import HomePage from '../pages/Home';
import ServicesPage from '../pages/Services';
import GalleryPage from '../pages/Gallery';
import ContactUsPage from '../pages/ContactUs';
import FaqPage from '../pages/Faq';

// <Switch>
//   <Route path="/">
//     <HomePage />
//   </Route>
//   <Route path="/services">
//     <ServicesPage />
//   </Route>
//   <Route path="/gallery">
//     <GalleryPage />
//   </Route>
//   <Route path="/contact">
//     <ContactUsPage />
//   </Route>
//   <Route path="/faq">
//     <FaqPage />
//   </Route>
// </Switch>;
//

const NavRouter = (
  <div>
    <Router>
      <Route exact path="/" component={HomePage}></Route>
      <Route path="/services" component={ServicesPage}></Route>
      <Route exact path="/gallery" component={GalleryPage}></Route>
      <Route exact path="/ContactUs" component={ContactUsPage}></Route>
      <Route exact path="/faq" component={FaqPage}></Route>
    </Router>
  </div>
);
export default NavRouter;
