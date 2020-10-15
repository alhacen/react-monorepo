
import React from 'react';
import './app.sass';
import {BrowserRouter as Router} from 'react-router-dom';
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