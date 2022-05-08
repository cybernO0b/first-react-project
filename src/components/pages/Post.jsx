import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom"

    
const Post = () => {
    let {id} = useParams()
    const [name, setName] = useState("Post")

    return (
        <>
        <div className='container__post'>
            <div className='solo__post'>
            <h1>{name}</h1>
            <p>{id}</p>
            </div>
        </div>
        </>
    )
}

export default Post;