import React from 'react';
import HeaderContainer from './../../container/HeaderContainer';
import CourseSelectionContainer from './../../container/CourseSelectionContainer';
import CopyStudentsViewingContainer from './../../container/StudentsViewingContainer';
import TopCategoriesContainer from './../../container/TopCategoriesContainer';
import FeaturedTopicsContainer from './../../container/FeaturedTopicsContainer';
import AdvertisementContainer from './../../container/AdvertisementContainer';
import FooterContainer from './../../container/FooterContainer';
import request from '../../utils/request'
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
    //   }, []);
    return (
        <div>
            <HeaderContainer />
            <CourseSelectionContainer />
            <CopyStudentsViewingContainer />
            <TopCategoriesContainer />
            <FeaturedTopicsContainer />
            <AdvertisementContainer />
            <FooterContainer />
        </div>
    );
};

export default Home;