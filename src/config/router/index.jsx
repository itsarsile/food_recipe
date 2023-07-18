import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Auth/Login';
import Profile from '../../pages/Profile/Profile';
import AddRecipe from '../../pages/Profile/AddRecipe';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace="true" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/addRecipe" element={<AddRecipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
