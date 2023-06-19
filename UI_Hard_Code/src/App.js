
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from "./views/Home/Home";
import SignUp from "./views/auth/signUp/signUp";
import SignIn from "./views/auth/signIn/signIn";
import VideoDisplayer from './views/video/VideoContainer'
import TeacherContainer from './views/teacher/TeacherComponent'
import TeacherCourseContainer from './views/teacher/TeacherCourseContainer'
import ParentComponent from './views/searchResult/ContainerSearchResult'
import BlogContainer from './views/blog/BlogContainer'

function App() {
  return (
    <>
      <Routes>
        <Route path= "/*" element = { <Home />} />
        <Route path = "/signUp" element = { <SignUp />} />
        <Route path = "/signIn" element = { <SignIn />} />
        <Route path="/learn/course/:id" element={<VideoDisplayer />} />
        <Route path="/teacher" element={<TeacherContainer />} />
        <Route path="/teacher/:id" element={<TeacherCourseContainer />} />
        <Route path="/search" element={<ParentComponent />} />
        <Route path="/blog" element={<BlogContainer/>} />   
      </Routes>
    </>
  );
}

export default App;
