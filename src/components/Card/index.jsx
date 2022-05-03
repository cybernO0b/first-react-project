import React from 'react';
import './index.css';
import card from './img_cats/3.jpg';



const Card = ({like}) => {
    return (
        <div className="card">
            <div className='card__img'>200x300px</div>
            <div className='card__text'>Lorem ipsum dolor </div>
            <div className='card__like'>{like}</div>
        </div>
    )
}

export default Card;