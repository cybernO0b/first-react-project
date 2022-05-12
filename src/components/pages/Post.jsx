import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom"
import Posts from './Posts'
import api from '../../Api'
import { PostCtx } from "../PostContext";

    
const Post = () => {
    let {id} = useParams();
    
    
    const [posts, setPosts] = useState([]);
   
    useEffect(() => {
        api.getSinglePost(id).then(data => {
            console.log(data);
            setPosts(data);
        })
    })
    

    return (
        <>
        <div className='container__post'>
            <div className='solo__post'>
            <p>{posts.title || "Post"}</p>
            <p><img src={posts.image}/></p>
            <p>{posts.text}</p>
            </div>
        </div>
        </>
    )
}

export default Post;