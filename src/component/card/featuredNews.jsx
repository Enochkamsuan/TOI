import React, { useEffect, useState } from "react";
import { fetchData } from "../../config/API/apiCalls";
import { Link } from "react-router-dom";

const FeaturedNews = () => {
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
            <div className="absolute inset-0 transition-transform duration-300 ease-in-out scale-100 hover:scale-110">
              <img
                src={latestArticle.cover_image}
                alt="cover_image"
                className="w-full"
              />
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default FeaturedNews;
