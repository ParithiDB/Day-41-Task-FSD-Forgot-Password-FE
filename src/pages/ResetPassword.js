import React, { useState } from 'react'
import MyImage from '../Assets/icons8-password-reset-48.png'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import showPwdImg from '../Assets/Show-password.svg';
import hidePwdImg from '../Assets/Hide-password.svg';
import axios from 'axios';

export default function ResetPassword() {

    const [passwordMode, setPasswordMode] = useState(false);
    const { token } = useParams();
    const [passwordCheck, setPasswordCheck] = useState([]);

    
    const Navigate = useNavigate();
    const handleResetPassword = (event) => {
        event.preventDefault();
        if (passwordCheck.newPassword === passwordCheck.confirmPassword) {
            const RESET_URL = `https://forgotpassword-33jz.onrender.com/reset/${token}`;
            axios.patch(RESET_URL, {password:passwordCheck.newPassword})
                .then(response => {
                    if (response.data.success) {
                        Navigate('/passwordChanged');
                    }
                })
                .catch(err => {
                    alert("Something Went Wrong",err);
                });
        }
        else {
            alert("password doesn't match pls check");
        }
    }
    

    return (
        <div>
            <div className='resetPassword-box'>
                <div>
                    <img src={MyImage} alt='reset'></img>
                </div>
                <div className='input-box p-5'>
                    <Form className='mt-1' onSubmit={handleResetPassword}>
                        <div className="pwd-container">
                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                <Form.Control size='lg' type={passwordMode ? "text" : "password"} placeholder="New Password" onChange={e => setPasswordCheck({ ...passwordCheck, newPassword: e.target.value })} required />
                            </Form.Group>
                            <img
                                title={passwordMode ? "Hide password" : "Show password"}
                                src={passwordMode ? showPwdImg : hidePwdImg}
                                onClick={() => setPasswordMode(prevState => !prevState)}
                                alt='password gif'
                            />
                        </div>
                        <div className="pwd-container">
                            <Form.Group className="mb-5" controlId="exampleForm.ControlInput2">
                                <Form.Control size='lg' type={passwordMode ? "text" : "password"} placeholder='Confirm Password' onChange={e => setPasswordCheck({ ...passwordCheck, confirmPassword: e.target.value })} required />
                            </Form.Group>
                            <img
                                title={passwordMode ? "Hide password" : "Show password"}
                                src={passwordMode ? showPwdImg : hidePwdImg}
                                onClick={() => setPasswordMode(prevState => !prevState)}
                                alt='password gif'
                            />
                        </div>
                        <div className="d-grid mt-3 text-center">
                            <Button variant="primary" size="lg" type='submit'>
                                Reset Password
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}
