import React from 'react'
import { Link } from 'react-router-dom'
import MyImage from '../Assets/check.png'

export default function PasswordChanged() {
    return (
        <div className="d-flex flex-column">
            <h1 className="text-center"><b>Password Changed Sucessfully!!!</b><img style={{ width: "50px", height: "50px", marginLeft: '8px' }} src={MyImage} alt='success'></img></h1>
            <Link className="text-center mt-5" to="/">
                <button type="submit" className="btn btn-primary">
                    Goto Login
                </button>
            </Link>
        </div>
    )
}
