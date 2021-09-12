import { authConstant } from './constants';
import Instance from '../../components/helpers/axios';


export const authLogin = ({ emailOrMobOrUsername, password }) => {
  return async dispatch => {
    dispatch({
      type: authConstant.LOGIN_REQUEST
    })

    const res = await Instance.post('/user/login', {
      emailOrMobOrUsername: emailOrMobOrUsername,
      password: password
    })


    if (res.status === 200) {
      const token = res.data.token;
      const user = res.data.user;
      const msg = res.data.message;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
    

      dispatch({
        type: authConstant.LOGIN_SUCCESS,
        payload: {
          token, user, msg
        }
      })
    }
    else {
      dispatch({
        type: authConstant.LOGIN_FAILURE,
        payload: {
          error: 'Invalid Login'
        }
      })
    }
  }
}

export const signup = ({ emailOrMob,fullName,username,password}) => {
  return async dispatch => {
    dispatch({
      type: authConstant.SIGNUP_REQUEST
    })

    const res = await Instance.post('/user/signup', {
      fullname:fullName,
      emailOrMob:emailOrMob,
      username:username,
      password:password
    });

    if (res.status === 201) {
      const msg = res.data.message;
      dispatch({
        type: authConstant.SIGNUP_SUCCESS,
        payload: {
          msg
        }
      })
    }
    else {
      dispatch({
        type: authConstant.SIGNUP_FAILURE,
        payload: {
          error: 'Invalid Sign up'
        }
      })
    }
  }
}

export const isUserLoggedIn=()=>{
  return async dispatch =>{
      const token = localStorage.getItem('token');
      if(token){
          const user = JSON.parse(localStorage.getItem('user'));
          dispatch({
              type:authConstant.LOGIN_SUCCESS,
              payload:{
                  token,user
              }
          })
      }else{
          dispatch({
              type:authConstant.LOGIN_FAILURE,
              payload:{
                  error:'User Needs to login'
              }
          })
      }
  }
}