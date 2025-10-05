"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SharPage(){
     const searchParms = useSearchParams();
     const [sharedLink , setSharedLink] = useState(null);


     useEffect(()=>{
        const url = searchParms.get("url");
        if(url){
            setSharedLink(url);
        }
     },[searchParms]);
     
    return(
        <div>
            <h2>Shared to Bave🫦</h2>
            {sharedLink ? (
                <>
                <p>Recived Link:</p>
                <a href={sharedLink} target="_blank">{sharedLink}</a>
                </>
            ) :(
                <p>No link recived</p>
            )}
        </div>
    );
}