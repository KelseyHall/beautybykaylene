import React from 'react';

import HomePage from '../pages/Home';
import ServicesPage from '../pages/Services';
import GalleryPage from '../pages/Gallery';
import ContactUsPage from '../pages/ContactUs';
import FaqPage from '../pages/Faq';
import FormPage from '../pages/FormPage';

const NavRouter = (
  <div>
    <Router>
      <Route exact path="/" component={HomePage}></Route>
      <Route path="/services" component={ServicesPage}></Route>
      <Route exact path="/gallery" component={GalleryPage}></Route>
      <Route exact path="/ContactUs" component={ContactUsPage}></Route>
      <Route exact path="/faq" component={FaqPage}></Route>
      <Route exact path="/form" component={FormPage}></Route>
    </Router>
  </div>
);
export default NavRouter;
