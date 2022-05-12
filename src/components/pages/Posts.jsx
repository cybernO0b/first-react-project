import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import Modal from "../modale";




// Получение постов с сервера
const Posts = () => {
    const [modalActive, setModalActive] = useState()
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
        
        width: "100%", /* Ширина изображений */
        height: "300px", /* Высота изображении */
        objectFit: "contain"

        
       
    }

    return (
        <>
        <h1 style={stH1}>Posts</h1>

        <div className="first-container">
            Доброго времени суток. На этой странице отображены все посты пользователей.
            <button className="open-btn" onClick={() => setModalActive(true)}>Создать пост</button>
            <Modal active={modalActive} setActive={setModalActive}>
            
            <p>Модальное окошко</p>
            </Modal>
        </div>

        <div className='cards-container'>
            {posts.map((post, i) => 
            <div className="cards-one">
            <Link to={"/post/" + post._id}>
                

            <div key={i} className="post__title">
                    {post.title}
                </div>
                <div className="post__image">
                    <img style={imgst} src={post.image}/>
                </div>
                <div className="post__text">
                    {post.text}
                </div>
                
            </Link>
            </div>
        )}
       </div>
       </>
    )
}

export default Posts;