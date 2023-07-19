import React from 'react';
import picPro from '../../assets/image/Profile.png';
import changeProfile from '../../assets/image/icon-edit.png';
import Footer from '../../components/footer/Footer';
import card from '../../assets/image/profileCard.png';
import ModalChangePict from '../../components/modal/ModalChangePict';
import {useNavigate} from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <section>
          <div className="text-center mt-5">
            <img src={picPro} alt="" className="rounded-circle w-50 col-md-2 col-6" />
            <div className="dropleft" style={{marginTop: -30, marginLeft: 130}}>
              <button className="btn btn-outline-light dropdown-toggle rounded-pill" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src={changeProfile} alt="" className="align-bottom" />
              </button>
              <div className="dropdown-menu bg-secondary text-center" aria-labelledby="dropdownMenu2">
                <button className="dropdown-item" type="button">
                  <ModalChangePict />
                </button>
                <button className="dropdown-item" type="button" onClick={() => navigate('/changePassword')}>
                  Change Password
                </button>
              </div>
            </div>

            <h5>User name</h5>
          </div>
        </section>
        <section className="mb-5">
          <>
            <nav>
              <div className="nav nav-tabs border-warning" id="nav-tab" role="tablist">
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
                <div className="row p-3">
                  <div className="col-md-3 col-6 p-1 mb-4">
                    <img src={card} alt="" className="col-12" />
                    <h5 className="col-md-3 col-6 pl-4 text-white" style={{marginTop: -60}}>
                      Glaze Donut
                    </h5>
                  </div>
                  <div className="col-md-3 col-6 p-1  mb-4">
                    <img src={card} alt="" className="col-12" />
                    <h5 className="col-md-3 col-6 pl-4 text-white" style={{marginTop: -60}}>
                      Glaze Donut
                    </h5>
                  </div>
                  <div className="col-md-3 col-6 p-1  mb-4">
                    <img src={card} alt="" className="col-12" />
                    <h5 className="col-md-3 col-6 pl-4 text-white" style={{marginTop: -60}}>
                      Glaze Donut
                    </h5>
                  </div>
                  <div className="col-md-3 col-6 p-1  mb-4">
                    <img src={card} alt="" className="col-12" />
                    <h5 className="col-md-3 col-6 pl-4 text-white" style={{marginTop: -60}}>
                      Glaze Donut
                    </h5>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="nav-saved" role="tabpanel" aria-labelledby="nav-saved-tab"></div>
              <div className="tab-pane fade" id="nav-liked" role="tabpanel" aria-labelledby="nav-liked-tab"></div>
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
