
import {postConstant} from '../Actions/constants';

const initialState = {
 postDetails:[],
  error:'',
  message:'',
  postRefresh:false,
  loading:false,
  singlePostLoader:false,
  singlePost:{},
  singlePostRefresh:false
}


const postReducer = (state = initialState,action)=>{
    switch(action.type){
        case postConstant.ADD_POST_REQUEST:
            state={
            ...state,
            postRefresh:false,
            loading:true
        }
        break;
        case postConstant.ADD_POST_SUCCESS:
            state={
            ...state,
            message:action.payload.message,
            postRefresh:true,
            loading:false
        }
        break;
        case postConstant.ADD_POST_FAILURE:
            state={
            ...state,
            loading:false,
            postRefresh:false,
            error:action.payload.error
        }
        break;
        case postConstant.GET_POST_REQUEST:
            state={
            ...state,
            loading:true
        }
        break;
        case postConstant.GET_POST_SUCCESS:
            state={
            ...state,
            postDetails:action.payload.postDetails,
            message:action.payload.message,
            loading:false
        }
        break;
        case postConstant.GET_POST_FAILURE:
            state={
            ...state,
            loading:false,
            error:action.payload.error
        }
        break;
        case postConstant.ADD_COMMENT_REQUEST:
            state={
            ...state,
            singlePostRefresh:false,
            singlePostLoader:true
        }
        break;
        case postConstant.ADD_COMMENT_SUCCESS:
            state={
            ...state,
            message:action.payload.message,
            singlePostRefresh:true,
            singlePostLoader:false
        }
        break;
        case postConstant.ADD_COMMENT_FAILURE:
            state={
            ...state,
            singlePostLoader:false,
            singlePostRefresh:false,
            error:action.payload.error
        }
        break;
        case postConstant.GET_SINGLE_POST_REQUEST:
            state={
            ...state,
            singlePostLoader:true
        }
        break;
        case postConstant.GET_SINGLE_POST_SUCCESS:
            state={
            ...state,
            singlePost:action.payload.singlePost,
            message:action.payload.message,
            singlePostLoader:false
        }
        break;
        case postConstant.GET_SINGLE_POST_FAILURE:
            state={
            ...state,
            singlePostLoader:false,
            error:action.payload.error
        }
        break;
    }
    return state;
}

export default postReducer;