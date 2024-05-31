import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { loginUserApi } from '../../apis/Api';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validation = () => {
    let isValid = true;

    if (email.trim() === '' || !email.includes('@')) {
      setEmailError('Email is empty or invalid');
      isValid = false;
    }

    if (password.trim() === '') {
      setPasswordError('Password is empty');
      isValid = false;
    }
    return isValid;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!validation()) {
      return;
    }

    const data = {
      email: email,
      password: password,
    };

    loginUserApi(data).then((res) => {
      if (res.data.success === false) {
        toast.error(res.data.message);
      } else {
        toast.success(res.data.message);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.userData));
      }
    });
  };

  return (
    <div className="container">
      <div className="login-container">
        <div className="login-image">
          <img src="https://i.pinimg.com/564x/64/5f/ef/645fef09c3f45b7d94d316b6493594b1.jpg" alt="Login Visual" />
        </div>
        <div className="login-frame">
          <h1 className="text-center mb-4">Welcome back to Feast Together!</h1>
          <form>
            <div className="form-group">
              <label>Email Address:</label>
              <div>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control"
                  placeholder="Enter your email address"
                />
                {emailError && <p className="text-danger">{emailError}</p>}
              </div>
            </div>
            <div className="form-group">
              <label>Password:</label>
              <div>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                />
                {passwordError && <p className="text-danger">{passwordError}</p>}
              </div>
            </div>
            <button onClick={handleLogin} className="btn btn-danger w-100">
              Login
            </button>
          </form>
          <p className="text-center mt-4">
            Already have an account? <Link to="/register" className="login-link">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
