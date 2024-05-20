import React from 'react'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import "@fontsource/poppins"; 
import './style.css'

const Header = () => {
  return (
    <header>
        <img src={logo} alt="" />
        <ul>
            <li><NavLink to={"/"} className={(nav)=> nav.isActive ? "active" : ""}>Home</NavLink></li>
            <li><NavLink to={"/form"} className={(nav)=> nav.isActive ? "active" : ""}>Form</NavLink></li>
            <li>Shop</li>
            <li>Pages</li>
            <li>Contact</li>
        </ul>
        <div className='flex justify-center gap-5 align-items-center'>
        <FaSearch/>
        <FaRegHeart/>
        <SlBasket/>
        </div>
    </header>
  )
}

export default Header