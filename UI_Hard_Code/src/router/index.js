import React from 'react';
import { Routes , Route } from 'react-router-dom';
import SignIn from '../views/auth/signIn/signIn';
import SignUp from '../views/auth/signUp/signUp';
import Home from '../views/Home/Home';
import CourseDetail from '../views/Course/CourseDetail';
import FooterContainer from '../container/FooterContainer';
import HeaderContainer from '../container/HeaderContainer';


const Routers = () => {
  return (
    <Routes >
      <HeaderContainer />
        <Route exact path="/" element={<Home />} /> 
        <Route path="/course/:id" element={<CourseDetail/>} />
      <Route element={<FooterContainer />} />
      <Route path="/signIn" element={<SignIn/>} />
      <Route path="/signUp" element={<SignUp/>} />
    </Routes>
  );
};

export default Routers;
