import React from 'react'
import Styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

const NavbarLogin = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Add Recipe</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Profile</a>
            </li>
            <li className="nav-item mx-auto">
              <a className="nav-link" href="#"></a>
            </li>
            <div>
              <li className="nav-item">
                <a className="nav-link">Login</a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  )
}

export default NavbarLogin