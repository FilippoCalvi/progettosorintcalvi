import React from 'react'
import "./Home.css"
import Article from '../../common/Article/Article'
import articles from '../../article.json'
const Home = () => {
  const buttonClick = () =>{
    console.log("Click !")}

  return (
    <div id = "home" className='wrapper'>
        <h1>Article Homepage</h1>
        <div className='article-section'>
            

            {articles.map((item, i) => {
                return (
                  <Article key={item.image} data = {item} click = {buttonClick} />  
                )
            })}


            
        </div>
    </div>
  )
}

export default Home