import React from "react";
import { useState,useEffect } from "react";
function Hook(){
    const[message,setmessage]=useState("Hello dear one, learning React...?");
    useEffect(()=>{
        console.log("use Effect hook called");
        setTimeout(()=>{
            setmessage("Great...This is time to learn about HOOKS");
        },2000)
        return()=>clearTimeout(setTimeout);
    },[])
    return(
        <div>
            <h1>{message}</h1>
        </div>
    )
}
export default Hook;