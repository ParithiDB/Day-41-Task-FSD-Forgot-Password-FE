import React from 'react'
import { Link } from "react-router-dom";
import MyImage from '../Assets/check.png'

export default function LoginSuccess() {
    return (
        <div className="d-flex flex-column">
            <h1 className="display-6 text-center"><b>LogIn Successfully</b><img style={{ width: "45px", height: "45px", marginLeft: '8px' }} src={MyImage} alt='login'></img></h1>
            <Link className="text-center mt-4" to="/dashboard">
                <button type="submit" className="btn btn-primary">
                    Goto Dashboard
                </button>
            </Link>
        </div>
    )
}
