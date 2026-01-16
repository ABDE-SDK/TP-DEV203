import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';

function ArticlesApp() {

    const [articles, setArticles] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                setArticles(res.data);
                
                console.log()
            })
    }
        , []
    )
    const articlesFiltred = articles.filter((article) =>
            article.title.toLowerCase().includes(search.toLowerCase())
    function searchByTitle(){
        
    }
    function searchByUser(){

    }
    return (
        <>
            <div>
                <p>nombres des articles: {articles.length}</p>
                <div className='groupe-input'>
                    <input type="text" name="search" 
                            id='search' 
                            placeholder="Entrer le titre d'article"
                            value={search}
                            onChange={(e)=> setArticles(e.target.value)}
                            />
                    <select name="users" id="users">
                        <option value="">Select an User</option>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => (
                            <option key={id}>User{id}</option>
                        ))}
                    </select>
                </div>
                <p>les articles :</p>
                <div className='articles'>
                    {articlesFiltred.map((article)=>(
                        <div className='article' key={article.id}>
                            <p>{article.title}</p>
                            <div className='btns'>
                                <button onClick={searchByTitle}>Details</button>
                                <button onClick={searchByUser}>Comments</button>
                            </div>
                    </div>
                    ))}
                    {/* <div className='article'>
                    </div> */}
                </div>
            </div>

        </>
    )
}

export default ArticlesApp