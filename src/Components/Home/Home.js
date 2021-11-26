import React from 'react';
import Banner from '../Banner/Banner';
import Partners from '../Partmers/Partners';
import Services from '../Services/Services';
import Comment from '../Comment/Comment';




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Partners></Partners>
            <Comment></Comment>

        </div>
    );
};

export default Home;