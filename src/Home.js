import React from 'react';
import { Navbar } from './components';
import { Categories, Features, Footer, Header } from './containers';

const Home = () => {
    return <div>
        <Navbar />
        <Header />
        <Categories />
        <Features />
        <Footer />
    </div>;
};

export default Home;
