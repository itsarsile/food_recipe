import React, { useState } from 'react'
import '../Auth/auth.css'
import main from '../../assets/image/image1.jpg'
import logo from '../../assets/image/barbecue 1.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate();
  const [login,setLogin] = useState({
    email:"",
    password:""
  });

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    });
  };
  
  const handleLogin = (e) => {
    e.preventDefault();
    axios.post("https://food-recipe-be.onrender.com/users/login",login)
    .then((res) => {
      const {data} = res.data;
      localStorage.setItem("token", data.user.token);
      localStorage.setItem("id", data.user.id);
      localStorage.setItem("name", data.user.name);
      alert("Successful Login");
      navigate("/home");
    })
    .catch((err) => {
      console.log(err);
      alert("Email/Password Wrong");
    });
  };

  return (
    <div className="row ml-md-5 mr-md-5">
  <div
    className="col-md-6 p-0 m-0"
    style={{ backgroundColor: "#EFC81A90", height: "100vh" }}
    id="ls"
  >
    <img src={main} id="img1" alt="main" />
    <div id="logo-container">
      <img src={logo} alt="logo" />
      <p style={{ textAlign: "center", color: "white" }}>Mama Recipe.</p>
    </div>
  </div>
  <div className="col-md-6 p-0 ">
    <div id="lsm" style={{ backgroundColor: "#EFC81A90" }}>
      <img src={main} id="img1" alt="main" />
      <div id="logo-container">
        <img src={logo} alt="logo" id="lgo" />
        <p style={{ textAlign: "center", color: "white" }}>Mama Recipe.</p>
      </div>
    </div>
    <form onSubmit={handleLogin}
      className=" container d-flex flex-column align-items-center"
      id="frl-container"
    >
      <h5 style={{ fontWeight: 700, color: "#EFC81A", fontSize: 25 }}>
        Welcome
      </h5>
      <p id="ext">Log in into your exiting account</p>
      <hr style={{ border: "1px #F5F5F5 solid", width: 500 }} id="st" />
      <div>
        <label id="lbe" htmlFor="email">
          Email
        </label>
        <br />
        <input
          style={{ width: 426, height: 34 }}
          type="email"
          id="email"
          name="email"
          placeholder="example@gmail.com"
          value={login.email}
          onChange={handleChange}
        />
      </div>
      <div className="mt-3">
        <label id="lbp" htmlFor="password">
          Password
        </label>
        <br />
        <input
          style={{ width: 426, height: 34 }}
          type="password"
          id="password"
          name="password"
          placeholder="password"
          value={login.password}
          onChange={handleChange}
        />
      </div>
      <div className="mt-3 mb-1">
      </div>
      <button type="submit" className="mt-4 btn btn-warning" id="brl">
        Log in
      </button>
      <Link to={"/forgotpassword"} id="fp">
        Forgot password ?
      </Link>
      <p className="mt-4">
        Dont have an account ?&nbsp;
        <Link to={"/register"} id="reg">
          Register
        </Link>
      </p>
    </form>
  </div>
</div>

  )
}

export default Login