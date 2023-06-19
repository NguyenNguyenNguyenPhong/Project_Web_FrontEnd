import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CourseDetail from '../Course/CourseDetail';
import HomeBody from './HomeBody';
import HeaderContainer from '../../container/HeaderContainer';
import FooterContainer from '../../container/FooterContainer';

const Home = () => {
    return (
        <div>
            <HeaderContainer />
            <Routes>
                <Route path= "/*" element = { <HomeBody />} />
                <Route path= "course/:id/*" element =  { <CourseDetail /> } />   
                  
                {/* <Route path= "/blog/my-blog" element =  { <MyBlog /> } />       */}
            </Routes>
            <FooterContainer />
        </div>
    );
};

export default Home;