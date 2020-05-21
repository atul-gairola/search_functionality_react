import React, { useState } from 'react';
import './Header.css';

function Header(props){
    const [input, setInput] = useState('');

    function handleChange(e){
        setInput(e.target.value);
    };

    function handleKeyDown(e){
        if(e.keyCode === 13){
            props.onInput(input);
            setInput('');         
        }
    }
    
    function handleClick(e){
        props.onInput(input);
        setInput('');
    }


    return  <div className="header">
    <div className="container">
        <p>FlickZee</p>
        <div className="searchbar">
            <input onChange = {handleChange} onKeyDown = {handleKeyDown} value = {input} placeholder="Search a movie or tv show" type="text" />
            <button onClick = {handleClick} > </button>
        </div>
    </div>
</div>
};

export default Header;