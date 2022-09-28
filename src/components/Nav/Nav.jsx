import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser,AiOutlineBook} from 'react-icons/ai'
import {RiServiceFill} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'



RiServiceFill

const Nav = () => {
  return (
    <nav>
      <a href="#">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#experience">
        <AiOutlineBook />
      </a>
      <a href="#services">
        <RiServiceFill />
      </a>
      <a href="#contact">
        <BiMessageSquareDetail />
      </a>
    </nav>
  )
}

export default Nav