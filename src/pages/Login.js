import React, { Component } from 'react'
import { Card } from 'antd'
import { Link } from 'react-router-dom'
import { Container } from '../styles/styles'
import { signin } from '../helpers/auth'

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            error: null,
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

   async handleSubmit(event){
       event.preventDefault()
       this.setState({ error: '' })
       try {
           await signin(this.state.email, this.state.password)
       } 
       catch(error){
           this.setState( {error: error.message } )
       }
   }
    
    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render(){
        return(
            <Container>
                <Card
                    style={{width: 400, textAlign: 'center'}} 
                >
                    <form 
                        onSubmit={this.handleSubmit}
                        autoComplete='off'
                    >
                    <h1>Login to 
                        <Link to='/'> Stay Connected</Link>
                    </h1>
                    <p> Fill in the form blew to login to your account. </p>
                    <div style={{width: 300, margin: 'auto', marginBottom: '10px'}}>
                        <input
                            id='email'
                            name='email'
                            type='email'
                            style={{paddingLeft: '2px'}}
                            placeholder='Email'
                            onChange={this.handleChange}
                            value={this.state.email}
                        />
                    </div>
                    <div style={{width: 300, margin: 'auto', marginBottom: '10px'}}>
                        <input
                            id='password'
                            name='password'
                            type='password'
                            style={{paddingLeft: '2px'}}
                            placeholder='Password'
                            onChange={this.handleChange}
                            value={this.state.password}
                        />
                    </div>
                    <div style={{margin: 'auto'}}>
                        {this.state.error ? <p> {this.state.error} </p> : null}
                        <button type='submit'>Login</button>
                    </div>
                    <hr></hr>
                    <p>Don't have an account? <Link to='/signup'>Sign up</Link></p>
                    </form>
                </Card>
            </Container>
        )
    }
}

export default Login

