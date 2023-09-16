import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillFacebook, AiFillGithub, AiFillTwitterCircle, AiOutlineGooglePlus } from 'react-icons/ai';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
  // set data state 
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // error state 
  const [error, setError] = useState('');

  // onChant handle 
  const inputsHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  
  // password show and hide function 
  const togglePasswordVisibility = () => {
    setState({
      ...state,
      passwordVisible: !state.passwordVisible,
    });
  };


  // password validation function 
  const validatePasswords = () => {
    if (state.password !== state.confirmPassword) {
      return 'Passwords do not match.';
    }
  
    else if (state.password.length < 8) {
      return 'Password must be at least 8 characters long.';
    }
    else if(!/[A-Z]/.test(state.password)){
      return 'Password must contain at least one uppercase letter'
    }
    else if(!/[!@#$&*]/.test(state.password)){
      return 'Password must contain at least one special character'
    }
    else if(!/[0-9]/.test(state.password)){
      return 'Password must contain at least one one digit'
    }
    else if(!/[a-z]/.test(state.password)){
      return 'Password must contain at least one lowercase letter'
    }
  
  
    return ''; // No error message if passwords are valid
  };
  
  // on submit function 

  const submit = (e) => {
    e.preventDefault();
  
    const passwordValidationResult = validatePasswords();
  
    if (passwordValidationResult) {
      setError(passwordValidationResult);
      return;
    }
  
    setError(''); // Reset error if passwords are valid
  
    // Continue with form submission or further processing
    console.log('Registration data:', state);
  };
  

  return (
    <div className="main-w-screen min-h-screen bg-[#161b31] flex justify-center items-center">
      <div className="w-[350px] text-[#d0d2d6] p-2">
        <div className="bg-[#282046] p-4 rounded-md">
          <h1 className="text-xl mb-3">Welcome to e-commerce</h1>
          <p className="text-sm mb-3">
            Please register to your account and start your business
          </p>
          <form onSubmit={submit}>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="name">Name</label>
              <input
                onChange={inputsHandle}
                value={state.name}
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden"
                type="text"
                name="name"
                placeholder="Name"
                id="name"
                required
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input
                onChange={inputsHandle}
                value={state.email}
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden"
                type="email"
                name="email"
                placeholder="Email"
                id="email"
                required
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="password">Password</label>
              <div className="relative">
                <input
                  onChange={inputsHandle}
                  value={state.password}
                  className="px-3 py-2 outline-none border w-full border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden pr-10"
                  type={state.passwordVisible ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  id="password"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center px-2 focus:outline-none"
                >
                  {state.passwordVisible ?  <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="relative">
                <input
                  onChange={inputsHandle}
                  value={state.confirmPassword}
                  className="px-3 py-2 outline-none border w-full border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden pr-10"
                  type={state.passwordVisible ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  id="confirmPassword"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center px-2 focus:outline-none"
                >
                  {state.passwordVisible ?  <FaEye />: <FaEyeSlash /> }
                </button>
              </div>
            </div>
            {error && <div className="text-red-500">{error}</div>}
            <div className="flex items-center w-full gap-3 mb-3">
              <input
                className="w-4 h-4 text-blue-600 overflow-hidden bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
                type="checkbox"
                name="checkbox"
                id="checkbox"
                required
              />
              <label htmlFor="checkbox">I agree to privacy policy & terms</label>
            </div>
            <button className="bg-blue-500 w-full hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3">Sign Up</button>
            <div className="plex items-center mb-3 gap-3">
              <p>Already have an account? <Link className="text-blue-600 hover:underline" to='/login'>Sign in here</Link></p>
            </div>
            <div className="flex w-full justify-center items-center mb-3">
              <div className="w-[45%] bg-slate-700 h-[1px]"></div>
              <div className="w-[10%] flex justify-center items-center">
                <span className="pb-1">Or</span>
              </div>
              <div className="w-[45%] bg-slate-700 h-[1px]"></div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div className="w-[35px] h-[35px] flex rounded-md bg-orange-500 shadow-lg hover:shadow-orange-700/50 justify-center cursor-pointer items-center overflow-hidden">
                <span><AiOutlineGooglePlus/></span>
              </div>
              <div className="w-[35px] h-[35px] flex rounded-md bg-blue-500 shadow-lg hover:shadow-blue-700/50 justify-center cursor-pointer items-center overflow-hidden">
                <span><AiFillFacebook/></span>
              </div>
              <div className="w-[35px] h-[35px] flex rounded-md bg-indigo-500 shadow-lg hover:shadow-indigo-700/50 justify-center cursor-pointer items-center overflow-hidden">
                <span><AiFillTwitterCircle/></span>
              </div>
              <div className="w-[35px] h-[35px] flex rounded-md bg-green-500 shadow-lg hover:shadow-green-700/50 justify-center cursor-pointer items-center overflow-hidden">
                <span><AiFillGithub/></span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

