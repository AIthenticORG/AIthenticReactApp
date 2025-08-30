import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'; // Voor meldingen

// Component voor het toevoegen of bewerken van een artikel
const ArticleForm = ({addArticle, editArticle}) => {
    // State voor elk veld in het formulier
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publicated_at, setPublicatedAt] = useState('');
    const [category, setCategory] = useState('');
    const [image_url, setImage_url] = useState('');
    const [status, setStatus] = useState('');
    const [content, setContent] = useState('');

    const navigate = useNavigate(); // Hook voor navigatie

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

        addArticle(article);
        navigate('/articles'); // Navigeer terug naar de artikelenlijst na toevoegen
        toast.success('Artikel succesvol toegevoegd!'); // Toon succesmelding
    }

    return(
        <div className='mb-20'>
            {/* Titel verandert afhankelijk van of het bewerken of toevoegen is */}
            <h2 className="text-[30px] font-bold mt-5 mb-5">Voeg nieuw artikel toe</h2>

            <form 
            onSubmit={handleSubmit} 
            className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-md flex flex-col gap-6"
            >

            {/* Titel */}
            <div className="flex flex-col">
                <label className="text-gray-700 font-medium">Titel</label>
                <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Titel van het artikel"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                />
            </div>

            {/* Auteur */}
            <div className="flex flex-col">
                <label className="text-gray-700 font-medium">Auteur</label>
                <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Naam van de auteur"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                />
            </div>

            {/* Publicatiedatum */}
            <div className="flex flex-col">
                <label className="text-gray-700 font-medium">Publicatiedatum</label>
                <input
                type="datetime-local"
                value={publicated_at}
                onChange={(e) => setPublicatedAt(e.target.value)}
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                />
            </div>

            {/* Categorie */}
            <div className="flex flex-col">
                <label className="text-gray-700 font-medium">Categorie</label>
                <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Categorie van het artikel"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Afbeelding */}
            <div className="flex flex-col">
                <label className="text-gray-700 font-medium">Afbeelding URL</label>
                <input
                type="text"
                value={image_url}
                onChange={(e) => setImage_url(e.target.value)}
                placeholder="https://voorbeeld.nl/afbeelding.jpg"
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

            {/* Inhoud */}
            <div className="flex flex-col">
                <label className="text-gray-700 font-medium">Inhoud</label>
                <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Typ hier de inhoud van het artikel"
                className="border border-gray-300 rounded-lg p-3 h-40 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Submit knop */}
            <button
                type="submit"
                className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
            >
                Voeg artikel toe
            </button>
            </form>
        </div>
    )
}

export default ArticleForm
