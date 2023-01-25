import React from 'react';
import {ReactComponent as Logo} from "../../assets/logo.svg";
import "./Header.scss"

const Header = ({handleLogout}) => {
    return (
        <div className="header">
            <Logo className="logo"/>
            <button className="logout-btn" onClick={handleLogout}>Log out</button>
        </div>
    );
};

export default Header;