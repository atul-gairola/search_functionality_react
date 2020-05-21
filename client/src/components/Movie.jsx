import React from 'react';

function Movie(props){
 return <div className="movie" >
 <p>{props.movie}<span>{props.year}</span></p>
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
}

export default Movie;