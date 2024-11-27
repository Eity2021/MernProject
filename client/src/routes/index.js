import React, { Suspense } from 'react';
import Home from '../pages/home/Home';
import About from '../pages/about/About';

const routes= [
  {
    path: '/',
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <Home />
      </Suspense>
    ),

  },

  {
    path: '/',
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <Home />
      </Suspense>
    ),

  },
  {
    path: '/about',
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <About />
      </Suspense>
    ),

  },
];

export default routes;
