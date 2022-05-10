import React, {useState, useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import api from '../../Api'
import { UserCtx } from '../UserContext'



export default ({addpost}) => {
    const [qwetitle, changeTitle] = useState("")
    const [qwetext, changeText] = useState("")
    const [qweimage, changeImage] = useState("")
    const [qwetags, changeTags] = useState([])
    const {setUser} = useContext(UserCtx)
    const navigation = useNavigate()
    const handler = (e) => {
        e.preventDefault();
        if (addpost) {
            api.addpost({qwetitle: qwetitle, qwetext: qwetext, qweimage: qweimage, qwetags:qwetags})
            .then(ans => {
                console.log(ans)
                if (ans.data) {
                    setUser(ans.data._id)
                } 
                navigation("/")
            })
        }
    }

    
    return (
        <div className='container'>
            <h1>Добавить пост</h1>
            <form className='add__post' onSubmit={handler}>
                 <input type="text" placeholder="name" name="user" value={qwetitle}
                    required onInput={e => changeTitle(e.target.value)}/>
                 <input type="text" placeholder="text" name='text' value={qwetext}
                    required onInput={e => changeText(e.target.value)}/>
                <input type="text" placeholder="title" name="title" value={qweimage}
                    required onInput={e => changeImage(e.target.value)}/>
                 <input type="tags" placeholder="tags" name='tags' value={qwetags}
                    required onInput={e => changeTags(e.target.value)}/>
                 <button type="submit">Войти</button>
                 <Link to={api.addpost}>
                      <button type="button">Просто кнопка</button>
                      </Link>
        </form>
        </div>
    )
}
