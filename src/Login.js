import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Login.css'
import { auth } from './firebase';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const[ password, setPassword] = useState('');


  const signIn = e => {
    e.preventDefault();

    // Some firebase Stuff
    auth.signInWithEmailAndPassword(email, password)
    .then(auth => {
      navigate('/')
    })
    .catch(error => alert(error.message))

  }

  const register = e => {
    e.preventDefault();

    auth
    .createUserWithEmailAndPassword(email, password)
    .then((auth) => {
      // it successfully create user
      console.log(auth);
      if ( auth){
        navigate('/');
      }
    })
    .catch(error => alert(error.message))
  }

  return (
    <div className="login">
        <Link to='/'>
            <h2 className='login_logo'>YourShop</h2>
        </Link>

        <div className="login_container">
            <h1>Sign-in</h1>

            <form action="">
                <h5>E-mail</h5>
                <input type="text" value={email} onChange=
                {e => setEmail(e.target.value) }/>

                <h5>Password</h5>
                <input type="password" value={password}
                onChange={e => setPassword(e.target.value)} />

                <button onClick={signIn} className='login_signInButton'>Sign In</button>

                <p> By signing-in you agree to Conditions of Use & Sales. Check our Privacy Policy and Cookies Notice for more information.
                </p>

                <button onClick={register} className='login_registerButton'>Create Your Account</button>
            </form>
        </div>
    </div>
  )
}

export default Login