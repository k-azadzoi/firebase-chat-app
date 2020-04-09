import React, { Component } from 'react';
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
  return(
    <Route 
      {...rest}
      render={ (props) => 
        authenticated === true ? ( <Component {...props}/> 
          ) : (
          <Redirect 
            to={{ pathname: '/login', state: { from: props.location } }}
          />
          ) 
        }
    />
  )  
}

const PublicRoute = ({ component: Component, authenticated, ...rest }) => {
  return(
    <Route 
      {...rest}
      render={ (props) => 
        authenticated === false ? (
          <Component {...props}/> 
          ) : (
            <Redirect to='/chat' />
          ) 
      } 
    />
  )
}

class App extends Component {
  constructor(){
    super()
    this.state = {
      authenticated: false,
      loading: true
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if(user) {
        this.setState({
          authenticated: true,
          loading: false
        })
      }
      else {
        this.setState({
          authenticated: false,
          loading: false
        })
      }
    })
  }


  render() {
    return this.state.loading === true ? <h2> Loading... </h2> : (
      <Router>
        <Switch>
          <Route 
            exact path='/' 
            component={Home}
          />
          <PrivateRoute 
            path='/chat' 
            authenticated={this.state.authenticated} 
            component={Chat}
          />
          <PublicRoute 
            path='/signup' 
            authenticated={this.state.authenticated} 
            component={Signup}
          />
          <PublicRoute 
            path='/login' 
            authenticated={this.state.authenticated} 
            component={Login}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
