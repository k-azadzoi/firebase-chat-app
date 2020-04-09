import React, { Component } from 'react'
import { Card } from 'antd'
import { Link } from 'react-router-dom'
import { Container } from '../styles/styles'
import { signup, signInWithGoogle } from '../helpers/auth'

class Signup extends Component {
    constructor(props){
        super(props)
        this.state = {
            error: null,
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.googleSignIn = this.googleSignIn.bind(this)
    }

   async handleSubmit(event){
       event.preventDefault()
       this.setState({ error: '' })
       try {
           await signup(this.state.email, this.state.password)
       } 
       catch(error){
           this.setState( {error: error.message })
       }
   }

   async googleSignIn(){
       try {
           await signInWithGoogle()
       } 
       catch(error) {
            this.setState({ error: error.message })
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
                    <form onSubmit={this.handleSubmit}>
                    <h1>Sign Up to 
                        <Link to='/'> Stay Connected</Link>
                    </h1>
                    <p> Fill out the form blew to create an account. </p>
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
                        <button type='submit'>Sign Up</button>
                    </div>
                    <p> Or </p>
                    <button onClick={this.googleSignIn} type='button'>
                        Sign up with Google
                    </button>
                    <hr></hr>
                    <p>Already have an account? <Link to='/login'>Login</Link></p>
                    </form>
                </Card>
            </Container>
        )
    }
}

export default Signup

