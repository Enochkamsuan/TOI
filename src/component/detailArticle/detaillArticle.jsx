import React, { useEffect, useState } from "react";
import { fetchData } from "../../config/API's/apiCalls";

const DetaillArticle = () => {
  const [fetchArticle, setFetchArticle] = useState([]);
  console.log("fetch detail article", fetchArticle);

  useEffect(() => {
    const getArticles = async () => {
      const articles = await fetchData();
      setFetchArticle(articles);
    };
    getArticles();
  }, []);
  return (
    <div>
      {fetchArticle.slice(0, 1).map((value, ind) => {
        return (
          <div key={ind}>
            <div className="text-3xl font-bold font-georgia pb-5">
              '{value.title}'
            </div>
            <div className="flex gap-3 items-center">
              <div className="w-1/2">
                <img
                  src={value.cover_image}
                  alt="cover_image"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="text-lg mt-4 w-1/2">{value.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DetaillArticle;
