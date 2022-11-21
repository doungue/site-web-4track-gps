import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/mee.jpg'
import HeaderSocial from './headerSocial'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'am</h5>
        <h1>Stephane Doungue</h1>
        <h5 className='text-light'>Fullstach Developer</h5>
     <CTA/>
     <HeaderSocial/>
     <div className='me'>
       <img src={Me} alt='me' className='ima'/>
     </div>
     <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
