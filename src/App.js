import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route, 
  Switch,
  Redirect
} from 'react-router-dom'
import 'antd/dist/antd.css'
import Chat from './pages/Chat'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { auth } from './services/firebase'

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
  console.log({...rest})
  return(
    <Route 
      {...rest}
      render={ (props) => authenticated === true
      ? <Component {...props}/>
      : <Redirect to={{ pathname: '/login', state: { from: props.location } }}/> }
    />
  )  
}

const PublicRoute = ( { component: Component, authenticated, ...rest }) => {
  return(
    <Route 
      {...rest}
      render={ (props) => authenticated === false
      ? <Component {...props}/>
      : <Redirect to='/chat' /> } 
    />
  )
}

const App = () => {
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  

  return loading === false ? <h2> Loading... </h2> : (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <PrivateRoute path='/chat' authenticated={authenticated} component={Chat}></PrivateRoute>
        <PublicRoute path='/signup' authenticated={authenticated} component={Signup}></PublicRoute>
        <PublicRoute path='/login' authenticated={authenticated} component={Login}></PublicRoute>
      </Switch>
    </Router>
  );
}

export default App;
