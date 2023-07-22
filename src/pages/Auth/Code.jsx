import React from 'react'
import main from '../../assets/image/image1.jpg'
import logo from '../../assets/image/barbecue 1.png'

const Code = () => {
    return (
        <div className="row ml-5 mr-5">
            <div
                className="col-md-6 p-0 m-0"
                style={{ backgroundColor: "#EFC81A90", height: "100vh" }}
                id='ls'>
                <img src={main} id="img1" alt="main" />
                <div id="logo-container">
                    <img
                        src={logo}
                        alt="logos"
                    />
                    <p style={{ textAlign: "center", color: "white" }}>Mama Recipe.</p>
                </div>
            </div>
            <div className="col-md-6">
                <form
                    className="container d-flex flex-column align-items-center"
                    id="frc-container"
                >
                    <hr style={{ border: "1px#F5F5F5 solid", width: 250 }} />
                    <div>
                        <label htmlFor="code">Code 6 digit</label>
                        <br />
                        <input
                            style={{ width: 250, height: 34 }}
                            type="password"
                            id="code"
                            name="code"
                            placeholder=""
                        />
                    </div>
                    <button type="submit" className="mt-4 btn btn-warning" id="brc">
                        reset password
                    </button>
                </form>
            </div>
        </div>

    )
}

export default Code