import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleForm from '../components/Articles/ArticleForm';

const BuildArticle = () => {
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

    // Functie om een nieuw artikel toe te voegen
    const addArticle = (article) => {
        axios.post('http://localhost:3000/api/articles', article).then((response) => {
            setArticles([...articles, { ...article, id: response.data.id }]); // Artikel toevoegen aan de lijst met artikelen
        })
        .catch(error => console.error(error)); // Fouten loggen
    };
    
    return(
        <div className="w-[80%] mx-auto max-w-[1000px] min-h-[100vh] h-auto top-[50px] lg:top-[80px] relative flex flex-col items-center">
            <ArticleForm addArticle={addArticle}/>
        </div>
    )
}
export default BuildArticle;