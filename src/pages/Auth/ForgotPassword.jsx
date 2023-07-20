import React from 'react'
import main from '../../assets/image/image1.jpg'
import logo from '../../assets/image/barbecue 1.png'

const ForgotPassword = () => {
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
            <div className="col-md-6">
                <form
                    className="container d-flex flex-column align-items-center"
                    id="frf-container"
                >
                    <h5 style={{ fontWeight: 700, color: "#EFC81A", fontSize: 25 }}>
                        Forgot password?
                    </h5>
                    <p style={{ color: "#8692A6", fontWeight: 400, textAlign: "center" }}>
                        We just need your registered e-mail address
                        <br />
                        to send your password resend
                    </p>
                    <hr style={{ border: "1px#F5F5F5 solid", width: 500 }} id="st" />
                    <div>
                        <label htmlFor="email">Email</label>
                        <br />
                        <input
                            style={{ width: 426, height: 34 }}
                            type="email"
                            id="email"
                            name="email"
                            placeholder="example@gmail.com"
                        />
                    </div>
                    <button type="submit" className="mt-4 btn btn-warning" id="brf">
                        Send E-mail
                    </button>
                </form>
            </div>
        </div>

    )
}

export default ForgotPassword