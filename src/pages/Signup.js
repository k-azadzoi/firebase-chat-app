import React, { useState } from 'react'
import {Form, Button, Input, Card } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Container } from '../styles/styles'

const Signup = (props) => {
    const [user, setUser] = useState({
        name: '',
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
                    title='Signup'
                    style={{width: 300, textAlign: 'center'}} 
                >
                    <Form onSubmit={handleSubmit}>
                        <Input   
                            id='name'
                            name='name'
                            type='text'
                            placeholder='Name'
                            style={{margingBottom: '10px'}}
                            onChange={handleInputChange}
                        />
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
                            Signup 
                        </Button>
                        Or
                        <Button
                            type='primary'
                            style={{width: '100%', marginBottom: '10px', marginTop: '10px'}}
                            onClick={() => {props.history.push('/login')}}
                        >
                            Login
                        </Button>
                    </Form>
                </Card>
            </Container> 
        </>
    )
}

export default Signup