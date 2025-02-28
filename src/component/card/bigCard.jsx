import React, { useEffect, useState } from "react";
import { fetchData } from "../../config/API/apiCalls";
import { Link } from "react-router-dom";

const BigCard = () => {
  const [fetchArticle, setFetchArticle] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const articles = await fetchData();
      setFetchArticle(articles);
    };
    getArticles();
  }, []);

  const latestArticle = fetchArticle.find((article) => article.id === 1);
  return (
    <div>
      {latestArticle && (
        <Link
          to={`/${latestArticle.slug}`}
          onClick={() => console.log("link click", fetchArticle)}
        >
          <div className="w-full h-64 bg-cover p-2 bg-center relative overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out scale-100 hover:scale-110"
              style={{
                backgroundImage: `url(${latestArticle.cover_image})`,
              }}
            ></div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default BigCard;
