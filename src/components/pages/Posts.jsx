import React, {useState, useEffect} from "react";
import {Link, useNavigate} from 'react-router-dom';
import Modal from "../modale";
import { usePagination } from "../hooks";
import api from '../../Api'
import Addpost from "./Addpost";




// Получение постов с сервера
const Posts = (addpost) => {
    
// Добавление поста
const [textq, changeText] = useState("");
const [titleq, changeTitle] = useState("");
const [imageq, changeImage] = useState("");
const [tagsq, changeTags] = useState("");

const navigation = useNavigate()

const handler = (e) => {
    e.preventDefault();
    
        api.addpost({title: titleq, image: imageq, text: textq, tags: [tagsq]}).then(ans => {
                navigation("/posts")
        })
}

    const [modalActive, setModalActive] = useState()
    const [posts, getPosts] = useState([]);
    const _data = usePagination(posts, 12);
    const [page, setPage] = useState(1)
    
    function setPagination(n) {
        let arr = []
        for (let i=0; i<n; i++) {
            arr.push(<div
                 className={(i+1) === page &&
                     "active"}
                      onClick={() => {setPage(i+1); _data.jump(i+1)}}>
                          {i+1}</div>)
        }
        return arr;
    }
    

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
        
        width: "100%", 
        height: "300px", 
        objectFit: "contain"
    }
    const stPaginationDown = {
        padding: "20px 0px"
    }
       
    

    return (
        <>
        <h1 style={stH1}>Posts</h1>
        <div className="page-container">
            {setPagination(_data.maxPage)}
        </div>
        <h2 style={stH1}>Страница {page}</h2>
        <div className="first-container">
            Доброго времени суток. <br/>На этой странице отображены все посты пользователей.
            <button className="open-btn" onClick={() => setModalActive(true)}>Создать пост</button>
            <Modal active={modalActive} setActive={setModalActive}>
            
            <div className='container'>
            <h1>Добавить пост</h1>
            <form action={addpost} className='add__post' onSubmit={handler}>
                 <input type="text" placeholder="title" name="title" value={titleq}
                    required onInput={e => changeTitle(e.target.value)}/>

                 <input type="text" placeholder="text" name='text' value={textq}
                    required onInput={e => changeText(e.target.value)}/>

                <input type="text" placeholder="image" name="image" value={imageq}
                    required onInput={e => changeImage(e.target.value)}/>

                 <input type="text" placeholder="tags" name="tags" value={tagsq}
                    required onInput={e => changeTags(e.target.value)}/>

                 <button type="submit" className="open-btn" onClick={() => setModalActive()} >Добавить пост</button>
                 <Link to="/posts">
                      <button type="button" className="open-btn" onClick={() => setModalActive()}>Перейти к постам</button>
                      </Link>
        </form>
        </div>
            </Modal>
        </div>

        <div className='cards-container'>
            {_data.current().map((post, i) => 
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
       <div style={stPaginationDown} className="page-container">
            {setPagination(_data.maxPage)}
        </div>
       </>
    )
}


export default Posts;