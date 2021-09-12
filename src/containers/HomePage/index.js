import React, { useEffect, useState } from 'react';
import './style.css';
import Header from '../../components/UI/homePageLayout/header';
import BodyContainer from '../../components/UI/homePageLayout/bodyContainer';
import Navbar from '../../components/UI/homePageLayout/navbar';
import { useDispatch, useSelector } from 'react-redux';
import AddPostForm from '../../components/UI/homePageLayout/AddPostForm';
import { getPosts } from '../../Redux/Store';


const HomePage = (props) => {

    const auth = useSelector(state => state.auth);

    if(auth.authenticate){
        localStorage.setItem('theme', 'dark');
    }

    const postRefresh = useSelector(state=>state.post.postRefresh);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    },[postRefresh])



    return (
        <>
                <Header />
                <BodyContainer  />
                < AddPostForm />
                <br/>
                <br/>
                <Navbar/>
        </>
    )
}

export default HomePage;