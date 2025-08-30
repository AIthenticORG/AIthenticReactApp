import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArticlesList from '../components/Articles/ArticleList';

const ArticlePage = () => {
    // State voor het opslaan van artikelen en het artikel dat bewerkt moet worden
    const [articles, setArticles] = useState([]);

    // Gebruik useEffect om de artikelen op te halen bij het laden van de pagina
    useEffect(() =>{
        axios.get('http://localhost:3000/api/articles', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((response) => {
            setArticles(response.data); // Zet de opgehaalde artikelen in de state
        }).catch(error => console.error(error)); // Fouten loggen als er een probleem is met de aanvraag
    }, []);
    
    // Functie om een artikel te verwijderen
    const deleteArticle = (id) => {
        axios.delete(`http://localhost:3000/api/articles/${id}`).then((response) => {
            setArticles(articles.filter(a => a.id !== id)); // Verwijder het artikel uit de lijst
        })
        .catch(error => console.error(error)) // Fouten loggen
    }

    return(
        <div className="w-[100%] h-auto top-[50px] lg:top-[80px] relative flex flex-col items-center justify-center">
            <h1 className="text-[50px] w-[80%] max-w-[1000px] font-bold">Our current articles</h1>
            <p className="text-[20px] w-[80%] max-w-[1000px]">
            Duik in onze nieuwste artikelen! Van handige tips tot diepgaande analyses, we hebben voor ieder wat wils. 
            Blijf op de hoogte van trends, ontdek nieuwe inzichten en lees alles wat je nodig hebt om een stap voor te blijven.
            </p>
            <h1 className='font-bold text-[20px]'>Artikelen</h1>
            <div className='h-auto flex flex-col items-center justify-center'>
                {/* Lijst van artikelen */}
                <ArticlesList articles={articles} deleteArticle={deleteArticle}/>
            </div>
        </div>
    )
}
export default ArticlePage;
