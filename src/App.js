import React, { useEffect } from 'react';
import './App.css';
import LoginPage from './containers/LoginPage';
import SignupPage from './containers/SignupPage';
import {Switch,Route} from 'react-router-dom';
import HomePage from './containers/HomePage';
import PrivateRoute from './components/HOC/privateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, isUserLoggedIn } from './Redux/Store';

function App() {
  const dispatch = useDispatch();
  const auth = useSelector(state=>state.auth);
  const postRefresh = useSelector(state=>state.post.postRefresh);

  

  //ComponentDidUpdate
  useEffect(()=>{
    if(!auth.authenticate){
    dispatch(isUserLoggedIn());
    }
    dispatch(getPosts());
},[auth.authenticate]);

  return (
    <div className="App">
      <Switch>
     <Route path="/login"  component={LoginPage} />
    <Route  path="/signup"  component={SignupPage} />

    
    <PrivateRoute exact path="/"  component={HomePage} />
    </Switch>
    </div>
  );
}

export default App;
