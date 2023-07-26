import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './Containers/LoginItem.jsx';
import Feed from './Containers/FeedPage.jsx';

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
