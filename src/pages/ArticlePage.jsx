import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArticlesList from '../components/Articles/ArticleList';
import ArticleForm from '../components/Articles/ArticleForm';

const ArticlePage = () => {
    const [articles, setArticles] = useState([]);
    const [editArticle, setEditArticle] = useState(null);   

    useEffect(() =>{
        axios.get('http://localhost:3306/api/articles', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((response) => {
            setArticles(response.data);
        }).catch(error => console.error(error));
    }, []);

    const addArticle = (article) => {
        axios.post('http://localhost:3306/api/articles', article).then((response) => {
            setArticles([...articles, { ...article, id: response.data.id }]);
        })
        .catch(error => console.error(error));
    };

    const updateArticle = (id, article) => {
        axios.put(`http://localhost:3306/api/articles/${id}`, article).then((response) => {
            setArticles(articles.map(a => (a.id === id ? article : a)));
            setEditArticle(null);
        })
        .catch(error => console.error(error));
    }
    
    const deleteArticle = (id) => {
        axios.delete(`http://localhost:3306/api/articles/${id}`).then((response) => {
            setArticles(articles.filter(a => a.id !== id));
        })
        .catch(error => console.error(error))
    }

    return(
        <div className="w-[100%] h-auto top-[50px] lg:top-[80px] relative flex flex-col items-center justify-center">
            <h1 className="text-[50px] w-[80%] max-w-[1000px] font-bold">Our current articles</h1>
            <p className="text-[20px] w-[80%] max-w-[1000px]">
            Duik in onze nieuwste artikelen! Van handige tips tot diepgaande analyses, we hebben voor ieder wat wils. 
            Blijf op de hoogte van trends, ontdek nieuwe inzichten en lees alles wat je nodig hebt om een stap voor te blijven.
            </p>
            <h1 className='font-bold text-[20px]'>Artikelen</h1>
            <ArticleForm addArticle={addArticle} updateArticle={updateArticle} editArticle={editArticle}/>
            <div className='h-auto flex flex-col items-center justify-center'>
                <ArticlesList articles={articles} deleteArticle={deleteArticle} setEditArticle={setEditArticle}/>
            </div>
        </div>
    )
}
export default ArticlePage;
