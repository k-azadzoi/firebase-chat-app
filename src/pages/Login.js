import React from 'react'
import { Button, Card } from 'antd'
import {Container} from '../styles/styles'

const Login = (props) => {
    return (
        <> 
            <Container>
                <Card>
                    Login
                </Card>
                <Button 
                    type='primary'
                    ghost
                    style={{width: '300', marginBottom: '10px', textAlign: 'center'}}
                    onClick={() => {
                        props.history.push('/')
                    }}
                >
                    Home
                </Button>
            </Container>
        </>
    )
}

export default Login