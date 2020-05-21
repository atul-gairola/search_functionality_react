import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Item from './item';
import searchFunction from './searchFunctionality';

function App() {
   const[resArr, setResArr] = useState([]);

   let db ;
  
   const fetchData = async() => {
    const res = await fetch('http://localhost:5000/');
    const json = await res.json();
    db = json;
    console.log(db);
   }
   useEffect(() => {
     fetchData();
   },[])
 

   function onInput(value){
     setResArr(searchFunction(value,db));
   }

return <div>
   <Header onInput = {onInput} />
   <Item res = {resArr} />
</div>
}

export default App;
