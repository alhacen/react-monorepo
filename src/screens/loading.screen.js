import React from 'react';
import {Link} from 'react-router-dom';


const LoadingScreen = () => (
  <div>
    <Link to='/'>
      loading...
    </Link>
  </div>
);

export default LoadingScreen;
