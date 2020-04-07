import React, { useState } from 'react'
import {Form, Button, Input, Card } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Container } from '../styles/styles'

const Login = (props) => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const handleInputChange = (event) => {
        event.preventDefault()
        setUser({
            ...user, [event.target.id]: event.target.value 
        })
    }

    return (
        <> 
            <Container>
                <Card
                    title='Login'
                    style={{width: 300, textAlign: 'center'}} 
                >
                    <Form onSubmit={handleSubmit}>
                         <Input
                            prefix={<UserOutlined />}
                            id='email'
                            name='email'
                            type='text'
                            placeholder='Email'
                            style={{margingBottom: '10px', marginTop: '10px'}}
                            onChange={handleInputChange}
                        />
                        <Input.Password
                            prefix={<LockOutlined />}
                            id='password'
                            name='password'
                            type='text'
                            placeholder='Password'
                            style={{margingBottom: '10px', marginTop: '10px'}}
                            onChange={handleInputChange}
                        />
                        <Button
                            type='primary'
                            htmlType='submit'
                            style={{width: '100%', marginBottom: '10px', marginTop: '10px'}}
                        > 
                            Login 
                        </Button>
                        Or
                        <Button
                            type='primary'
                            style={{width: '100%', marginBottom: '10px', marginTop: '10px'}}
                            onClick={() => {props.history.push('/signup')}}
                        >
                            Signup
                        </Button>
                    </Form>
                </Card>
            </Container> 
        </>
    )
}

export default Login