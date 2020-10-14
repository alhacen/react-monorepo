import {lazy} from 'react';
const HOME_PATH = '/';
export const ROUTES = [
  {
    path: HOME_PATH,
    title: 'Welcome',
    screen: lazy(() => import('../../screens/home.screen.js')),
  },
];
