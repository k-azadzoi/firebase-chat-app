import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../services/firebase'

const Header = () => {
    return(
        <div>
            { auth.currentUser ? 
            <button onClick={() => auth.signOut()}>
                Logout
            </button>
            :
            <div>
                <Link to='/login'>Sign In</Link>
                <Link to='/signup'>Sign Up</Link>
            </div> }
        </div>
    )
}

export default Header