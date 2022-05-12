import React, {useState} from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import Addpost from './components/pages/Addpost';
import Post from './components/pages/Post'
import Posts from './components/pages/Posts'
import Profile from './components/pages/Profile';
import Signin from './components/pages/Signin';
import Signup from './components/pages/Signup';
import { UserCtx, UserValue } from './components/UserContext';




const App = () => {
    
    const [user, setUser] = useState(localStorage.getItem("user") || "");

    const userHandler = (id) => {
        setUser(id);
        localStorage.setItem("user", id)
    }
    const [token, setToken] = useState(localStorage.getItem("token") || "")

    const tokenHandler = (data) => {
        setToken(data);
        localStorage.setItem("token", data)
    }
    return (
        <>
    <UserCtx.Provider value={{token: token, user: user, setToken: tokenHandler, setUser: userHandler}}>
        <Header/>
       <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/posts" element={<Posts/>}/> 
           <Route path="/post/:id" element={<Post/>}/>
           <Route path="/signin" element={<Signin/>}/>
           <Route path="/signup" element={<Signup/>}/>
           <Route path="/profile" element={<Profile/>}/>
           <Route path="/add" element={<Addpost/>}/>
       </Routes>
        <Footer/>
    </UserCtx.Provider>
        </>
    )
}

export default App;