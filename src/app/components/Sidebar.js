"use client"
import React, { useState } from "react"
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { TbEdit } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";
import { IoBookmarkOutline } from "react-icons/io5";

export default function Sidebar(){
     
    const [isOpen , setIsOpen] = useState(false);
    
  return(
          <div>

              {/*side bar animation and the screen  showing */}
            <button
            
            onClick={()=> setIsOpen(true)}
            className="p-2 m-2 text-gray-800"
            >
<HiOutlineMenuAlt2 className="w-[23.99px] h-[23.99px]"/>
            </button>

            {isOpen &&(
                <div
                className="fixed inset-0 bg-black bg-opacity-10 z-40"
                onClick={()=> setIsOpen(false)}
                />
            )}

    <div
    className={`fixed top-0 left-0 h-full w-[243.1px] bg-white shadow-lg z-50 transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
    transition-transform duration-300
    `}
    >
      {/* close icon */}

    <div className="flex justify-end items-center p-4 ">
        <button onClick={()=> setIsOpen(false)}>
 <IoMdClose className="w-6 h-6"/>
        </button>

    </div>
    <div>

      {/* New input box open*/}

     <div className="flex px-[6px] py-[10px] mx-0 my-[6px] gap-1.5">
<TbEdit className="w-[20px] h-[20px]"/>
<p>New chat</p>
     </div>

      {/* svaed item search bar*/}


      <div className="flex px-[6px] py-[10px] mx-0 my-[6px] gap-1.5">
<IoSearch className="w-[20px] h-[20px]"/>
<p>Search saved</p>
     </div>

      <div className="flex px-[6px] py-[10px] mx-0 my-[6px] gap-1.5">
<IoBookmarkOutline className="w-[20px] h-[20px]"/>
<p>Hub</p>
     </div>


     </div>
    </div>
          </div>     
  )
}

