import { useState, useEffect } from 'react';
import axios from 'axios';
import EditArticleForm from '../components/Articles/EditArticleForm';

const EditArticle = () => {
    // State voor het opslaan van artikelen en het artikel dat bewerkt moet worden
    const [articles, setArticles] = useState([]);
    const [editArticle, setEditArticle] = useState(null);  

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

    // Functie om een bestaand artikel bij te werken
    const updateArticle = (id, article) => {
        axios.put(`http://localhost:3000/api/articles/${id}`, article).then((response) => {
            setArticles(articles.map(a => (a.id === id ? article : a))); // Update het artikel in de lijst
            setEditArticle(null); // Reset de bewerk-modus
        })
        .catch(error => console.error(error)); // Fouten loggen
    }
    
    return( 
        <div className="w-[80%] mx-auto max-w-[1000px] min-h-[100vh] h-auto top-[50px] lg:top-[80px] relative flex flex-col items-center">
            <EditArticleForm  updateArticle={updateArticle}/>
        </div>
    )
}
export default EditArticle;