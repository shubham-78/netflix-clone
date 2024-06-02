import React, { useEffect, useState } from 'react'
import "../css/nav.css"
import { useNavigate } from "react-router-dom"

function Nav() {
  const [show, handleShow] = useState(false)
  const navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.screenY > 100) {
      handleShow(true)
    } else {
      handleShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar)
    return () => window.addEventListener("scroll", transitionNavBar)
  }, [])

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className='nav_contents'>
        <img onClick={() => navigate('/')} className='nav_logo'
          src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
          alt='Netflix'
        />
        <img onClick={() => navigate('/profile')} className='nav_avatar'
          src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
          alt='Netflix-avatar'
        />
      </div>
    </div>
  )
}

export default Nav