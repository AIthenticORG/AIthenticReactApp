import {useState, useEffect} from 'react'
import axios from 'axios'

const ArticleForm = ({addArticle, updateArticle, editArticle}) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publicated_at, setPublicatedAt] = useState('');
    const [category, setCategory] = useState('');
    const [image_url, setImage_url] = useState('');
    const [status, setStatus] = useState('');
    const [content, setContent] = useState('');

    useEffect (() => {
        if(editArticle){
            setTitle(editArticle.title);
            setAuthor(editArticle.author);
            setBody(editArticle.body);
            setCategory(editArticle.category);
            setStatus(editArticle.status);

        }
    }, [editArticle]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const article = {
            title,
            author,
            publicated_at,
            category,
            image_url,
            status,
            content
        };

        if(editArticle){
            updateArticle(editArticle.id, article);
        }else{
            addArticle(article);
        }
    }
    return(
        <div className=''>
            <h2>{editArticle ? 'Bewerk artikel' : 'Voeg nieuw artikel toe'}</h2>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Titel"
                />
                <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Auteur"
                />
                <input
                type="datetime-local" 
                value={publicated_at}
                onChange={(e) => setPublicatedAt(e.target.value)} 
                placeholder="Publicatie datum"
                required
                />
                <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Categorie"
                />
                <input
                type="text"
                value={image_url}
                onChange={(e) => setImage_url(e.target.value)}
                placeholder="Afbeelding URL"
                />
                <input
                type="text"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                placeholder="Status"
                />
                <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Inhoud"
                />
                <br/>
                <button type="submit">{editArticle ? 'Update artikel' : 'Voeg artikel toe'}</button>
            </form>
        </div>
    )
}
export default ArticleForm