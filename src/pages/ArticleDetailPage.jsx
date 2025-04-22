import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ArticleDetailPage = () => {
    const { id } = useParams();
    const location = useLocation();
    const [article, setArticle] = useState(location.state?.article || null);

    useEffect(() => {
        if (id && !article) {
            axios.get(`http://localhost:3306/api/articles/${id}`)
                .then(response => {
                    setArticle(response.data[0]);
                })
                .catch(error => console.error(error));
        }
    }, [id]);

    if (!article) {
        return <div className="text-center py-10 text-gray-600">Laden...</div>;
    }

    return (
        <main className="w-full min-h-[90vh] flex justify-center top-[50px] lg:top-[80px] relative px-4 md:px-10 lg:px-20 py-10 bg-white">
            <article className="max-w-3xl w-full">
                {/* Titel */}
                <h1 className="text-4xl font-bold leading-tight mb-4">{article.title || "Geen titel beschikbaar"}</h1>

                {/* Metadata */}
                <div className="text-sm text-gray-500 mb-6 flex flex-wrap justify-between gap-2">
                    <span>📅 Gepubliceerd op: {new Date(article.publicated_at).toLocaleDateString() || "Onbekend"}</span>
                    <span>✍️ Auteur: {article.author || "Onbekend"}</span>
                </div>

                {/* Afbeelding */}
                {article.image_url && (
                    <img
                        src={article.image_url}
                        alt={article.title}
                        className="w-full h-[300px] md:h-[400px] object-cover rounded-md mb-6 bg-gray-200"
                    />
                )}

                {/* Inhoud */}
                <section className="prose max-w-none prose-p:leading-relaxed prose-p:mb-4 text-gray-800 text-lg">
                    {article.content
                        ? article.content.split("\n").map((para, index) => (
                              <p key={index}>{para}</p>
                          ))
                        : <p>Geen inhoud beschikbaar.</p>
                    }
                </section>
            </article>
        </main>
    );
};

export default ArticleDetailPage;
