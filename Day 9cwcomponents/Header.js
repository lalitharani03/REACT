import React from "react";
import {Link} from 'react-router-dom'

const Header = ({children}) => {
    return (
      <div>
          <ul style={{listStyle:"none",display:"flex",alignItems:"center",justifyContent:"right",background:"darkblue",fontSize:"1.4rem",marginTop:"-5px"}}>
              <li style={{margin:"20px",textDecoration:"none",color:"white"}} className='nav'>
                  <Link to={'/'} style={{textDecoration:"none",color:"white"}}>Home</Link>
              </li>
              <li style={{margin:"20px",textDecoration:"none",color: "white"}}>
                  <Link to={'/singers'} style={{textDecoration:"none",color:"white"}}>Singers</Link>
              </li>
              <li style={{margin:"20px",textDecoration:"none",color:"white"}}>
                  <Link style={{textDecoration:"none",color:"white"}} to={'/albums'}>Albums</Link>
              </li>
          </ul>
      </div>
    )
  }
  
  export default Header