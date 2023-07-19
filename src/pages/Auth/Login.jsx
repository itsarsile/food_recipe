import React from 'react'
import '../Auth/auth.css'
import main from '../../assets/image/image1.jpg'
import logo from '../../assets/image/barbecue 1.png'

const Login = () => {
  return (
    <div className="row ml-md-5 mr-md-5">
  <div
    className="col-md-6 p-0 m-0"
    style={{ backgroundColor: "#EFC81A90", height: "100vh" }}
    id="ls"
  >
    <img src={main} id="img1" alt="image" />
    <div id="logo-container">
      <img src={logo} alt="logo" />
      <p style={{ textAlign: "center", color: "white" }}>Mama Recipe.</p>
    </div>
  </div>
  <div className="col-md-6 p-0 ">
    <div id="lsm" style={{ backgroundColor: "#EFC81A90" }}>
      <img src={main} id="img1" alt="image" />
      <div id="logo-container">
        <img src={logo} alt="logo" id="lgo" />
        <p style={{ textAlign: "center", color: "white" }}>Mama Recipe.</p>
      </div>
    </div>
    <form
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
        />
      </div>
      <div className="mt-3 mb-1">
        <input type="checkbox" id="agree-checkbox" name="agree" />
        <label htmlFor="agree-checkbox">
          I agree to terms &amp; conditions
        </label>
      </div>
      <button type="submit" className="mt-4 btn btn-warning" id="brl">
        Log in
      </button>
      <a href="forgotPassword.html" id="fp">
        Forgot password?
      </a>
      <p className="mt-4">
        Dont have an account?
        <a href="register.html" id="reg">
          Register
        </a>
      </p>
    </form>
  </div>
</div>

  )
}

export default Login