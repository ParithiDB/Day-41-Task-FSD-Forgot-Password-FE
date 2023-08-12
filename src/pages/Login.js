import React, {useState} from 'react'
import MyImage from '../Assets/user.png'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import showPwdImg from '../Assets/Show-password.svg';
import hidePwdImg from '../Assets/Hide-password.svg';
import { useUser } from '../context/Users.context';

export default function Login() {

    const [passwordMode, setPasswordMode] = useState(false);
    const {input,setInput,handleLogin} = useUser();

    return (
        <div>
            <div className='login-box'>
                <div>
                    <img src={MyImage} alt='login'></img>
                </div>
                <div className='input-box p-5'>
                    <Form className='mt-1' onSubmit={handleLogin}>
                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                            <Form.Control size='lg' type="email" placeholder="Email ID" onChange={e => setInput({ ...input, mail: e.target.value })} required />
                        </Form.Group>
                        <div className="pwd-container">
                            <Form.Group className="mb-5" controlId="exampleForm.ControlInput2">
                                <Form.Control size='lg' type={passwordMode ? "text" : "password"} placeholder='Password' onChange={e => setInput({ ...input, password: e.target.value })} required />
                            </Form.Group>
                            <img
                                title={passwordMode ? "Hide password" : "Show password"}
                                src={passwordMode ? showPwdImg : hidePwdImg}
                                onClick={() => setPasswordMode(prevState => !prevState)}
                                alt='password gif'
                            />
                        </div>
                        <div className='forget-field'>
                            <div>
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3">
                                        <Form.Check // prettier-ignore
                                            type={type}
                                            id={`default-${type}`}
                                            label="Remember Me"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <Link to='/forgot' style={{ color: 'blue', textDecoration: "underline" }}><p>Forget Password?</p></Link>
                            </div>
                        </div>
                        <div className="d-grid mt-3">
                            <Button variant="primary" size="lg" type='submit'>
                                Login
                            </Button>
                        </div>
                    </Form>
                </div>
                <div className='non-user'>
                    <p>Doesn't have an account? <Link to="/signUp" style={{ color: 'blue', textDecoration: "underline", fontWeight: 'bold' }}><sapn>Register</sapn></Link></p>
                </div>
            </div>
        </div>
    )
}
