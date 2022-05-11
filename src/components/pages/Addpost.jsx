import React, {useState, useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import api from '../../Api'
import { UserCtx } from '../UserContext'
import { PostCtx } from "../PostContext";



export default ({addpost}) => {
    const [text, changeText] = useState();
    const [title, changeTitle] = useState();
    const [image, changeImage] = useState();
    const [tags, changeTags] = useState([]);

    const {setUser} = useContext(PostCtx);
    const {setText} = useContext(PostCtx);
    const {setPosts} = useContext(PostCtx);
    const {setTitle} = useContext(PostCtx);
    const {setImage} = useContext(PostCtx);
    const {setTags} = useContext(PostCtx);

    const navigation = useNavigate()

    const handler = (e) => {
        e.preventDefault();
        if (addpost) {
            api.addpost({title: title, text: text, image: image, tags: tags})
            .then(ans => {
                console.log(ans)
                if (ans.data) {
                    setUser(ans.data._id)
                    setText(ans.data.text)
                    setPosts(ans.data.posts)
                    setTitle(ans.data.title)
                    setImage(ans.data.image)
                    setTags(ans.data.tags)
                    
                } 
                navigation("/")
            })
        }
    }

    
    return (
        <div className='container'>
            <h1>Добавить пост</h1>
            <form className='add__post' onSubmit={handler}>
                 <input type="text" placeholder="title" name="title" value={title}
                    required onInput={e => changeTitle(e.target.value)}/>

                 <input type="text" placeholder="text" name='text' value={text}
                    required onInput={e => changeText(e.target.value)}/>

                <input type="text" placeholder="image" name="image" value={image}
                    required onInput={e => changeImage(e.target.value)}/>

                 <input type="tags" placeholder="tags" name='tags' value={tags}
                    required onInput={e => changeTags(e.target.value)}/>

                 <button type="submit">Войти</button>
                 <Link to="/posts">
                      <button type="button">Просто кнопка</button>
                      </Link>
        </form>
        </div>
    )
}
