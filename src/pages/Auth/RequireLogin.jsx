import React from 'react';
import NavbarLogin from '../../components/navbarLogin/NavbarLogin';
import Navbar from '../../components/navbar/Navbar';

const RequireLogin = () => {
  const isLogin = localStorage.getItem('token');
  if (!isLogin) {
    return <NavbarLogin />;
  }
  return <Navbar/>;
};

export default RequireLogin;