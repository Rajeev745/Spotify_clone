import React from "react";
import '../Styles/Header.css'
import {MdArrowForwardIos,MdArrowBackIos} from 'react-icons/md'
import {AiOutlineCaretDown,AiOutlineUser} from 'react-icons/ai'

export default function Header(){
   
    return(
        <div className="header">
            
            <div className="arrow" >
                <i><MdArrowBackIos/></i>
            </div>
            <div className="arrow" >
                <i><MdArrowForwardIos/></i>
            </div>
            <div className="upgrade">upgrade</div>
            <div className="user">
                <div className="userimage">
                    <i><AiOutlineUser/></i>
                </div>
                <div className="useremail">Rajeev</div>
                <div className="usersymbol">
                    <i><AiOutlineCaretDown/></i>
                </div>
            </div>
        </div>
    )
}