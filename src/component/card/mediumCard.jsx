import React, { useEffect, useState } from "react";
import { fetchData } from "../../config/API/apiCalls";
import defaultImage from "../../assets/images/1.jpg";
import { Link } from "react-router-dom";

const MediumCard = () => {
  const [fetchArticle, setFetchArticle] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const articles = await fetchData();
      setFetchArticle(articles);
    };
    getArticles();
  }, []);
  return (
    <div>
      {fetchArticle.map((value, ind) => {
        return (
          <Link to={`/${value.slug}`} key={ind}>
            <div className="w-full bg-cover p-2 bg-center relative">
              <img src={value.cover_image || defaultImage} alt="cover_image" />
            </div>
            <div className="text-xs">{value.title}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default MediumCard;
