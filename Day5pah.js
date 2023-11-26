import React, {useState } from 'react'

const Cycle = () => {
    const[Type,setType]=useState("COMPONENTS");
    console.log("component mounted",Type);
    return (
        <div>
            <button onClick={()=>setType("Component Wil MOUNT")}>Posts</button>
            <button onClick={()=>setType("Component Did MOUNT")}>Users</button>
            <button onClick={()=>setType("Component Will Recieve Props!")}>Comments</button>
            <h2>{Type}</h2>
        </div>
    )
}
export default Cycle;