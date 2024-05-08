import React from 'react'
import './Footer.css'
import { FootersLinksData } from '../../Data/Data'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="container footer-container">

        {/* ================= About-US  ===================== */}
        <div>
          <h4>About Us</h4>
          <ul className="about-params param-links">
            {
              FootersLinksData.Aboutus.map(({ link, linkname }, index) => {
                return (
                  <li key={index}><Link to={link}>{linkname}</Link></li>
                )
              })
            }
          </ul>
        </div>


        {/* ==================== Discover ================== */}
        <div>
          <h4>Discover Us</h4>
          <ul className="discover-params param-links">
            {
              FootersLinksData.Discover.map(({ link, linkname }, index) => {
                return (
                  <li key={index}><Link to={link}>{linkname}</Link></li>
                )
              })
            }
          </ul>
        </div>


        {/* ==================== My account ================== */}
        <div>
          <h4>My Account</h4>
          <ul className="account-params param-links">
            {
              FootersLinksData.Myaccount.map(({ link, linkname }, index) => {
                return (
                  <li key={index}><Link to={link}>{linkname}</Link></li>
                )
              })
            }
          </ul>
        </div>


        {/* ==================== Help ================== */}
        <div>
          <h4>Helps</h4>
          <ul className="Help-params param-links">
            {
              FootersLinksData.Help.map(({ link, linkname }, index) => {
                return (
                  <li key={index}><Link to={link}>{linkname}</Link></li>
                )
              })
            }
          </ul>
        </div>

      </div>

      {/* ==================== CopyRight ================== */}
      <div className="copyright">
        <div className="container copyright-container">
          <p>2023 SyCo-Assassin | All rights reserved</p>
          <div className="footer-social">
            {
              FootersLinksData.socials.map((item, index) => {
                return (
                  <a href={item.link} key={index} >
                    <item.icon />
                  </a>
                )
              })
            }
          </div>
        </div>
      </div>

    </footer>
  )
}
