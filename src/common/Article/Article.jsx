import React, { useState } from 'react'
import './Article.css'
import { click } from '@testing-library/user-event/dist/click'
import { FaRegStar ,FaStar} from "react-icons/fa";

const Article = ({ data,click }) => {
    const [likes , setLikes] = useState(data.likes);
    const [isLiked , setIsLiked] = useState(data.isLiked);
    const handleClick = () => {
        if(isLiked){
            setLikes(likes - 1);
        }else{
            setLikes(likes + 1);
        }
        setIsLiked(!isLiked)
    }
  return (
    <article>
        <img src={data.image} alt= {data.title} className= "article-img" />

        <div className='article-header'>  
            <p>{data.date}</p>
        </div>

        <h2>{data.title}</h2>
        <p>{data.intro}</p>
        <button onClick={click}>Leggi di più</button>
    </article>
  )
}

export default Article