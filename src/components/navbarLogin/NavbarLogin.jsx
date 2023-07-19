import React from 'react'
import Styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

const NavbarLogin = () => {
  return (
    <>
      <div className="container">
        <nav className="row mt-5">
          <Link to={'/home'} className={Styles.link1}>
            Home
          </Link>
          <Link to={'/profile/addRecipe'} className={Styles.link1}>
            Add Recipe
          </Link>
          <Link to={'/profile'} className={Styles.link1}>
            Profile
          </Link>
          <div className={Styles.lgn}>
            <div className={Styles.bul}>
              <div className={Styles.icon}>
                <i className="fa-regular fa-user fa-lg" />
              </div>
            </div>
            <Link to={'/login'} className={Styles.link2} href="">
              Login
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}

export default NavbarLogin