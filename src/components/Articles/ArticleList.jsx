import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const ArticleList = ({ articles, deleteArticle, setEditingArticle }) => {
  const navigate = useNavigate();
  const handleOpenArticle = (article) => {
    navigate(`/article/${article.id}/${slugify(article.title)}`, {state: { article}})
  }

  function slugify(text){
    return text.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
  }

  return (
    <div className="w-full md:w-[80%] lg:w-[1200px] h-auto flex flex-col items-center justify-center py-10">
      <ul className="flex flex-wrap gap-10 justify-evenly">
        {articles.map((article) => (
          <div
            key={article.id}
            className="w-[250px] min-h-[350px] md:w-[400px] md:h-[450px] flex flex-col bg-white shadow-lg rounded-lg overflow-hidden"
            onClick = { () => handleOpenArticle(article)}
          >
            <li className="flex flex-col h-full">
              {/* Image Section */}
              <img
                src={article.image_url}
                alt={article.title}
                className="w-full h-[150px] md:h-[225px] object-cover bg-gray-200"
              />
              <h3>{article.publicated_at}</h3>
              {/* Title Section */}
              <h3 className="text-xl h-[70px] font-bold px-4 py-2 text-gray-800 overflow-hidden text-ellipsis">{article.title}</h3>
              {/* Content Section */}
              <p className="text-sm text-gray-600 px-4 flex-1 overflow-hidden text-ellipsis">{article.content}</p>
              {/* Button Section */}
              <div className="flex justify-evenly items-center p-2 mt-auto space-x-2">
                <button
                  className="bg-gray-500 rounded-xl w-[35px] h-[35px] text-white flex items-center justify-center"
                  onClick={() => setEditingArticle(article)}
                >
                  <FontAwesomeIcon icon={faPencil} />
                </button>
                <button
                  className="bg-red-400 rounded-xl w-[35px] h-[35px] text-white flex items-center justify-center"
                  onClick={() => deleteArticle(article.id)}
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