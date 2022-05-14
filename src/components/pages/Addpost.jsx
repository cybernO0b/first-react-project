import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../../Api'
import Form from '../Form';





export default ({ addpost }) => {
    // const {setText, setTitle, setImage, setTags} = useContext(PostCtx);

    // Denis
    // Компонент добавления поста

    const navigation = useNavigate()

    const submitPostHandler = (formData) => {
        api.addpost(formData).then(ans => {
            navigation("/posts")
        })
    }

    return (
        <Form submitPostHandler={submitPostHandler} />
    )
}
