import React, { Component } from 'react'
import Header from '../components/Header'
import { Container } from '../styles/styles'
import { auth } from '../services/firebase'
import { db } from '../services/firebase'

class Chat extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: auth.currentUser,
            chats: [],
            content: '',
            readError: null,
            writeError: null
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    async componentDidMount(){
        this.setState({ readError: null })
        try {
            db.ref('chats').on('value', snapshot => {
                //connection made between the client and firebase because of the .on() method
                let chats = []
                snapshot.forEach((snap) => {
                    chats.push(snap.val())
                })
                this.setState({ chats })
            })
        } catch (error) {
            this.setState({ readError : error.message})
        }
    }

    handleChange(event){
        this.setState({
            content : event.target.value
        })
    }

    async handleSubmit(event){
        event.preventDefault()
        this.setState({ writeError: null })
        try {
            await db.ref('chats').push({
                content: this.state.content,
                timestamp: Date.now(),
                uid: this.state.user.uid
            })
            this.setState({content: ''})
        } catch(error){
            this.setState({ writeError: error.message })
        }
    }

    formatTime(timestamp){
        const d = new Date(timestamp)
        const time = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`
        return time
    }

    render(){
        return(
            <div>
                <Header/>
                <Container>
                <div>
                    {
                        this.state.chats.map(chat => {
                            return <p key={chat.timestamp}>{chat.content}
                                <br/>
                        <span>
                            {
                                this.formatTime(chat.timestamp)
                            }
                        </span>
                            </p>
                        })
                        
                    }
                </div>
                </Container>
                <form style={{textAlign: 'center'}}onSubmit={this.handleSubmit}>
                    <textarea
                        onChange={this.handleChange}
                        value={this.state.content}
                    >
                    </textarea>
                    {this.state.error ? <p>{this.state.writeError}</p> : null}
                    <div>
                        <button type='submit'>Send</button>
                    </div>
                </form>
                <div>
                    Login in as: <strong>{this.state.user.email}</strong>
                </div>
                
            </div>
        )
    }
}

export default Chat