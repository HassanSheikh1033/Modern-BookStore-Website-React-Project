import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import { navLinks, navRight } from '../../Data/Data'
import Logo from '../../assets/logo.png'
import { BiMenu } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from 'react'


export default function Navbar() {

  const [isNavLinksShowing, setisNavLinksShowing] = useState(false);

  // Window - Scroll NavLinks Effects ---------
  if (innerWidth < 1024) {
    window.addEventListener('scroll', () => {
      document.querySelector('.navLinks').classList.add('navLinksHide')
      setisNavLinksShowing(false)
    })
  }
  window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('navShadow', window.scrollY > 0)
  })


  return (
    <nav>
      <div className="container nav-container">
        {/* ............ Nav-logo  ............. */}
        <Link to={'/'} className='logo' >
          <img src={Logo} alt="logo" />
        </Link>

        {/* ............ Nav-Links  ............. */}
        <ul className={` nav-links ${isNavLinksShowing ? 'navLinksShow' : 'navLinksHide'} `}>
          {
            navLinks.map(({ name, path }, index) => {
              return (
                <li key={index}>
                  <NavLink  
                  className={({ isActive }) => {
                    isActive ? '.active' : ''
                  }}
                    to={path}
                  >
                    {name}
                  </NavLink>
                </li>
              )
            })
          }
        </ul>

        {/* ............ Nav-Right  ............. */}
        <div className="nav-right">
          {
            navRight.managements.map((item, index) => {
              return (
                <Link
                  key={index}
                  // target='_blank'
                  className='managements-icons'
                  to={item.link}
                >
                  <item.icon />
                </Link>
              )
            })
          }

          <button
            className='menu-button btn btn-border'
            onClick={() => setisNavLinksShowing(!isNavLinksShowing)}
          >
            {
              !isNavLinksShowing ? < BiMenu /> : <IoCloseSharp />
            }
          </button>

        </div>

      </div>

    </nav>
  )
}
