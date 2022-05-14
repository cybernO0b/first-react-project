// Denis
// Компонент формы, вставляется в модальное окно при добавлении поста и редактировании.

import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';



const Form = ({ post, editPostHandler, submitPostHandler, isEdit }) => {
  const [formData, setFormData] = useState({ title: '', text: '', image: '', tags: [] });

  useEffect(() => {
    if (post) {
      setFormData({ title: post.title, text: post.text, image: post.image, tags: post.tags })
    }
  }, [post])


  const submitHandler = (evt) => {
    evt.preventDefault();
    if (editPostHandler) {
      editPostHandler(formData);
    } else if (submitPostHandler) {
      // const splitedTags = formData.tags.split(', ');
      submitPostHandler(formData);
    }
  }

  const handleChange = (evt) => {
    console.log(evt, evt.target.name, evt.target.value);
    console.log(formData);
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  return (
    <div className='container'>
      <h1>{isEdit ? 'Отредактировать пост' : 'Добавить пост'}</h1>
      <form className='add__post' onSubmit={(evt) => submitHandler(evt)}>
        <input type="text" placeholder="title" name="title" value={formData.title}
          required onInput={evt => handleChange(evt)} />

        <input type="text" placeholder="text" name='text' value={formData.text}
          required onInput={evt => handleChange(evt)} />

        <input type="text" placeholder="image" name="image" value={formData.image}
          required onInput={evt => handleChange(evt)} />

        {/* <input type="text" placeholder="tags" name="tags" value={formData.tags}
          required onInput={evt => handleChange(evt)} /> */}



        <button type="submit">{isEdit ? 'Отправить' : 'Войти'}</button>
        <Link to="/">
          <button type="button">На главную</button>
        </Link>
      </form>
    </div>
  )
}



export default Form;