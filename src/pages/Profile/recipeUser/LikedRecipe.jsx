import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import settingIcon from '../../../assets/image/setting.png';
import ModalDelRecipe from '../../../components/modal/ModalDelRecipe';

const LikedRecipe = () => {
  const idUser = localStorage.getItem('id');
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    axios
      .get(`https://food-recipe-be.onrender.com/recipes/liked/user/${idUser}`)
      .then((res) => {
        console.log(res);
        setRecipes(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idUser]);
  return (
    <div>
      <div className="row p-3" id="profileStyle">
        {recipes.map((recipe) => (
          <div className="col-md-3 col-12 p-1 ">
            <Link to={`/home/detail/${recipe.id}`}>
              <img src={recipe.photo} alt="" className="col-12" style={{filter: 'brightness(70%)', height: 150, objectFit: 'cover', borderRadius: '10%'}} />
            </Link>
            <div className="form-inline justify-content-around" style={{marginTop: -60}}>
              <h5 className="col-md-7 col-6 ml-1 text-white">{recipe.title}</h5>
              <div className="dropleft mr-3">
                <button className="btn btn-warning dropdown-toggle rounded-pill" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img src={settingIcon} alt="settingRecipe" className="align-bottom" />
                </button>
                <div className="dropdown-menu bg-secondary text-center" aria-labelledby="dropdownMenu2">
                  <button className="dropdown-item" type="button">
                    <ModalDelRecipe id={recipe.id} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikedRecipe;
