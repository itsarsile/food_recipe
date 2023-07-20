import React from 'react'
import Styles from '../navbarLogin/Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="container mt-5">
            <nav className="row">
                <Link to={'/home'} className={Styles.link1}>
                    Home
                </Link>
                <Link to={'/add-recipe'} className={Styles.link1}>
                    Add Recipe
                </Link>
                <Link to={'/profile'} className={Styles.link1}>
                    Profile
                </Link>
                <div className={Styles.lgn}>
                    <div className={Styles.bul}>
                        <button>Logout</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar