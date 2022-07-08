import React from 'react'
import logo from '../../medias/logo.png'
import './header.css'

const Header = () => {
  return (
    <header className='header'>
      <img src={logo} />
      <span className='header__message'>Developed with ❤️ by Monterail</span>
    </header>
  )
}

export default Header