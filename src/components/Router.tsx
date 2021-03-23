import React from 'react';
import { useRoutes } from 'hookrouter';

import Terms from './Terms';
import Blog from './Blog';

const facebook = window.FB;

const routes = {
  '/privacy': () => <Terms />,
  '/': () => <Blog facebook={facebook} />,
};

export default function Routes() {
  const routeResult = useRoutes(routes);

  return routeResult;
}
