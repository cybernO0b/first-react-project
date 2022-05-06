import React from 'react';
import './index.css';
import {Link} from 'react-router-dom'


const Header = () => {
    return (
        <header>
                <Link to="/">Home</Link>
                <Link to="/add">Add post</Link>
                <Link to="/posts">Posts</Link>
                
                
            
        </header>
    )
}

export default Header;
