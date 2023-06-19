import React from 'react';
// import HeaderContainer from './../../container/HeaderContainer';
import CourseSelectionContainer from './../../container/CourseSelectionContainer';
import CopyStudentsViewingContainer from './../../container/StudentsViewingContainer';
import TopCategoriesContainer from './../../container/TopCategoriesContainer';
import FeaturedTopicsContainer from './../../container/FeaturedTopicsContainer';
import AdvertisementContainer from './../../container/AdvertisementContainer';
import { Route, Routes } from 'react-router-dom';
import CourseDetail from '../Course/CourseDetail';
import HomeBody from './HomeBody';
import HeaderContainer from '../../container/HeaderContainer';
import FooterContainer from '../../container/FooterContainer';
// import MyBlog from '../blog/MyBlog';
// import FooterContainer from './../../container/FooterContainer';
// import request from '../../utils/request'
// import { useEffect } from 'react';
const Home = () => {
    // useEffect(() => {
    //     // Mã lệnh được thực thi chỉ một lần khi component được render lần đầu tiên
    //     console.log('useEffect được gọi chỉ một lần');
    //     request({
    //         url: '/demo-controller',
    //         method: 'GET',
    //     })
    //     .then((res) => {console.log(res)} )
    //     .catch((error) => {
    //         console.log(error)
    //     })
    //   }, []);
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