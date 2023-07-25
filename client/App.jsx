import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Feed from './Containers/Feed.jsx';
import Login from './Containers/LoginItem.jsx';

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
