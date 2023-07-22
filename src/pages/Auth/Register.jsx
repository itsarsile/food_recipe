import React, { useState } from 'react'
import main from '../../assets/image/image1.jpg'
import logo from '../../assets/image/barbecue 1.png'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [register ,setRegister] = useState({
        name:"",
        email:"",
        password:"",
        phone:"",
    });

    const handleChange = (e) => {
        setRegister({
            ...register,
            [e.target.name]: e.target.value
        });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        const registerData = { ...register};
        axios.post("https://food-recipe-be.onrender.com/users/register",registerData)
        .then((res) => {
            alert("Succesful Register");
            navigate("/Login");
        })
        .catch((err) => {
            console.log(err.response);
            alert("Signup Failed")
        })
    };

    return (
        <div className="row ml-md-5 mr-md-5">
            <div
                className="col-md-6 p-0 m-0"
                style={{ backgroundColor: "#EFC81A90", height: "100vh" }}
                id="ls"
            >
                <img src={main} id="img2" alt="main" />
                <div id="logo-container1">
                    <img src={logo} alt="logo" />
                    <p style={{ textAlign: "center", color: "white" }}>Mama Recipe.</p>
                </div>
            </div>
            <div className="col-md-6 p-0">
                <div id="lsm1" style={{ backgroundColor: "#EFC81A90" }}>
                    <img src={main} id="img2" alt="main" />
                    <div id="logo-container1">
                        <img src={logo} alt="logo1" id="lgo" />
                        <p style={{ textAlign: "center", color: "white" }}>Mama Recipe.</p>
                    </div>
                </div>
                <form
                    onSubmit={handleRegister}
                    className="container d-flex flex-column align-items-center"
                    id="fr-container"
                >
                    <h5 style={{ fontWeight: 700, color: "#EFC81A", fontSize: 25 }}>
                        Let’s Get Started !
                    </h5>
                    <p id="ext">Create new account to access all features</p>
                    <hr style={{ border: "1px#F5F5F5 solid", width: 500 }} id="st" />
                    <div>
                        <label id="lbn" htmlFor="name">
                            Name*
                        </label>
                        <br />
                        <input
                            style={{ width: 426, height: 34 }}
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            value={register.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mt-3">
                        <label id="lbe" htmlFor="email">
                            Email address*
                        </label>
                        <br />
                        <input
                            style={{ width: 426, height: 34 }}
                            type="email"
                            id="email"
                            name="email"
                            placeholder="example@gmail.com"
                            value={register.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mt-3">
                        <label id="lbph" htmlFor="phone">
                            Phone number
                        </label>
                        <br />
                        <input
                            style={{ width: 426, height: 34 }}
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="08xxxxxxxx"
                            value={register.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mt-3">
                        <label id="lbp" htmlFor="password">
                            Password*
                        </label>
                        <br />
                        <input
                            style={{ width: 426, height: 34 }}
                            type="password"
                            id="password"
                            name="password"
                            placeholder="password"
                            value={register.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mt-3 mb-1">
                        <input type="checkbox" id="agree-checkbox" name="agree" />
                        <label htmlFor="agree-checkbox">
                            I agree to terms &amp; conditions
                        </label>
                    </div>
                    <button type="submit" className="mt-4 btn btn-warning" id="brr" onClick={handleRegister}>
                        Register Account
                    </button>
                    <p className="mt-4">
                        Already have account?
                        <Link to={"/Login"} id="reg">
                            Login here
                        </Link>
                    </p>
                </form>
            </div>
        </div>

    )
}

export default Register