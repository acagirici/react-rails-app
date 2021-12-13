import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

const NavBar = (props) => {

    return (
        <div id="nav">
            <Link to='/new_user'>New Account</Link>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default NavBar