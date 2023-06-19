import HeaderContainer from "./container/HeaderContainer";
// import CourseSelectionContainer from "./container/CourseSelectionContainer";
// import StudentsViewingContainer from "./container/StudentsViewingContainer";
// import TopCategoriesContainer from "./container/TopCategoriesContainer";
// import FeaturedTopicsContainer from "./container/FeaturedTopicsContainer";
// import AdvertisementContainer from "./container/AdvertisementContainer";
import FooterContainer from "./container/FooterContainer";
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Routers from './router';
import Home from "./views/Home/Home";
import SignUp from "./views/auth/signUp/signUp";
import SignIn from "./views/auth/signIn/signIn";

function App() {
  return (
    <>
      {/* <Routes>
        <Route path= "/*" element = { <Home />} />
        <Route path = "/signUp" element = { <SignUp />} />
        <Route path = "/signIn" element = { <SignIn />} />
       
      </Routes> */}
      <Routers />
      {/* Yuko */}
      {/* <HeaderContainer /> */}
      {/* <Router>
        <Routers />
      </Router> */}
      {/* Lily */}
      {/* <CourseSelectionContainer /> */}
      {/* Phoebe */}
      {/* <StudentsViewingContainer /> */}
      {/* Ayako */}
      {/* <TopCategoriesContainer />
      <FeaturedTopicsContainer />
      <AdvertisementContainer /> */}
      {/* <FooterContainer /> */}
    </>
  );
}

export default App;
