import React from 'react';
import './Item.css';
import Movie from './Movie';

function Item(props){
    return <div className="container">
    <div className="wrapper">
    {props.movies.map(cur => {
      return <Movie movie = {cur.item.MovieName} key = {cur.index}  year = {cur.item.Year}/> 
    })}
   </div>
  </div>
  
}

export default Item;