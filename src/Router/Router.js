import React from 'react';

import HomePage from '../pages/Home';
import ServicesPage from '../pages/Services';
import GalleryPage from '../pages/Gallery';

import FaqPage from '../pages/Faq';
import FormPage from '../pages/FormPage';
import PageNotFound from '../pages/404';
import { Route, Switch } from 'react-router-dom';
import Policies from '../components/Policies/policesPage';
import AboutUs from '../pages/AboutUs';
import bookNowPage from '../pages/BookNow';

const NavRouter = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/services" component={ServicesPage} />
    <Route path="/gallery" component={GalleryPage} />
    <Route path="/booknow" component={bookNowPage} />
    <Route path="/faq" component={FaqPage} />
    <Route path="/form" component={FormPage} />
    <Route path="/policies" component={Policies} />
    <Route path="/aboutUs" component={AboutUs} />
    <Route path="*" component={PageNotFound} />
  </Switch>
);
export default NavRouter;
