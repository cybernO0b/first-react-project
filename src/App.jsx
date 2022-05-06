import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/pages/Home';
import Footer from './components/Footer';

import Add from './components/pages/Add';
import Post from './components/pages/Post'
import Posts from './components/pages/Posts'


// const data = ["1post", "11post", "20post", "33posttt", "44postt"]
// const dataCards = data.map((post, i) => <Card like={post} key={i}/>)


const App = () => {
    return (
        <>
        <Header/>
       <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/add" element={<Add/>}/> 
           <Route path="/posts" element={<Posts/>}/> 
           <Route path="/post/:id" element={<Post/>}/>
       </Routes>
        
       
        <Footer/>
        </>
    )
}

export default App;