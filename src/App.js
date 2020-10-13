
import React from 'react';
import logo from './logo.svg';
// import './app.sass';
import {BrowserRouter as Router} from 'react-router-dom';
import store from './store/'
// import { selectAllUsers, fetchUsers } from './reducers/usersSlice'
import Main from './main';
function App() {
  // store.dispatch(fetchUsers())
  return (
    <Router>
      <Main />
    </Router>
  );
}
export default App;