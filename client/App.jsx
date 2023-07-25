import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Feed from './containers/Feed.jsx';
import Login from './containers/Login.jsx';

const App = () => {
  return (
    <>
      <nav>
        <Link to='/'>Login</Link>
        <Link to='/feed'>Feed</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/feed' element={<Feed />} />
      </Routes>
    </>
  );
};

export default App;
