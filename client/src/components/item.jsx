import React from 'react';
import './Item.css';

function Item(){
    return <div className="container">
    <div className="wrapper">
      <div className="movie" >
          <p>movie.title<span>movie.year</span></p>
          <div className="movieContent">
              <div className="img"></div>
              <div className="availability">
                <p>Available On</p>
                <div className="sites">
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                </div>
              </div>
          </div>
      </div>
   </div>
  </div>
  
}

export default Item;