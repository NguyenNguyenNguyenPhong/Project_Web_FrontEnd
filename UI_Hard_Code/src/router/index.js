import React from 'react';
import { Routes , Route } from 'react-router-dom';
import SignIn from '../views/auth/signIn/signIn';
import SignUp from '../views/auth/signUp/signUp';
import Home from '../views/Home/Home';


const Routers = () => {
  return (
    <Routes >
      <Route exact path="/" element={<Home />} />
      <Route path="/signIn" element={<SignIn/>} />
      <Route path="/signUp" element={<SignUp/>} />
    </Routes>
  );
};

export default Routers;
