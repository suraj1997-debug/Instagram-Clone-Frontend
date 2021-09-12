import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import userImg from '../../../../images/posts/default-user.png';
import { addComment, getSinglePost } from '../../../../Redux/Store';
import { urlgenerate } from '../../../../urlConfig';
import './style.css';

const BodyContainer = (props) => {


    const [likes, setLikes] = useState(0);
    const [shares, setShares] = useState([]);
    const [likeBoolean, setLikeBoolean] = useState(false);

    const post = useSelector(state => state.post);

    const user = useSelector(state => state.auth.user);


    // console.log('postDetails',postDetails)

    const likeInc = (id, likes) => {
        setLikeBoolean(!likeBoolean);
        setLikes(likeBoolean ? likes - 1 : likes + 1);
    }
    // console.log('likes',likes)


    //comments

    const [commentShowBoolean,setCommentShowBoolean] = useState(false);
    const [postId,setPostId] = useState('');
    const [comment,setComment] = useState('');

    const dispatch = useDispatch();
    const addComments = (id) =>{
        setPostId(id)
        setCommentShowBoolean(!commentShowBoolean)
    }

    const submit = (e) =>{
       if(e.key === 'Enter'){
        dispatch(addComment(postId,comment))
        setComment('');
        setPostId('')
       }
    }

    const viewComments = (id) =>{
        console.log('id',id)
        dispatch(getSinglePost(id))
    }


    return (
        <>
            <main className="page">
                <section>
                    <div className="content">
                        <div className="stories">
                            <button className="story">
                                <span style={{ display: "flex" }}>
                                    <img className="avatar" src={urlgenerate(`profile/${user.profile}`)} alt="User" />

                                </span>
                                <span className="name">user-story</span>
                            </button>

                            <button className="story">
                                <span className="avatar">
                                    <img src={userImg} alt="User" />
                                </span>
                                <span className="name">user-story</span>
                            </button>

                            <button className="story">
                                <span className="avatar">
                                    <img src={userImg} alt="User" />
                                </span>
                                <span className="name">user-story</span>
                            </button>

                            <button className="story">
                                <span className="avatar">
                                    <img src={userImg} alt="User" />
                                </span>
                                <span className="name">user-story</span>
                            </button>

                            <button className="story">
                                <span className="avatar">
                                    <img src={userImg} alt="User" />
                                </span>
                                <span className="name">user-story</span>
                            </button>

                            <button className="story">
                                <span className="avatar">
                                    <img src={userImg} alt="User" />
                                </span>
                                <span className="name">user-story</span>
                            </button>
                        </div>

                        {
                            (post.postDetails && post.postDetails.length > 0) ? post.postDetails.map((p, i) => {
                                return (
                                    <>
                                        <div className="post">
                                            <div className="post-top">
                                                <div className="profile">
                                                    <div className="avatar">
                                                        <img src={urlgenerate(`profile/${user.profile}`)} alt="User" />

                                                    </div>
                                                    <a href="#" target="_blank">{user.username}</a>
                                                </div>
                                                <button>
                                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-three-dots" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="post-media">
                                                <img src={urlgenerate(`posts/${p.picture}`)} alt="Post" />
                                            </div>
                                            <div className="post-bottom">
                                                <div className="buttons">
                                                    <div style={{display:"flex",alignItems:"center"}}>
                                                        <button onClick={() => likeInc(p._id, likes)} style={{width:"24px",height:"24px"}}>
                                                            {!likeBoolean ?
                                                             <svg className="_8-yf5 " height="24" viewBox="0 0 48 48" width="24">
                                                                <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                                                            </svg> 
                                                            :
                                                           <i class="fas fa-heart" style={{fontSize:"24px",color:"red"}}></i>
                                                            } 
                                                            </button>
                                                        <button onClick={()=>addComments(p._id)}>
                                                            <svg className="_8-yf5 " height="24" viewBox="0 0 48 48" width="24">
                                                                <path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path>
                                                            </svg>
                                                        </button>
                                                        <button>
                                                            <svg className="_8-yf5 " height="24" viewBox="0 0 48 48" width="24">
                                                                <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    <button>
                                                        <svg className="_8-yf5 " height="24" viewBox="0 0 48 48" width="24">
                                                            <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                                {
                                                    likeBoolean ?
                                                    <span className="likes"><strong>1</strong> Like</span>
                                                // <span className="likes">Liked by <Link to="#">user__</Link> and <strong>73 others</strong></span>
                                             : null     
                                            }
                                                <p className="desc"><Link to="#" target="_blank">{user.username}</Link> {`${p.comments.length > 0 && p.comments[0].comment}`}</p>
                                                {
                                                    post.singlePostLoader ? null :
                                                    (p._id === post.singlePost._id) ? null :
                                                <p style={{fontSize:"1.3rem",fontWeight:"400",cursor:"pointer"}} onClick={()=>viewComments(p._id)}>View All Comments</p>
                                                }
                                                {
                                                    
                                                    !post.singlePostLoader ? 
                                                   (p._id !== post.singlePost._id) ? null :
                                                ( post.singlePost.comments && post.singlePost.comments.length ) ?  post.singlePost.comments.map((c,i)=>{
                                                   
                                                    return (
                                                        <>
                                                        {
                                                            c._id === post.singlePost.comments[0]._id ? null
                                                            :
                                                        <p className="mx-3 desc" style={{fontSize:"12px",height:"1.2rem"}}><Link to="#" >{user.username}</Link> <span style={{paddingLeft:"0.6rem"}}>{c.comment}</span></p>
                                                      
                                                        }
                                                        </>
                                                    )
                                                })
                                                 : null
                                                 :null
                                                }
                                                  {
                                                   commentShowBoolean ?
                                                   <>
                                                <input type="text" className="form__field desc" placeholder="Add a comment..." name="comment" value={comment} onChange={e=>setComment(e.target.value)} onKeyPress={(e)=> submit(e) } autoComplete="off"  />
                                               <br />
                                               </>
                                               : null
                                                }
                                                <span className={`${ !post.singlePostLoader ? 'time mt-3' : 'time'}`}>30 minutes ago</span>
                                            </div>
                                        </div>
                                    </>
                                )
                            }) : null
                        }

                    </div>

                    <div className="sidebar">
                        <div className="user-profile">
                            <div className="avatar">
                                <img src={urlgenerate(`/profile/${user.profile}`)} alt="User" />
                            </div>
                            <div className="desc">
                                <a href="#" target="_blank">{user.username}</a>
                                <span>Always learning!</span>
                            </div>
                        </div>

                        <div className="suggestions">
                            <h3>Suggestions for you</h3>

                            <div className="profiles">
                                <div className="profile">
                                    <div className="avatar">
                                        <img src={userImg} alt="User" />
                                    </div>
                                    <div className="desc">
                                        <a href="#">user_nick</a>
                                        <span>Followed by <a href="#">another-user</a> and more 12 people</span>
                                    </div>
                                </div>

                                <div className="profile">
                                    <div className="avatar">
                                        <img src={userImg} alt="User" />
                                    </div>
                                    <div className="desc">
                                        <a href="#">user_nick</a>
                                        <span>Followed by <a href="#">another-user</a> and more 12 people</span>
                                    </div>
                                </div>

                                <div className="profile">
                                    <div className="avatar">
                                        <img src={userImg} alt="User" />
                                    </div>
                                    <div className="desc">
                                        <a href="#">user_nick</a>
                                        <span>Followed by <a href="#">another-user</a> and more 12 people</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default BodyContainer;