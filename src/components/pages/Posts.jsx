import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom'

// Получение постов с сервера
const Posts = () => {

    const [posts, getPosts] = useState([]);

    useEffect(() => {
        let token = localStorage.getItem("token");
        if (token) {
            fetch("https://api.react-learning.ru/posts", {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            .then(es => es.json())
            .then(ans => {
                console.log(ans)
                getPosts(ans);
            })
        }

    }, []);

// Стилизация заголовка Posts
    const stH1 = {
        display: "flex",
        justifyContent: "center"
    }
// Стилизация картинки в посте
    const imgst = {
        height: "150px",
        width: "100px",
        backgroundSize: "contain"
    }

    return (
        <>
        <h1 style={stH1}>Posts</h1>
       <div className='cards-container'>
          
        {/* Добавление названия с картинкой постов с сервера */}
        {posts.map((post, i) => 
        <Link to={"/post/" + post._id}>
        <div key={i} className="post">
            {post.title}
            <img style={imgst}src={post.image}/>
        </div>
        </Link>
        )}
        
       </div>
       </>
    )
}

export default Posts;