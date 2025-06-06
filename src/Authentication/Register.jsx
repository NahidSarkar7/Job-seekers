import Lottie from 'lottie-react';
import React from 'react';
// import RegisterLottie from '../assets/RegisterLottie.json'
import RegisterLottie from '../assets/RegisterLottie.json'


const Register = () => {

    return (
 <div className="hero min-h-[500px]">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
     <Lottie loop={true} animationData={RegisterLottie}
     style={{width:'300px'}}
      >
     
     </Lottie>
     
    </div>
    <div className="card bg-base-100 shadow-2xl">
      <div className="card-body">
         <h1 className="text-5xl font-bold">Register now</h1>
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" />
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;