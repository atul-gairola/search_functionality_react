import React, { useEffect, useState } from 'react';
import './Item.css';
import Movie from './Movie';

function Item(props){

    return <div className="container">
    <div className="wrapper">
    {props.res.forEach(cur => {
      return <Movie movie = {cur.MovieName} year = {cur.Year}/>
    })}
   </div>
  </div>
  
}

export default Item;