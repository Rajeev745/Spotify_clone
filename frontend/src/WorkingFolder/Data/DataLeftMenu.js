import React from "react";
import{BsFillHouseFill, BsJournalAlbum} from 'react-icons/bs';
import {FaBroadcastTower, FaMicrophoneAlt, FaPodcast} from 'react-icons/fa';
import{BiPulse} from 'react-icons/bi';

const MenuList=[
    {
        id:1,
        icon:<BsFillHouseFill/>,
        name:"HOME"
    },
    {
        id:2,
        icon:<BiPulse/>,
        name:"DISCOVER"
    },
    {
        id:3,
        icon:<FaBroadcastTower/>,
        name:"RADIO"
    },
    {
        id:4,
        icon:<FaMicrophoneAlt/>,
        name:"ARTIST"
    },
    {
        id:5,
        icon:<BsJournalAlbum/>,
        name:"ALBUM"
    },
    {
        id:5,
        icon:<FaPodcast/>,
        name:"PODCAST"
    }
]
export {MenuList}

