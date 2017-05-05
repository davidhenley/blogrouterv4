import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import PostsIndex from './components/PostsIndex';

const Router = () => (
  <BrowserRouter>
    <div>
      <Route path="/posts" component={PostsIndex} />
    </div>
  </BrowserRouter>
);

export default Router;
