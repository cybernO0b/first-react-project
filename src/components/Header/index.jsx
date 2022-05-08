import React, {useState, useContext} from 'react';
import './index.css';
import {Link} from 'react-router-dom'
import { UserCtx } from '../UserContext';



const Header = () => {
    const {user} = useContext(UserCtx);
    
    return (
        <header>
                <Link to="/">Home</Link>
                <Link to="/add">Add post</Link>
                <Link to="/posts">Posts</Link>
                <Link to={user ? "/profile" : "/signin"}>Sign in</Link>
                
                
            
        </header>
    )
}

export default Header;
