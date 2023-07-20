import React from 'react'
import main from '../../assets/image/image1.jpg'
import logo from '../../assets/image/barbecue 1.png'

const ResetPassword = () => {
    return (
        <div className="row ml-5 mr-5">
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
                    id="frr-container"
                >
                    <hr style={{ border: "1px#F5F5F5 solid", width: 500 }} id="st" />
                    <div className="">
                        <label htmlFor="password">Create new password</label>
                        <br />
                        <input
                            style={{ width: 426, height: 34 }}
                            type="password"
                            id="password"
                            name="password"
                            placeholder="password"
                        />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="password">New password</label>
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
                    <button type="submit" className="mt-4 btn btn-warning" id="brp">
                        Reset password
                    </button>
                </form>
            </div>
        </div>

    )
}

export default ResetPassword