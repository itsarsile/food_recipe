import React from 'react'
import Styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

const NavbarLogin = () => {
  return (
    <>
      <div className="container mt-5">
        <div className={Styles.pos}>
          <ul className="nav">
            <li className="nav-item">
              <Link to={'/home'} className="nav-link active" id={Styles.home}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to={'/profile/addRecipe'} className="nav-link" id={Styles.links}>Add Recipe</Link>
            </li>
            <li className="nav-item">
              <Link to={'/profile'} className="nav-link" id={Styles.links}>Profile</Link>
            </li>
            <li className="nav-item mx-auto">
            </li>
            <div className={Styles.wrapper}>
              <div className={Styles.bul}>
                <i className="fa-regular fa-user fa-lg" id={Styles.icon}></i>
              </div>
              <div>
                <li className="nav-item">
                  <Link to={'/login'} className="nav-link" id={Styles.lgn}>Login</Link>
                </li>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  )
}

export default NavbarLogin