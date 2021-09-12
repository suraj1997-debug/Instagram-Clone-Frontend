import React, { useEffect, useState } from 'react';
import {Link,Redirect} from 'react-router-dom';
import logo from '../../images/logo.png';
import googleplay from '../../images/google-play.png';
import appstore from '../../images/app-store.png';
import {authLogin} from '../../Redux/Store';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import Footer from '../../components/UI/authLayout/footer';

const LoginPage = (props) => {
    const [emailOrMobOrUsername,setEmailOrMobOrUsername] = useState('');
    const [password,setPassword] = useState('');
    const [msg,setMsg] = useState(false);

    const dispatch = useDispatch();

    const loginUser = (emailOrMobOrUsername,password) =>{

        dispatch(authLogin({emailOrMobOrUsername,password}))
        setEmailOrMobOrUsername('');
        setPassword('');
        setMsg(true);
        setTimeout(() => {
            setMsg(false);
        }, 3000);
    }

    const auth = useSelector(state =>state.auth);

    if(auth.authenticate){
        return  <Redirect to={`/`} />
      }


    return (
        <>
            <div id="wrapper">
           { auth.authenticating ?
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
                    <div className="phone-app-demo"></div>
                    <div className="form-data">
                    <form action="">
                            <div className="logo">
                                <img src={logo} alt="logo" />
                            </div>
                       
                            <input type="text" value={emailOrMobOrUsername} onChange={e=>setEmailOrMobOrUsername(e.target.value)} placeholder="Phone number, username, or email" autoComplete="off"  />
                            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" autoComplete="off"  />
                            <button disabled={!emailOrMobOrUsername || !password}  type='submit' className="form-btn btn"  onClick={()=>loginUser(emailOrMobOrUsername,password)} >Log in</button>                         
                       
                            <span className="has-separator">Or</span>
                            <Link className="facebook-login" to="#">
                                <i className="fab fa-facebook-square"></i> Log in with Facebook
                            </Link>
                            <Link className="password-reset" to="#">Forgot password?</Link>
                            </form>
                        <div className="sign-up">
                            Don't have an account? <Link to={`/signup`}>Sign up</Link>
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

<Footer />

            </div>
            
        </>
    )
}

export default LoginPage;