import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Forgot from './pages/Forgot';
import AccountCreated from './pages/AccountCreated';
import ResetPassword from './pages/ResetPassword';
import PasswordChanged from './pages/PasswordChanged';
import LoginSuccess from './pages/LoginSuccess';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <div className="App">
      <Link to="/"></Link>
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/login' Component={Login}></Route>
        <Route path='/signUp' Component={SignUp}></Route>
        <Route path='/forgot' Component={Forgot}></Route>
        <Route path='/AccountCreated' Component={AccountCreated}></Route>
        <Route path='/ResetPassword/:token' Component={ResetPassword}></Route>
        <Route path='/passwordChanged' Component={PasswordChanged}></Route>
        <Route path='/loginSuccess' Component={LoginSuccess}></Route>
        <Route path='/dashboard' Component={Dashboard}></Route>
      </Routes>
    </div>
  );
}

export default App;
