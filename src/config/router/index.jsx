import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Auth/Login';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace="true" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
