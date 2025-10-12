"use client";

import { useState ,useEffect } from "react";

export default function HubPage(){

    const [sharItems , setSharItems] = useState([]);

    useEffect(()=>{
        const  saved = JSON.parse(localStorage.getItem("bave_shares")) || [];
        setSharItems(saved.reverse());
    },[]);
    return(
        <div>
            <h1>Link 🫦 Hub</h1>
            {sharItems.length === 0 ?(
                <p>No shared links yet.</p>
            ) : (
                <ul>
                   {sharItems.map((item , i)=>(
                    <li key={i}>
                     <strong>{item.title}</strong><br />
                     <a href={item.url} target="_blank">{item.url}</a><br />
                    <small>{new Date(item.time).toLocaleString()}</small>
                    </li>
                   ))} 
                </ul>
            )}
            
        </div>
    )
}