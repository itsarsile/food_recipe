import React from 'react';
import Styles from './navStyle.css';
import icon from '../../assets/image/menus-icon.png';
import {useNavigate} from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar container navbar-expand-lg" style={Styles}>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <img src={icon} alt="icon" />
      </button>
      <div className="collapse navbar-collapse p-3" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0" id="linkNavigate" style={{cursor: 'pointer'}}>
          <li className="nav-item active">
            <h5 className="pr-5" onClick={() => navigate('/home')}>
              Home
            </h5>
          </li>
          <li className="nav-item">
            <h5 className="pr-5" onClick={() => navigate('/profile/addRecipe')}>
              Add Recipe
            </h5>
          </li>
          <li className="nav-item">
            <h5 onClick={() => navigate('/profile')}>Profile</h5>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <button id="linkNavigate" onClick={(e) => localStorage.removeItem('token')} className="btn btn-warning rounded-pill" style={{cursor: 'pointer'}}>
            Log Out
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
