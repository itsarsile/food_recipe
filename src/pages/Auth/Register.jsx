import React from 'react'
import main from '../../assets/image/image1.jpg'
import logo from '../../assets/image/barbecue 1.png'

const Register = () => {
    return (
        <div className="row ml-md-5 mr-md-5">
            <div
                className="col-md-6 p-0 m-0"
                style={{ backgroundColor: "#EFC81A90", height: "100vh" }}
                id="ls"
            >
                <img src={main} id="img2" alt="image" />
                <div id="logo-container1">
                    <img src={logo} alt="logo" />
                    <p style={{ textAlign: "center", color: "white" }}>Mama Recipe.</p>
                </div>
            </div>
            <div className="col-md-6 p-0">
                <div id="lsm1" style={{ backgroundColor: "#EFC81A90" }}>
                    <img src={main} id="img2" alt="image" />
                    <div id="logo-container1">
                        <img src={logo} alt="logo" id="lgo" />
                        <p style={{ textAlign: "center", color: "white" }}>Mama Recipe.</p>
                    </div>
                </div>
                <form
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
                        />
                    </div>
                    <div className="mt-3 mb-1">
                        <input type="checkbox" id="agree-checkbox" name="agree" />
                        <label htmlFor="agree-checkbox">
                            I agree to terms &amp; conditions
                        </label>
                    </div>
                    <button type="submit" className="mt-4 btn btn-warning" id="brr">
                        Register Account
                    </button>
                    <p className="mt-4">
                        Already have account?
                        <a href="login.html" id="reg">
                            Login here
                        </a>
                    </p>
                </form>
            </div>
        </div>

    )
}

export default Register