import {lazy} from 'react';
const HOME_PATH = '/';
const EXPLORE_PATH = '/explore';
const LOGIN_PATH  = '/login';
const REGISTERATION_PAGE  = '/register';
const USERHOME_PATH = '/home';
const CALLACTION_PATH = '/call/:username';
const PROFILE_PATH = '/setting/profile';
const SETTING_PATH  = '/setting/';
const EDITPROFILE_PATH  = '/setting/profile/edit-profile';
const SEARCH_PATH = '/search';
// import homeScreen from '../../screens/home.screen'
export const ROUTES = [
  {
    path: HOME_PATH,
    title: 'Welcome',
    screen: lazy(() => import('../../screens/home.screen')),
  },
];
