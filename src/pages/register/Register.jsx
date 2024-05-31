// import React, { useState } from 'react';
// import { toast } from 'react-toastify';
// import 'bootstrap/dist/css/bootstrap.min.css'; 
// import { registerUserApi } from '../../apis/Api';
// import './Register.css'; // Make sure to import the same CSS file as the Login page

// const Register = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [firstNameError, setFirstNameError] = useState('');
//   const [lastNameError, setLastNameError] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [confirmPasswordError, setConfirmPasswordError] = useState('');

//   const validate = () => {
//     let isValid = true;

//     if (firstName.trim() === '') {
//       setFirstNameError('First Name is required');
//       isValid = false;
//     }

//     if (lastName.trim() === '') {
//       setLastNameError('Last Name is required');
//       isValid = false;
//     }

//     if (email.trim() === '') {
//       setEmailError('Email is required');
//       isValid = false;
//     }

//     if (password.trim() === '') {
//       setPasswordError('Password is required');
//       isValid = false;
//     }

//     if (confirmPassword.trim() === '') {
//       setConfirmPasswordError('Confirm Password is required');
//       isValid = false;
//     }

//     if (password !== confirmPassword) {
//       setConfirmPasswordError('Passwords do not match');
//       isValid = false;
//     }

//     return isValid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     const isValid = validate();

//     if (!isValid) {
//       return;
//     }

//     const data = {
//       firstName: firstName,
//       lastName: lastName,
//       email: email,
//       password: password
//     };

//     registerUserApi(data)
//       .then((res) => {
//         if (res.data.success === false) {
//           toast.error(res.data.message);
//         } else {
//           toast.success(res.data.message);
//         }
//       })
//       .catch((error) => {
//         toast.error('An error occurred while registering');
//       });
//   };

//   return (
//     <div className="container">
//       <div className="login-container"> {/* Reuse the same class as the login page */}
//         <div className="login-image"> {/* Reuse the same class as the login page */}
//           <img src="https://i.pinimg.com/564x/64/5f/ef/645fef09c3f45b7d94d316b6493594b1.jpg" alt="Register Visual" />
//         </div>
//         <div className="login-frame"> {/* Reuse the same class as the login page */}
//           <h1 className="text-center mb-4">Create an Account</h1>
//           <form>
//             <div className="form-group">
//               <label>First Name:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Enter your first name"
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//               />
//               {firstNameError && <p className="text-danger">{firstNameError}</p>}
//             </div>
//             <div className="form-group">
//               <label>Last Name:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Enter your last name"
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//               />
//               {lastNameError && <p className="text-danger">{lastNameError}</p>}
//             </div>
//             <div className="form-group">
//               <label>Email Address:</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 placeholder="Enter your email address"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               {emailError && <p className="text-danger">{emailError}</p>}
//             </div>
//             <div className="form-group">
//               <label>Password:</label>
//               <input
//                 type="password"
//                 className="form-control"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               {passwordError && <p className="text-danger">{passwordError}</p>}
//             </div>
//             <div className="form-group">
//               <label>Confirm Password:</label>
//               <input
//                 type="password"
//                 className="form-control"
//                 placeholder="Confirm your password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//               />
//               {confirmPasswordError && <p className="text-danger">{confirmPasswordError}</p>}
//             </div>
//             <button onClick={handleSubmit} className="btn btn-primary btn-block w-100">Register</button>
//           </form>
//           <p className="text-center mt-4">
//             Already have an account? <span className="login-link">Login</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'; // Import Link component
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { registerUserApi } from '../../apis/Api';
import './Register.css'; // Make sure to import the same CSS file as the Login page

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const validate = () => {
    let isValid = true;

    if (firstName.trim() === '') {
      setFirstNameError('First Name is required');
      isValid = false;
    }

    if (lastName.trim() === '') {
      setLastNameError('Last Name is required');
      isValid = false;
    }

    if (email.trim() === '') {
      setEmailError('Email is required');
      isValid = false;
    }

    if (password.trim() === '') {
      setPasswordError('Password is required');
      isValid = false;
    }

    if (confirmPassword.trim() === '') {
      setConfirmPasswordError('Confirm Password is required');
      isValid = false;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const isValid = validate();

    if (!isValid) {
      return;
    }

    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    };

    registerUserApi(data)
      .then((res) => {
        if (res.data.success === false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
        }
      })
      .catch((error) => {
        toast.error('An error occurred while registering');
      });
  };

  return (
    <div className="container">
      <div className="login-container"> {/* Reuse the same class as the login page */}
        <div className="login-image"> {/* Reuse the same class as the login page */}
          <img src="https://i.pinimg.com/564x/64/5f/ef/645fef09c3f45b7d94d316b6493594b1.jpg" alt="Register Visual" />
        </div>
        <div className="login-frame"> {/* Reuse the same class as the login page */}
          <h1 className="text-center mb-4">Create an Account</h1>
          <form>
            <div className="form-group">
              <label>First Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {firstNameError && <p className="text-danger">{firstNameError}</p>}
            </div>
            <div className="form-group">
              <label>Last Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {lastNameError && <p className="text-danger">{lastNameError}</p>}
            </div>
            <div className="form-group">
              <label>Email Address:</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <p className="text-danger">{emailError}</p>}
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && <p className="text-danger">{passwordError}</p>}
            </div>
            <div className="form-group">
              <label>Confirm Password:</label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {confirmPasswordError && <p className="text-danger">{confirmPasswordError}</p>}
            </div>
            <button onClick={handleSubmit} className="btn btn-danger w-100">Register</button>
          </form>
          <p className="text-center mt-4">
            Already have an account? <Link to="/login" className="login-link">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
