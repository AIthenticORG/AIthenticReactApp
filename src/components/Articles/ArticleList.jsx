import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Voor iconen
import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons"; // De specifieke iconen
import { useNavigate } from "react-router-dom"; // Om te navigeren tussen pagina's
import toast from "react-hot-toast";

// Component die een lijst van artikelen weergeeft
const ArticleList = ({ articles, deleteArticle}) => {
  const navigate = useNavigate(); // Hook voor navigatie

  // Functie om naar de detailpagina van een artikel te gaan
  const handleOpenArticle = (article) => {
    navigate(`/article/${article.id}/${slugify(article.title)}`, { state: { article } });
  };

  const handleEditArtcle = (article) => {
    //setEditingArticle(article);
    navigate(`/edit-article/${article.id}/${slugify(article.title)}`, { state: { article } });
  }

  // Functie om een titel geschikt te maken voor een URL (slug)
  function slugify(text) {
    return text.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
  }

  return (
    <div className="w-full md:w-[80%] lg:w-[1200px] h-auto flex flex-col items-center justify-center py-10">
      <ul className="flex flex-wrap gap-10 justify-evenly">
        {/* Loopt door alle artikelen heen */}
        {articles.map((article) => (
          <div
            key={article.id}
            className="w-[250px] min-h-[350px] md:w-[400px] md:h-[450px] flex flex-col bg-white shadow-lg rounded-lg overflow-hidden onhover: transition-all duration-300 cursor-pointer"
            onClick={() => handleOpenArticle(article)} // Klik op een kaart opent het artikel
          >
            <li className="flex flex-col h-full">
              {/* Afbeelding van het artikel */}
              <img
                src={article.image_url}
                alt={article.title}
                className="w-full h-[150px] md:h-[225px] object-cover bg-gray-200"
              />

              {/* Publicatiedatum */}
              <h3>{article.publicated_at}</h3>

              {/* Titel van het artikel */}
              <h3 className="text-xl h-[70px] font-bold px-4 py-2 text-gray-800 overflow-hidden text-ellipsis">
                {article.title}
              </h3>

              {/* Korte preview van de inhoud */}
              <p className="text-sm text-gray-600 px-4 flex-1 overflow-hidden text-ellipsis">
                {article.content}
              </p>

              {/* Knoppen voor bewerken en verwijderen */}
              <div className="flex items-center p-2 mt-auto space-x-5">
                {/* Bewerken-knop */}
                <button
                  className="bg-blue-500 rounded-xl w-[35px] h-[35px] text-white flex items-center justify-center"
                  onClick={(e) => {
                    e.stopPropagation(); // Voorkomt dat kaart wordt geopend bij klik
                    handleEditArtcle(article);
                  }}
                > 
                  <FontAwesomeIcon icon={faPencil} />
                </button>

                {/* Verwijder-knop */}
                <button
                  className="bg-red-400 rounded-xl w-[35px] h-[35px] text-white flex items-center justify-center"
                  onClick={(e) => {
                    e.stopPropagation(); // Voorkomt dat kaart wordt geopend bij klik
                    deleteArticle(article.id);
                    toast.success('Artikel succesvol verwijderd!'); // Toon succesmelding
                  }}
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
