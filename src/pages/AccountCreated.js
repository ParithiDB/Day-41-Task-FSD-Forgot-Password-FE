import React from "react";
import { Link } from "react-router-dom";
import MyImage from '../Assets/check.png'

const AccountCreated = () => {
    return (
        <div className="d-flex flex-column">
            <h1 className="display-6 text-center"><b>Account Created Successfully</b><img style={{ width: "45px", height: "45px", marginLeft: '8px' }} src={MyImage} alt='login'></img></h1>
            <p className="text-center">Kindly visit our login page</p>
            <Link className="text-center mt-4" to="/login">
                <button type="submit" className="btn btn-primary">
                    Goto Login
                </button>
            </Link>
        </div>
    );
};

export default AccountCreated;