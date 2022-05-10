import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom"

    
const Post = () => {
    let {id} = useParams()
    let {image} = useParams()
    let {text} = useParams()
    const [title, setTitle] = useState()

    return (
        <>
        <div className='container__post'>
            <div className='solo__post'>
            <h1>{title}</h1>
            <p>{id}</p>
            <div>{image}</div>
            <div>{text}</div>

            </div>
        </div>
        </>
    )
}

export default Post;