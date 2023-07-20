import React from 'react';
import Styles from './navStyle.css';
import {useNavigate} from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="container" id="navContainer">
      <nav className="row d-flex justify-content-between">
        <div style={Styles} id="linkNavigate" className="row p-5">
          <h5 className="pr-5" onClick={() => navigate('/home')}>
            Home
          </h5>
          <h5 className="pr-5" onClick={() => navigate('/profile/addRecipe')}>
            Add Recipe
          </h5>
          <h5 onClick={() => navigate('/profile')}>Profile</h5>
        </div>
        <div className="mr-3">
          <button className="btn btn-warning rounded-pill w-100 mt-5 mr-3">Log Out</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar