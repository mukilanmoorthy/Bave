"use client";
import { useState } from "react";
import "../globals.css"
import { Inter , Poppins} from "next/font/google";
import  Sidebar from "@/app/components/Sidebar"


const inter = Inter({subsets : ["latin"] });
const poppins = Poppins({ weight: ["400" , "600", "700"], subsets: ["latin"]});
    
export default function BaveDashboard(){


    
    return(
        <div className="bg-gray-50">
{/*
 <div class="absolute top-[30%] -left-20 w-[140%] h-[30%] bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
 
             <div class="absolute top-[50%] -left-20 w-[140%] h-[20%] bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>

              <div class="absolute top-[60%] -left-20 w-[140%] h-[10%] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>

              <div class="absolute top-[70%] -left-20 w-[140%] h-[20%] bg-rose-400 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
              
              <div class="absolute top-[90%] -left-20 w-[140%] h-[10%] bg-rose-600 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
  */}
  
  <Sidebar/>
           
            <div className="h-[548px] flex flex-col items-center justify-center">
               <h1 className={`${inter.className} text-[28px]`}>Hi Machan 😁</h1>
                <h1 className={`${poppins.className}mt-4 text-[28px]`} >what link u want ?</h1>
            </div>

    {/* input bar */}       

    <input type="text" 
    
    className="w-[358px] h-[60px] p-[10px] "
    />

        </div>
    )
}