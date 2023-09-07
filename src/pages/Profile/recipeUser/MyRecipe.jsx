import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import settingIcon from '../../../assets/image/setting.png';
import ModalEditRecipe from '../../../components/modal/ModalEditRecipe';
import ModalDelRecipe from '../../../components/modal/ModalDelRecipe';
import {useDispatch, useSelector} from 'react-redux';
import {getMyRecipe} from '../../../config/redux/actions/profileRecipeAction';

const MyRecipe = () => {
  const dispatch = useDispatch();
  const idUser = localStorage.getItem('id');
  const {myRecipe} = useSelector((state) => state.myRecipe);
  useEffect(() => {
    dispatch(getMyRecipe(idUser));
  }, [idUser]);
  return (
    <div>
      <div className="row p-3" id="profileStyle">
        {myRecipe.map((recipe) => (
          <div className="col-md-3 col-12 p-1 mb-4">
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
                    <ModalEditRecipe id={recipe.id} userid={recipe.userid} title={recipe.title} details={recipe.details} />
                  </button>
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

export default MyRecipe;
