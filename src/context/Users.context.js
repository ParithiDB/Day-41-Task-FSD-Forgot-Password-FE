import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const UserContext = createContext({
    user : [],
    setUser : () => Promise,
    input : [],
    setInput : () => Promise,
    handleSignup : () => null,
    handleLogin : () => null,
    handleMail : () => null,
    loaded : "",
    setLoaded : () => Promise
})

export const useUser = () => useContext(UserContext);

export default function UsersContextProvider({children}) {

    const [user,setUser] = useState([]);
    const [input,setInput] = useState(null);
    const [loaded,setLoaded] = useState("")

    useEffect(() => {
        const URL = 'https://forgotpassword-33jz.onrender.com/users';
        axios.get(URL)
            .then(res => {
                // console.log(res.data.result);
                setUser(res.data.result);
            })
            .catch(err => {
                console.log(err);
            })
    },[])

    const navigate = useNavigate();
    const handleSignup = (event) => {
        event.preventDefault();
        const SIGNUP_URL = 'https://forgotpassword-33jz.onrender.com/signup/createUser';
        axios.post(SIGNUP_URL,input)
            .then(res => {
                alert('Account created!!! Login to Continue!');
            navigate('/login')
            })
            .catch(err => {
            alert("Something Went Wrong")
            console.log("Account Created Failed",err);
            })
    };

    const handleLogin = (event) => {
        event.preventDefault();
        const LOGIN_URL = 'https://forgotpassword-33jz.onrender.com/login';
        axios.post(LOGIN_URL,input)
            .then(res => {
                if(res.data.message === "Login Successful!!"){
                    navigate('/dashboard');
                }
                else{
                    alert(res.data.message);
                }
            })
            .catch(err => {
                alert("Something Went Wrong");
                console.log(err);
            })
    }


    const handleMail = (event) => {
        event.preventDefault();
        // toast("Email Sending.....",{autoClose: 2000,pauseOnHover: false});
        setLoaded("true");
        const FORGOT_URL = 'https://forgotpassword-33jz.onrender.com/forgot';
        axios.put(FORGOT_URL,input)
        .then(response => {
            if(response.data.success){
                setLoaded("false");
                toast("Email Sending Successfully");
                // alert(`${response.data.message} => Go to Mail`)
            }
        })
        .catch(err => {
            setLoaded("false");
            toast("Enter Valid Email");
        })
    }

    const value = {
        user,
        setUser,
        input,
        setInput,
        handleSignup,
        handleLogin,
        handleMail,
        loaded
    }

  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  )
}
