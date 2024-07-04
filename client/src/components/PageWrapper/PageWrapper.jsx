import React from 'react';
import Header from '../header/Header.jsx'
import Footer from '../footer/Footer'

function PageWrapper(props) {
    document.title = props.title
    return (
        <>
        <Header></Header>
        {props.children}
        <Footer></Footer>
        </>
    );
}

export default PageWrapper;