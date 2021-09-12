import React, { useEffect, useState } from 'react';
import Footer from '../../components/UI/authLayout/footer';
import Loader from 'react-loader-spinner';
import { Link, Redirect } from 'react-router-dom';
import logo from '../../images/logo.png';
import './style.css';
import googleplay from '../../images/google-play.png';
import appstore from '../../images/app-store.png';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../Redux/Store';

const SignupPage = (props) =>{

    const [fullName,setFullName] = useState('')
    const [emailOrMob,setEmailOrMob] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [msg,setMsg] = useState(false);

    const dispatch = useDispatch();

    const signupUser = (emailOrMob,fullName,username,password) =>{
        dispatch(signup({emailOrMob,fullName,username,password}))
        setEmailOrMob('');
        setFullName('');
        setUsername('');
        setPassword('');
        setMsg(true);
        setTimeout(() => {
            setMsg(false);
        }, 3000);
    }

    const auth = useSelector(state=>state.auth);

    if(auth.authenticate){
        return  <Redirect to={`/`} />
      }
      
    return (
        <>
         <div id="wrapper">
           { auth.loading ?
           <div style={{display:'flex',alignItems:"center",justifyContent:"center",marginTop:150}}>
               <Loader
                              type="Puff"
                              color="#ff1236"
                              height={100}
                              width={100}
                            />
                            </div>
            : 
            msg ?
            <h1 style={{textAlign:"center"}}>{auth.msg}</h1>
            :
                <div className="container">
                    {/* <div className="phone-app-demo"></div> */}
                    <div className="form-data">
                    <form action="">
                            <div className="logo">
                                <img src={logo} alt="logo" />
                            </div>

                           
                            <a className="form-btn facebook-login" href="#">
                                <i className="fab fa-facebook-square"></i> Log in with Facebook
                            </a>

                            <span className="has-separator">Or</span>
                            
                            <input type="text" value={emailOrMob} onChange={e=>setEmailOrMob(e.target.value)} placeholder="Phone number or email" autoComplete="off"  />
                            <input type="text" value={fullName} onChange={e=>setFullName(e.target.value)} placeholder="Full Name" autoComplete="off"  />
                            <input type="text" value={username} onChange={e=>setUsername(e.target.value)} placeholder="Username" autoComplete="off"  />
                            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" autoComplete="off"  />
                            <button disabled={!emailOrMob || !fullName || !username || !password} type='submit' className="form-btn"  onClick={()=>signupUser(emailOrMob,fullName,username,password)}>Sign up</button>                         
                       
                            <p>By signing up, you agree to our Terms , Data Policy and Cookies Policy </p>
                            </form>
                        <div className="sign-up">
                            Have an account? <Link to="/">Log in</Link>
                        </div>
                        <div className="get-the-app">
                            <span>Get the app.</span>
                            <div className="badges">
                                <img src={appstore} alt="app-store badge" />
                                <img src={googleplay} alt="google-play badge" />
                            </div>
                        </div>
                  
                  </div>
                </div>
}
               <Footer/>
            </div>
        </>
    )
}

export default SignupPage;