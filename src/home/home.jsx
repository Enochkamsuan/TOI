import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchData } from "../config/API's/apiCalls";
import defaultImage from "../../src/assets/images/1.jpg";

const Home = () => {
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
    <div className="py-5">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-12 lg:col-span-6">
          {latestArticle && (
            <Link to={`/detail/${latestArticle.id}/${latestArticle.slug}`}>
              <div
                className="w-full h-64 bg-cover p-2 bg-center relative"
                style={{ backgroundImage: `url(${latestArticle.cover_image})` }}
              ></div>
            </Link>
          )}
          <div className="grid grid-cols-2 gap-3 mt-4">
            {fetchArticle.map((value, ind) => {
              return (
                <Link to={`/detail/${value.id}/${value.slug}`} key={ind}>
                  <div>
                    <img
                      src={value.cover_image || defaultImage}
                      alt="cover_image"
                      className="w-full"
                    />
                    <div className="text-xs">{value.title}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="col-span-12 md:col-span-12 lg:col-span-2">
          {fetchArticle.map((value, ind) => {
            return (
              <Link to={`/detail/${value.id}/${value.slug}`} key={ind}>
                <div className="w-full bg-cover p-2 bg-center relative">
                  <img
                    src={value.cover_image || defaultImage}
                    alt="cover_image"
                  />
                </div>
                <div className="text-xs">{value.title}</div>
              </Link>
            );
          })}
        </div>
        <div className="col-span-12 md:col-span-12 lg:col-span-4"></div>
      </div>
    </div>
  );
};
export default Home;
{
  /* <div className="row">
  <div className="col-6"></div>
</div> */
}
