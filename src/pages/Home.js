import React from 'react'
import { Button, Card } from 'antd'
import {Container} from '../styles/styles'
import Header from '../components/Header'

const Home = (props) => {
        return (
            <div>
                <Header></Header>
                <Container>
                    <Card
                        styles={{width: 300, textAlign: 'center'}}>
                            <Button 
                                type='primary'
                                ghost
                                style={{width: '100%', marginBottom: '10px'}}
                                onClick={() => {
                                    props.history.push('/signup')
                                }}
                            >
                                Signup
                            </Button>
                            <Button 
                                type='primary'
                                ghost
                                style={{width: '100%', marginBottom: '10px'}}
                                onClick={() => {
                                    props.history.push('/login')
                                }}
                            >
                                Login
                            </Button>
                            <Button 
                                type='primary'
                                ghost
                                style={{width: '100%', marginBottom: '10px'}}
                                onClick={() => {
                                    props.history.push('/')
                                }}
                            >
                                Home
                            </Button>
                    </Card>
                </Container>
            </div>
        )
}

export default Home