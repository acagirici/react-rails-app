import React from 'react'
import axios from 'axios'

class User {

    state = {
        username: '',
        password: ''
    }

    onChange = () => {

    }

    handleSubmit = () => {

    }

    render() {
        <div>
            <form>
                <label>Username:</label>
                <input type='text' />
                <label>Password:</label>
                <input type='text' />
            
                <input type='submit' />
            </form>
        </div>
    }
}

export default User

