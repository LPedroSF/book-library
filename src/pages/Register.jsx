import React from 'react'
import Welcome from '../assets/undraw_welcome.svg'
import Authentication from '../components/Authentication';

const Register = () => {
  return (
    <div className='register__body'>
      <div className="register__form">
      <h3 className="login--title">Get ready to get <span className="purple">exclusive discounts</span> for the <span className="purple">best price</span> imaginable!</h3>
        <Authentication />
      </div>
      <img src={Welcome} alt="Welcome" />
    </div>
  )
}

export default Register;