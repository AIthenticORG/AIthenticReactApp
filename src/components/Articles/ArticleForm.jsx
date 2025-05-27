import {useState, useEffect} from 'react'
import axios from 'axios'

// Component voor het toevoegen of bewerken van een artikel
const ArticleForm = ({addArticle, updateArticle, editArticle}) => {
    // State voor elk veld in het formulier
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publicated_at, setPublicatedAt] = useState('');
    const [category, setCategory] = useState('');
    const [image_url, setImage_url] = useState('');
    const [status, setStatus] = useState('');
    const [content, setContent] = useState('');

    // useEffect om bestaande artikelgegevens te laden als editArticle aanwezig is
    useEffect (() => {
        if(editArticle){
            setTitle(editArticle.title);
            setAuthor(editArticle.author);
            setBody(editArticle.body); // LET OP: 'setBody' bestaat niet, moet waarschijnlijk 'setContent' zijn
            setCategory(editArticle.category);
            setStatus(editArticle.status);
        }
    }, [editArticle]);

    // Functie om formulier te verwerken (verhindert standaard gedrag)
    const handleSubmit = (e) => {
        e.preventDefault();
        // Object met formulierdata
        const article = {
            title,
            author,
            publicated_at,
            category,
            image_url,
            status,
            content
        };

        // Als we aan het bewerken zijn, updaten we het artikel, anders voegen we nieuw toe
        if(editArticle){
            updateArticle(editArticle.id, article);
        }else{
            addArticle(article);
        }
    }

    return(
        <div className=''>
            {/* Titel verandert afhankelijk van of het bewerken of toevoegen is */}
            <h2>{editArticle ? 'Bewerk artikel' : 'Voeg nieuw artikel toe'}</h2>
            <form onSubmit={handleSubmit}>
                {/* Titel input */}
                <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Titel"
                />
                {/* Auteur input */}
                <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Auteur"
                />
                {/* Publicatiedatum input */}
                <input
                type="datetime-local" 
                value={publicated_at}
                onChange={(e) => setPublicatedAt(e.target.value)} 
                placeholder="Publicatie datum"
                required
                />
                {/* Categorie input */}
                <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Categorie"
                />
                {/* Afbeelding URL input */}
                <input
                type="text"
                value={image_url}
                onChange={(e) => setImage_url(e.target.value)}
                placeholder="Afbeelding URL"
                />
                {/* Status input */}
                <input
                type="text"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                placeholder="Status"
                />
                {/* Inhoud textarea */}
                <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Inhoud"
                />
                <br/>
                {/* Submit knop - verandert afhankelijk van edit */}
                <button type="submit">{editArticle ? 'Update artikel' : 'Voeg artikel toe'}</button>
            </form>
        </div>
    )
}

export default ArticleForm
