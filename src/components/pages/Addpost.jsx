import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import api from '../../Api'





export default ({addpost}) => {
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

    
    return (
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

                 <button type="submit">Добавить пост</button>
                 <Link to="/posts">
                      <button type="button">Перейти к постам</button>
                      </Link>
        </form>
        </div>
    )
}
