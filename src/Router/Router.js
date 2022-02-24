import React from 'react';

import HomePage from '../pages/Home';
import ServicesPage from '../pages/Services';
import GalleryPage from '../pages/Gallery';

import FaqPage from '../pages/Faq';
import FormPage from '../pages/FormPage';
import PageNotFound from '../pages/404';
import { Route, Switch } from 'react-router-dom';
import Policies from '../pages/policesPage';
import AboutUs from '../pages/AboutUs';
import bookNowPage from '../pages/BookNow';
import ScrollToTop from './ScrollToTop';

const NavRouter = () => (
  <ScrollToTop>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/services" component={ServicesPage} />
      <Route exact path="/gallery" component={GalleryPage} />
      <Route exact path="/booknow" component={bookNowPage} />
      <Route exact path="/faq" component={FaqPage} />
      <Route exact path="/form" component={FormPage} />
      <Route exact path="/policies" component={Policies} />
      <Route exact path="/aboutUs" component={AboutUs} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  </ScrollToTop>
);
export default NavRouter;
