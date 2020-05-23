import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Header';
import Item from './Item';

function App() {
   // the result is the fetched data from the api
   const [res, setRes] = useState([]);

   // is called by header on click
   function onInput(value){

   // sends the searched input
      async function sendData(){ 
         try{
           await axios({
              url: '/',
              method: 'POST',
              data: {movie: value}
           });
           console.log('data sent');
         }catch(err){
           console.log(`Error: ${err}`);
         }
     }
  
   // gets the filtered data from the api
     async function getData(){
        try{
          const result =  await axios.get('/api');
          // changes the state of the result
          setRes(result.data);
        }catch(error){
          console.log(error);
        }
     }
  
     sendData();
     getData();
   }

console.log(res);

return <div>
   <Header onInput = {onInput} />
   <Item movies = {res}/>
</div>

}

export default App;
