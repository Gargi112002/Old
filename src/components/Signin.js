import Footer from "./Footer";
import "./Login.css";
import Navbar from "./Navbar";
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
function Signin() {
    const [uname, setUname] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      if (name === 'uname') {
        setUname(value);
      } else {
        setPassword(value);
      }
    };
  
    const validateForm = () => {
      let isValid = true;
      const newErrors = {};
  
      // Validate uname
      if (!uname.trim()) {
        newErrors.uname = 'Username is required';
        isValid = false;
      } else if (!/^[a-zA-Z\-]+$/.test(uname)) {
        newErrors.uname = 'Username is invalid';
        isValid = false;
      }
  
      // Validate password
      if (!password.trim()) {
        newErrors.password = 'Password is required';
        isValid = false;
      }else if (!"^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$".test(password)) {
        newErrors.pass = 'pass is invalid';
        isValid = false;
      }
  
      setErrors(newErrors);
      return isValid;
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (validateForm()) {
        // Submit the form
      }
    };
  return (
    <form onSubmit={handleSubmit}>
    <div>
        <Navbar/>
    
    <div className="Login">
      <div className="loginContainer">
        <h1>Hello!</h1>

        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" value ={uname} required = "true" onChange={handleInputChange}
          
          errorMessage= "Username should be 3-16 characters and shouldn't include any special character!"
          pattern= "^[A-Za-z0-9]{3,16}$"/>
           {errors.email && <div className="error">{errors.email}</div>}
          {/* {renderErrorMessage("uname")} */}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="password" value={password} required= "true"onChange={handleInputChange}
           errorMessage=  "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!" 
           pattern= "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"/>
          {/* {renderErrorMessage("pass")} */}
          {errors.password && <div className="error">{errors.password}</div>}
        </div>

        <a href="#">Forgot password?</a>
        <NavLink to="/login">Already have account!</NavLink>

        <button  type="submit" className="loginBut">
          <p>SignUp</p>
        </button>

        <button className="siG">
          <img
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
            alt="Trees"
            height="30"
          />
          <p>Sign in with Google</p>
          
        </button>
      </div>
    </div>
    <Footer/>
    </div>
    </form>
  );
}

export default Signin;



  