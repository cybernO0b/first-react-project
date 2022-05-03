import React from 'react';
import './index.css';
import card from './img_cats/3.jpg';



const Card = () => {
    return (
        <div className="card">
            <img alt="Котик" src={card}
            className="card__img"/>
        </div>
    )
}

export default Card;