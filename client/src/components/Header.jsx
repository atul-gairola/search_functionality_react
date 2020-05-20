import React from 'react';
import './Header.css';

function Header(){
    return  <div className="header">
    <div className="container">
        <p>FlickZee</p>
        <div className="searchbar">
            <input  placeholder="Search a movie or tv show" type="text" />
            <button> </ button>
        </div>
    </div>
</div>
};

export default Header;