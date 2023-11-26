import axios from "axios";
import { useEffect, useState } from "react";
const Datafetch= ()=>{
    const[Books,setBooks]=useState([])
    useEffect (()=>{
        const apiUrl='http://localhost:3002/Books'
        axios.get(apiUrl)
        .then(response=>{
            setBooks(response.data)
        })
        .catch(error=>{
            console.error('Error Fetching data:',error);
        });
    },[])
    return(
        <div>
            <h1>List of Books</h1>
            <ul>
                {Books.map(book=>{
                    <li key={book.id}>{book.title},{book.author}</li>
                })}
            </ul>
        </div>
    )
}
export default Datafetch;