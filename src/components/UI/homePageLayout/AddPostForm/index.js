import React, { useEffect, useState } from 'react';
import postImg from '../../../../images/posts/insta-clone.png';
import {Link, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { urlgenerate } from '../../../../urlConfig';
import { addPost } from '../../../../Redux/Store';

const AddPostForm = (props) => {
    const history = useHistory();

  


   const user = useSelector(state=>state.auth.user);

   const [comment,setComment] = useState('');
   const [picture,setPicture] = useState('');
   const [selectedFile,setSelectedFile] = useState();
   const [preview,setPreview] = useState()

   const fileChangeHandler = (e) =>{
       if(!e.target.files || e.target.files.length === 0){
           setSelectedFile(undefined);
       }
       setSelectedFile(e.target.files[0])
    setPicture(e.target.files[0])
   }

   useEffect(()=>{
    if (!selectedFile) {
        setPreview(undefined)
        return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)

   },[selectedFile])

   const dispatch = useDispatch();

   const PostAdd = (picture,comment) =>{
       dispatch(addPost(picture,comment))
       history.push('/')
   }


    return (
        <>
            <div >
                <form className="container" style={{ padding: '5rem', boxShadow: "0.2rem 0.2rem 0.7rem #797876" }} encType="multipart/form-data" action="">
                   
                    <div className="mb-5" style={{ padding: '2rem', boxShadow: "0.2rem 0.2rem 0.7rem #797876" }}>
                        <div className="post-media">
                            { selectedFile ?
                            <img src={preview} alt="Post" />
                            :
                            <div style={{ padding: '2rem', border:"2px dashed #c0b9b9" }}>
                            <p className="text-center" style={{fontSize:"1.4rem"}}>Preview Image</p>
                            </div>
                            }
                        </div>
                        <div className="post-bottom" style={{paddingTop:"2rem"}}>
                            <div className="buttons" style={{display:"flex",justifyContent:"space-between"}}>
                                <div>
                                    <button disabled>
                                        <svg className="_8-yf5 " height="24" viewBox="0 0 48 48" width="24">
                                            <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                                        </svg>
                                    </button>
                                    <button disabled style={{padding:"0 .5rem"}}>
                                        <svg className="_8-yf5 " height="24" viewBox="0 0 48 48" width="24">
                                            <path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path>
                                        </svg>
                                    </button>
                                    <button disabled>
                                        <svg className="_8-yf5 " height="24" viewBox="0 0 48 48" width="24">
                                            <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                                        </svg>
                                    </button>
                                </div>
                                <button disabled>
                                    <svg className="_8-yf5 " height="24" viewBox="0 0 48 48" width="24">
                                        <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
                                    </svg>
                                </button>
                            </div>
                            <p className="desc" style={{fontSize:"1.4rem",paddingTop:"1.4rem"}}><Link to="#">{user && user.username}</Link> {`${comment ? comment :'Post example.'}`}</p>
                            {/* <span className="time" style={{fontSize:"1.2rem",textTransform:"uppercase"}}>10 hours ago</span> */}
                        </div>

                    </div>
                    <div className="row mb-3">
                        <label for="picture" className="col-sm-2 col-form-label col-form-label-lg">Picture</label>
                        <div className="col-sm-10">
                            <input type="file" className="form-control form-control-lg" id="picture" name="picture"  onChange={e=>fileChangeHandler(e)} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label for="comment" className="col-sm-2 col-form-label col-form-label-lg">Comment</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control form-control-lg" id="comment" name="comment" value={comment} onChange={e=>setComment(e.target.value)} />
                        </div>
                    </div>
                   

                    <button type="submit" className="btn btn-primary btn-lg" onClick={()=>PostAdd(picture,comment)}>Add Post</button>
                </form>
            </div>
        </>
    )
}

export default AddPostForm;