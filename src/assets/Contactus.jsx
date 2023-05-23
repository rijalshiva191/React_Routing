import React from 'react'
import {useNavigate} from "react-router-dom"

const Contactus = () => {
  let navigate =useNavigate();
  return (
    <div>
   Contactus
      <br/>
      
        <button onClick={()=>navigate("home")}> Goto Home</button>
        
    </div>
   )
}

export default Contactus
