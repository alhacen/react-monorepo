
import React from 'react';
import './app.sass';
import {BrowserRouter as Router} from 'react-router-dom';
import Main from './main';
require('./utils/hooks')
function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}
export default App;