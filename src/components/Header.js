import React from "react";
import { NavLink } from "react-router-dom";
import Logo from '../img/logoSportSee.svg'
import '../styles/components/Header.css';

function Header(){
return(
    <header className='headernav'>
        <img src={Logo} className='logo' alt='Logo SportSee'></img>
        <nav className="navBar">
            <ul className="navList">
                <li><NavLink to='/' className="navLink">Accueil</NavLink></li>
                <li><NavLink to='/' className="navLink">Profil</NavLink></li>
                <li><NavLink to='/' className="navLink">Réglage</NavLink></li>
                <li><NavLink to='/' className="navLink">Communauté</NavLink></li>
            </ul>
        </nav>
    </header>
)
}

export default Header