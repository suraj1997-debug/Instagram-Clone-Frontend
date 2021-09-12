
import {authConstant} from '../Actions/constants';

const initialState = {
  token:null,
  user:{},
  authenticate:false,
  authenticating:false,
  error:null,
  msg:'',
  loading:false
    
}


const authReducer = (state = initialState,action)=>{
    switch(action.type){
        case authConstant.LOGIN_REQUEST:
            state={
            ...state,
            authenticating:true,
            authenticate:false
        }
        break;
        case authConstant.LOGIN_SUCCESS:
            state={
            ...state,
            user:action.payload.user,
            token:action.payload.token,
            msg:action.payload.msg,
            authenticate:true,
            authenticating:false
        }
        break;
        case authConstant.LOGIN_FAILURE:
            state={
            ...state,
            error:action.payload.error,
            authenticating:false,
            authenticate:false
        }
        break;
        case authConstant.SIGNUP_REQUEST:
            state={
                ...state,
                loading:true
        }
        break;
        case authConstant.SIGNUP_SUCCESS:
            state={
            ...state,
            msg:action.payload.msg,
            loading:false
        }
        break;
        case authConstant.SIGNUP_FAILURE:
            state={
            ...state,
            error:action.payload.error,
            loading:false
        }
    }
    return state;
}

export default authReducer;