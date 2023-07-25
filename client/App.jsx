import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Feed from './containers/Feed.jsx';
import Login from './containers/Login.jsx';
import SignUp from './containers/Signup.jsx';

const App = () => {
  return (
    <>
      <nav>
        <Link to='/feed'>Home</Link>
        <Link to='/login'>Login</Link>
      </nav>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/feed' element={<Feed />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </>
  );
};

export default App;
