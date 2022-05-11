import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom"
import Posts from './Posts'
import api from '../../Api'
import { PostCtx } from "../PostContext";

    
const Post = () => {
    let {id} = useParams()
    
    const [posts, getPosts] = useState([]);
    const [text, changeText] = useState();
    const [title, changeTitle] = useState();
    const [image, changeImage] = useState();
    const [tags, changeTags] = useState([]);
    

    return (
        <>
        <div className='container__post'>
            <div className='solo__post'>
            <h1>{title}</h1>
            <p>{id}</p>
            </div>
        </div>
        </>
    )
}

export default Post;