"use client";
export const dynamic = "force-dynamic"

import { useSearchParams } from "next/navigation";
import { useState , useEffect } from "react";
import Link from "next/link"

export default function SharePage(){

  const searchParams = useSearchParams();
  const [shareData , setShareData] =  useState(null);
  useEffect(()=>{
    const title = searchParams.get("title");
    const text = searchParams.get("text");
    const url = searchParams.get("url");

    if(title || text || url){
      const newShare = {title , text , url , time : new Date().toString()};

      const storeShares = JSON.parse(localStorage.getItem("bave_shares")) || [];
      storeShares.push(newShare);
      localStorage.setItem("bave_shares" , JSON.stringify(storeShares));

      setShareData(newShare);
    }
  },[searchParams]);

  if(!shareData) return <p>Processing shared content...</p>
  return(
    <div>
      <h2>Shared content saved</h2>
      <p><strong>Title:</strong>{shareData.title}</p>
      <p><strong>Text:</strong>{shareData.text}</p>
      <p><strong>URL:</strong>{shareData.url}</p>
      <Link href="/">
      Go to Home
      </Link>
    </div>
  )
};