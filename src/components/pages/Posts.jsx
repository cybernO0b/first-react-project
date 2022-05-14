import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Modal from "../modale";
import { usePagination } from "../hooks";
import api from '../../Api';
import Form from '../Form';
import Addpost from './Addpost';




// Получение постов с сервера
const Posts = () => {



    const [modalActive, setModalActive] = useState()
    const [posts, setPosts] = useState([]);
    const _data = usePagination(posts, 12);
    const [page, setPage] = useState(1)
    const [editablePost, setEditablePost] = useState(null);
    const [query, setQuery] = useState("");

    function setPagination(n) {
        let arr = []
        for (let i = 0; i < n; i++) {
            arr.push(<div
                className={(i + 1) === page &&
                    "active"}
                onClick={() => { setPage(i + 1); _data.jump(i + 1) }}>
                {i + 1}</div>)
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
                    setPosts(ans);
                })
        }

    }, []);

    useEffect(() => {
        let token = localStorage.getItem("token");
        if (token) {
            fetch(`https://api.react-learning.ru/posts/search/?query=${query}`, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            })
                .then((es) => es.json())
                .then((ans) => {
                    console.log(ans);
                    setPosts(ans);
                });
        }
    }, [query]);

    // Denis
    // Обработчики событий, удаление, редактирование

    const removePostHandler = (id) => {
        console.log(posts);
        setPosts((prev) => prev.filter((item) => item._id !== id));
        api.removepost(id);
    }

    const editPostHandler = (data) => {
        api.removepost(editablePost._id);
        setPosts((prevState) => prevState.filter((item) => item._id !== editablePost._id));
        api.addpost(data).then((res) => setPosts((prevState) => [...prevState, res]));
        setModalActive(false);
    }

    const editBtnPostHandler = (post) => {
        console.log(post, 'posts');
        setModalActive(true);
        setEditablePost(post);
    }

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
                Доброго времени суток. <br />На этой странице отображены все посты пользователей.
                <button className="open-btn" onClick={() => setModalActive(true)}>Создать пост</button>
                <Modal active={modalActive} setActive={setModalActive}>
                    <Form post={editablePost} editPostHandler={editPostHandler} isEdit={true} />
                </Modal>
            </div>
            <input
                style={{ margin: "30px", width: "500px" }}
                value={query}
                placeholder="Поиск"
                onChange={(event) => {
                    setQuery(event.target.value);
                }}
            ></input>
            {
                posts.length ?
                    <div className='cards-container'>
                        {_data.current().map((post, i) =>
                            <div className="cards-one">
                                <Link to={"/post/" + post._id}>
                                    <div key={i} className="post__title">
                                        {post.title}
                                    </div>
                                    <div className="post__image">
                                        <img style={imgst} src={post.image} />
                                    </div>
                                    <div className="post__text">
                                        {post.text}
                                    </div>
                                </Link>
                                <div className="post__actions">
                                    <button className="post__btn  post__remove" type="button" onClick={() => removePostHandler(post._id)}>
                                        <svg width="16px" height="16px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="#000000" d="M14,3 C14.5522847,3 15,3.44771525 15,4 C15,4.55228475 14.5522847,5 14,5 L13.846,5 L13.1420511,14.1534404 C13.0618518,15.1954311 12.1930072,16 11.1479,16 L4.85206,16 C3.80698826,16 2.93809469,15.1953857 2.8579545,14.1533833 L2.154,5 L2,5 C1.44771525,5 1,4.55228475 1,4 C1,3.44771525 1.44771525,3 2,3 L5,3 L5,2 C5,0.945642739 5.81588212,0.0818352903 6.85073825,0.00548576453 L7,0 L9,0 C10.0543573,0 10.9181647,0.815882118 10.9945142,1.85073825 L11,2 L11,3 L14,3 Z M11.84,5 L4.159,5 L4.85206449,14.0000111 L11.1479,14.0000111 L11.84,5 Z M9,2 L7,2 L7,3 L9,3 L9,2 Z" />
                                        </svg>
                                    </button>

                                    <button className="post__btn  post__edit" type="button" onClick={() => editBtnPostHandler(post)}>
                                        <svg height="16" viewBox="0 0 48 48" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M6 34.5v7.5h7.5l22.13-22.13-7.5-7.5-22.13 22.13zm35.41-20.41c.78-.78.78-2.05 0-2.83l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z" /><path d="M0 0h48v48h-48z" fill="none" /></svg>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div> : (<div>Ничего не нашлось </div>)
            }

            <div style={stPaginationDown} className="page-container">
                {setPagination(_data.maxPage)}
            </div>
        </>
    )
}

export default Posts;