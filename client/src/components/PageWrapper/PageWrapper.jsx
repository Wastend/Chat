import React from 'react';
import Header from '../header/Header.jsx'

function PageWrapper(props) {
    document.title = props.title
    return (
        <>
        <Header></Header>
        {props.children}
        </>
    );
}

export default PageWrapper;