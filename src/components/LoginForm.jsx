import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="w-full max-w-[380px]  sm:max-w-[560px] lg:max-w-[540px] px-6 py-8 pb-16 md:px-14 md:py-10 rounded-lg bg-[rgba(0,0,0,0.7)]">
      
      <div className="-translate-y-2"> 
        <h1 className="text-white font-bold text-3xl mb-6">Sign In</h1>
        
        <form className="flex flex-col gap-4">
          <input
            type="text"
            name="email"
            placeholder="Email or mobile number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-400 py-3 px-4 rounded bg-[rgba(22,21,19,1)] text-white"
          />
          <input
            type="password"
            placeholder="Password"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-400 py-3 px-4 rounded bg-[rgba(22,21,19,1)] text-white"
          />
          <button
            type="submit"
            className="bg-[rgb(229,9,19)] hover:bg-red-700 text-white font-semibold py-3 rounded"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-400 mt-4">OR</p>

        <button className="bg-[rgba(54,54,55,0.8)] hover:bg-gray-600 text-white font-semibold py-3 mt-3 w-full rounded">
          Use a Sign-in-code
        </button>

        <button className="text-white underline mt-4 hover:text-gray-400 text-sm">
          Forgot password?
        </button>

        <label className="flex items-center text-white mt-4 text-sm">
          <input type="checkbox" className="mr-2 accent-gray-200" />
          Remember me
        </label>

        <p className="text-white text-sm mt-4">
          <span className="text-gray-400">New to Netflix? </span>
          <Link to='/signup'>
          <a href="#" className="hover:underline">Sign up now</a>
          </Link>
        </p>

        <p className="text-gray-400 text-xs mt-4">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
        <a href="#" className="text-blue-500 underline text-sm">Learn more</a>
      </div>

    </div>
  )
}

export default LoginForm
