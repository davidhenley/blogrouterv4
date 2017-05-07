import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PostsIndex from './components/PostsIndex';
import PostNew from './components/PostNew';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/posts/new" component={PostNew} />
      <Route path="/" component={PostsIndex} />
    </Switch>
  </BrowserRouter>
);

export default Router;
