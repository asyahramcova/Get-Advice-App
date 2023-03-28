
import { useEffect, useState } from "react";
import React from "react";
import photo from "./advice.jpg";
import './App.css'

function App(){
  const [advice, setAdvice] = useState ("");


  const getAdvice = async()=>{
      const response = await fetch("http://www.boredapi.com/api/activity/ ")
      const data = await response.json();
      setAdvice(data.activity)
    };

  useEffect(() =>{
    getAdvice();
   },[]  )

  return(
    <div className="container" >
      <div className="new">
        <p>{advice}</p>
      </div>
      <div className="button">
        <button onClick={getAdvice} className="btn">Get new advice</button>
      </div>

      <img src ={photo} alt = "photo" className="photo"  />
      
    </div>
  )


}
export default App;