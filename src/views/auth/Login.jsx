import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillFacebook, AiFillGithub, AiFillTwitterCircle, AiOutlineGooglePlus } from 'react-icons/ai';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Login = () => {

    const [state, setState] = useState({
        email: '',
        password: ''
      })
    

        // password show and hide function 
  const togglePasswordVisibility = () => {
    setState({
      ...state,
      passwordVisible: !state.passwordVisible,
    });
  };

      const inputsHandle = (e) => {
        setState({
          ...state,
          [e.target.name]: e.target.value 
        });
      }
      
      const submit = (e) => {
        e.preventDefault()
        console.log(state);
      }


  return (
    <div className="main-w-screen min-h-screen bg-[#161b31] flex justify-center items-center">
      <div className="w-[350px] text-[#d0d2d6] p-2">
        <div className="bg-[#282046] p-4 rounded-md">
          <h1 className="text-xl mb-3">Welcome to e-commerce</h1>
          <p className="text-sm mb-3">
            Pleas Sign in to  your account and start your business
          </p>
          <form onSubmit={submit}>
            
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input
              onChange={inputsHandle} value={state.email}
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
            
            <button className="bg-blue-500 w-full hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3">Sign in</button>
            <div className="plex items-center mb-3 gap-3">
              <p>All ready have an  account ? <Link className="text-blue-600 hover:underline" to='/register'>Sign Up hear</Link> </p>
            </div>
            <div className="flex w-full justify-center items-center mb-3">
              <div className="w-[45%] bg-slate-700 h-[1px]"></div>
              <div  className="w-[10%] flex  justify-center items-center">
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

export default Login;
