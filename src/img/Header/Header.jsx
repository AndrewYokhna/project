import React from 'react';
import p from './Head.module.css';
import shapka_2 from './img/Head_shapka.jpeg';
import logo from './img/logo.jpeg';

const Header = () => {
    return <header className={p.header}>
        <img src={shapka_2} alt='shapka_2'/>


</header>
}

export default Header;