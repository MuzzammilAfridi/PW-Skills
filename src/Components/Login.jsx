import React from 'react'

const Login = () => {
  return (
    <div className='flex gap-7'>
       <div className="hidden sm:block w-[65vw] bg-cyan-400">
        <img className='w-full h-[120vh] ' src="./src/assets/Images/signin-banner.svg" alt="" />
       </div>
       <div className="">
            <div className="">
                <h1>LOGO</h1>
            </div>
            <div className="">
                <h3>Get Onboard and jumpstart your career!</h3>
                <p>Please enter your phone number to Loging/Register</p>
            </div>
            <div className="">
                <input type="text" placeholder='Enter your mobile number' />
                <button>Sent OTP</button>
            </div>
            <p>OR</p>
            <div className="">Sign in with Google</div>
       </div>
    </div>
  )
}

export default Login