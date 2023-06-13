import React from 'react';
import HeaderContainer from './../../container/HeaderContainer';
import CourseSelectionContainer from './../../container/CourseSelectionContainer';
import CopyStudentsViewingContainer from './../../container/StudentsViewingContainer';
import TopCategoriesContainer from './../../container/TopCategoriesContainer';
import FeaturedTopicsContainer from './../../container/FeaturedTopicsContainer';
import AdvertisementContainer from './../../container/AdvertisementContainer';
import FooterContainer from './../../container/FooterContainer';
const Home = () => {
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