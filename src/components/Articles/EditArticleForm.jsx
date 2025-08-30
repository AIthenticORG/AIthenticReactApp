import { useState, useEffect } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast'; // Voor meldingen

const EditArticleForm = ({updateArticle}) => {

    const navigate = useNavigate();
    const location = useLocation();
    const article = location.state?.article || null;

    const [title, setTitle] = useState();
    const [author, setAuthor] = useState();
    const [publicated_at, setPublicatedAt] = useState();
    const [category, setCategory] = useState('');
    const [image_url, setImage_url] = useState('');
    const [status, setStatus] = useState('');
    const [content, setContent] = useState('');

    useEffect (() => {
        if(article){
            setTitle(article.title);
            setAuthor(article.author);
            setPublicatedAt(article.publicated_at);
            setCategory(article.category);
            setImage_url(article.image_url);
            setStatus(article.status);
            setContent(article.content);
        }
    }, [article]);

    const handleSubmit =(e) =>{
        e.preventDefault();
        
        const updatedArticle = {
            title,
            author,
            publicated_at,
            category,
            image_url,
            status,
            content
        }
        updateArticle(article.id,  updatedArticle);
        navigate('/articles'); // Navigeer terug naar de artikelenlijst na bewerken
        toast.success('Artikel succesvol bewerkt!'); // Toon succesmelding
        
    }

    return (
        <div className="mb-20 mt-10">
            <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-md flex flex-col gap-6"
            >
                <div className='flex flex-col'>
                    <label className="text-gray-700 font-medium">Titel</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className='flex flex-col'>
                    <label className="text-gray-700 font-medium">Auteur</label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>  
                <div className='flex flex-col'>
                    <label className="text-gray-700 font-medium">Publicatiedatum</label>
                    <input
                        type="datetime-local"
                        value={publicated_at}
                        onChange={(e) => setPublicatedAt(e.target.value)}
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className='flex flex-col'>
                    <label className="text-gray-700 font-medium">Categorie</label>
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className='flex flex-col'>
                    <label className="text-gray-700 font-medium">Afbeelding URL</label>
                    <input
                        type="text"
                        value={image_url}
                        onChange={(e) => setImage_url(e.target.value)}
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                {/* Status */}
                <div className="flex flex-col">
                    <label className="text-gray-700 font-medium">Status</label>
                    <select
                    type="dropdown"
                    value={status}
                    required
                    onChange={(e) => setStatus(e.target.value)}
                    placeholder="Bijv. gepubliceerd, concept"
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                    <option value="" disabled hidden>Selecteer status</option>
                    <option value="published">Gepubliceerd</option>
                    <option value="draft">Concept</option>
                    <option value="archived">Gearchiveerd</option>
                    <option value="deleted">Verwijderd</option>    
                    </select>
                </div>
                <div className='flex flex-col'>
                    <label className="text-gray-700 font-medium">Content</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="5"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition-colors duration-300"
                >Bewerken</button>                
            </form>
        </div>
    )
}
export default EditArticleForm;