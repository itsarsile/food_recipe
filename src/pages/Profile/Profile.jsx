import React from 'react';
// import picPro from '../../assets/image/Rectangle 313 (1).png';
import changeProfile from '../../assets/image/icon-edit.png';
import Footer from '../../components/footer/Footer';
import ModalChangePict from '../../components/modal/ModalChangePict';
import {useNavigate} from 'react-router-dom';
import Style from './Profile.css';
import Navbar from '../../components/navbar/Navbar';
import MyRecipe from './recipeUser/MyRecipe';
import LikedRecipe from './recipeUser/LikedRecipe';
import SavedRecipe from './recipeUser/SavedRecipe';

const Profile = () => {
  const idUser = localStorage.getItem('id');
  const userName = localStorage.getItem('name');
  const profilePic = localStorage.getItem('photo');
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="container" style={Style}>
        <section>
          <div className="text-center m-4" id="profileStyle">
            {/* <img src={picPro} alt="profilePic" className="mb-2" style={{height: 220, width: 220, borderRadius: '50%', objectFit: 'cover'}} /> */}
            <img src={profilePic} alt="profilePic" className="mb-2" style={{height: 220, width: 220, borderRadius: '50%', objectFit: 'cover'}} />
            <div className="dropleft" style={{marginTop: -30, marginLeft: 200}}>
              <button className="btn btn-outline-secondary dropdown-toggle rounded-pill" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src={changeProfile} alt="" className="align-bottom" />
              </button>
              <div className="dropdown-menu bg-secondary text-center" aria-labelledby="dropdownMenu2">
                <button className="dropdown-item" type="button">
                  {/* <ModalChangePict /> */}
                  <ModalChangePict id={idUser} name={userName} />
                </button>
                <button className="dropdown-item" type="button" onClick={() => navigate('/resetpassword')}>
                  Change Password
                </button>
              </div>
            </div>
            <h5>{userName}</h5>
            {/* <h5>User name</h5> */}
          </div>
        </section>
        <section className="mb-5">
          <>
            <nav id="profileStyle">
              <div className="nav nav-tabs border-warning" id="nav-tab-profile" role="tablist">
                <button className="nav-link font-weight-bold active" id="nav-home-tab" data-toggle="tab" data-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                  My Recipe
                </button>
                <button className="nav-link font-weight-bold" id="nav-saved-tab" data-toggle="tab" data-target="#nav-saved" type="button" role="tab" aria-controls="nav-saved" aria-selected="false">
                  Saved Recipe
                </button>
                <button className="nav-link font-weight-bold" id="nav-liked-tab" data-toggle="tab" data-target="#nav-liked" type="button" role="tab" aria-controls="nav-liked" aria-selected="false">
                  Liked Recipe
                </button>
              </div>
            </nav>
            <card className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active " id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                <MyRecipe />
              </div>
              <div className="tab-pane fade" id="nav-saved" role="tabpanel" aria-labelledby="nav-saved-tab">
                <LikedRecipe />
              </div>
              <div className="tab-pane fade" id="nav-liked" role="tabpanel" aria-labelledby="nav-liked-tab">
                <SavedRecipe />
              </div>
            </card>
          </>
        </section>
      </div>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default Profile;
