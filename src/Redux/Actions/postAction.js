import { postConstant } from './constants';
import axios from 'axios';
import Instance from '../../components/helpers/axios';


export const addPost = (picture,comment) => {
    return async dispatch => {
      dispatch({
        type: postConstant.ADD_POST_REQUEST
      })

       const form = new FormData();

       form.append('picture',picture);
       form.append('comment',comment);

       
  
      const res = await axios.post(`${process.env.REACT_APP_URL}/api/user/post/add`,form,{
        headers:{
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'multipart/form-data'
        }
    })
  
      if (res.status === 201) {
        dispatch({
          type: postConstant.ADD_POST_SUCCESS,
          payload: {
            message:'Post added successfully'
          }
        })
      }
      else {
        dispatch({
          type: postConstant.ADD_POST_FAILURE,
          payload: {
            error: 'Something went wrong'
          }
        })
      }
    }
  }


  export const getPosts = () =>{
    return async dispatch => {
        dispatch({
          type: postConstant.GET_POST_REQUEST
        })
  
    
        const res = await Instance.get(`/user/post/getAll`)
    
        if (res.status === 200) {
            // console.log('data',res.data.data);
            const postDetails = res.data.data;
          dispatch({
            type: postConstant.GET_POST_SUCCESS,
            payload: {
                postDetails,
              message:'Posts fetched successfully'
            }
          })
        }
        else {
          dispatch({
            type: postConstant.GET_POST_FAILURE,
            payload: {
              error: 'Something went wrong'
            }
          })
        }
      }
  }

  export const addComment = (id,comment) =>{
    return async dispatch => {
      dispatch({
        type: postConstant.ADD_COMMENT_REQUEST
      })

  
      const res = await Instance.put(`/user/post/addComments/${id}`,{
        comment
      })
  
      if (res.status === 202) {
          // console.log('data',res.data.data);
          // const postDetails = res.data.data;
        dispatch({
          type: postConstant.ADD_COMMENT_SUCCESS,
          payload: {
            message:'Comment added successfully'
          }
        })
      }
      else {
        dispatch({
          type: postConstant.ADD_COMMENT_FAILURE,
          payload: {
            error: 'Something went wrong'
          }
        })
      }
    }
  }

  export const getSinglePost = (id) =>{
    return async dispatch => {
      dispatch({
        type: postConstant.GET_SINGLE_POST_REQUEST
      })

  
      const res = await Instance.get(`/user/post/getSinglePost/${id}`)

      
      if (res.status === 200) {
          console.log('data',res.data.data);
          const  singlePost= res.data.data;
        dispatch({
          type: postConstant.GET_SINGLE_POST_SUCCESS,
          payload: {
            singlePost,
            message:'Comments fetched successfully'
          }
        })
      }
      else {
        dispatch({
          type: postConstant.GET_SINGLE_POST_FAILURE,
          payload: {
            error: 'Something went wrong'
          }
        })
      }
    }
  }