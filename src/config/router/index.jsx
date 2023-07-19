import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Auth/Login';
import Profile from '../../pages/Profile/Profile';
import AddRecipe from '../../pages/Profile/AddRecipe';
import Register from '../../pages/Auth/Register';
import ForgotPassword from '../../pages/Auth/ForgotPassword';
import ResetPassword from '../../pages/Auth/ResetPassword';
import Code from '../../pages/Auth/Code';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace="true" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/register' element={<Register />}></Route>
          <Route path='/forgotpassword' element={<ForgotPassword />}></Route>
          <Route path='/resetpassword' element={<ResetPassword />}></Route>
          <Route path='/code' element={<Code />}></Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/addRecipe" element={<AddRecipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
