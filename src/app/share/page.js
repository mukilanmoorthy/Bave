"use client";

import { useSearchParams } from "next/navigation";
import { useState , useEffect } from "react";

export default function SharePage(){

  const searchParms = useSearchParams();
  const [shareData , setShareData] =  useState("");
  useEffect(()=>{
    const title = searchParms.get("title");
    const text = searchParms.get("text");
    const url = searchParms.get("url");

    if(title || text || url){
      const newShare = {title , text , url , time : new Date().toString()};

      const storeShares = JSON.parse(localStorage.getItem("bave_shares")) || [];
      storeShares.push(newShare);
      localStorage.setItem("bave_shares" , JSON.stringify(storeShares));

      setShareData(newShare);
    }
  },[searchParms]);

  if(!shareData) return <p>Processing shared content...</p>
  return(
    <div>
      <h2>Shared content saved</h2>
      <p><strong>Title:</strong>{shareData.title}</p>
      <p><strong>Text:</strong>{shareData.text}</p>
      <p><strong>URL:</strong>{shareData.url}</p>
      <a href="">Go to Home</a>
    </div>
  )
};