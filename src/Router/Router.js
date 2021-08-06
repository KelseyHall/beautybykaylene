import React from 'react';
import ReactDom from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from 'react-router-dom';
import HomePage from '../pages/Home';
import ServicesPage from '../pages/Services';
import GalleryPage from '../pages/Gallery';
import ContactUsPage from '../pages/ContactUs';
import FaqPage from '../pages/Faq';

<Switch>
  <Route path="/">
    <HomePage />
  </Route>
  <Route path="/services">
    <ServicesPage />
  </Route>
  <Route path="/gallery">
    <GalleryPage />
  </Route>
  <Route path="/contact">
    <ContactUsPage />
  </Route>
  <Route path="/faq">
    <FaqPage />
  </Route>
</Switch>;
