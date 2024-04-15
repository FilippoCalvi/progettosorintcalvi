import React, { useState } from 'react';
import { FaRegStar, FaStar } from "react-icons/fa";
import './Article.css';

const Article = ({ data, onOrderClick }) => {
    const [likes, setLikes] = useState(data.likes);
    const [isLiked, setIsLiked] = useState(data.isLiked);

    const handleClick = () => {
        if (isLiked) {
            setLikes(likes - 1);
        } else {
            setLikes(likes + 1);
        }
        setIsLiked(!isLiked);
    };

    return (
        <article>
            <img src={data.image} alt={data.title} className="article-img" />

            <div className='article-header'>
                <h2>{data.title}</h2>
                <p>{data.date}</p>
            </div>

            <p>{data.intro}</p>
            <div className="article-footer">
                <button onClick={onOrderClick}>Ordina il prodotto</button>
                <div className="like-button" onClick={handleClick}>
                    {isLiked ? <FaStar color="gold" /> : <FaRegStar />}
                    <span>{likes}</span>
                </div>
            </div>
        </article>
    );
};

export default Article;
