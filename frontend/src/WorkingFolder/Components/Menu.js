import React, { useEffect } from "react";
import { MenuList } from "../Data/DataLeftMenu";

export default function Menu(props){
    useEffect(()=>{
        const allList=document.querySelector(".leftbarmenu ul").querySelectorAll("li")
        function changeColor(){
            allList.forEach(e=>e.classList.remove("active"));
            this.classList.add("active")
        }
        allList.forEach(e=>e.addEventListener("click",changeColor))
        
    },[])
    return(
        <div className="leftbarmenu">
            <p className="leftbar-title">Menu</p>
            <ul>
                {
                    MenuList && MenuList.map((item)=>(
                        <li key={item.id}><a href="#">
                            <i>{item.icon}</i>
                            <span>{item.name}</span>
                            </a></li>
                    ))
                }
            </ul>
        </div>
    )
}