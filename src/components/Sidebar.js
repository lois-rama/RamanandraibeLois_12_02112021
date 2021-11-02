import React from "react";
import { NavLink } from "react-router-dom";
import bike from '../img/sidebar/bike.svg'
import gym from '../img/sidebar/gym.svg'
import meditate from '../img/sidebar/meditate.svg'
import swim from '../img/sidebar/swim.svg'
import '../styles/components/Sidebar.css';

function Sidebar(){
return(
        <nav className="navSidebar">
            <ul className="sidebarList">
                <li><NavLink to='/' className="navIcon"><img src={meditate} alt=""></img></NavLink></li>
                <li><NavLink to='/' className="navIcon"><img src={swim} alt=""></img></NavLink></li>
                <li><NavLink to='/' className="navIcon"><img src={bike} alt=""></img></NavLink></li>
                <li><NavLink to='/' className="navIcon"><img src={gym} alt=""></img></NavLink></li>
            </ul>
        </nav>
)
}

export default Sidebar