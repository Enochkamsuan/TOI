import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchData } from "../../config/API-S/apiCalls";
import defaultImage from "../../assets/images/1.jpg";
import adsImg from "../../assets/images/ads_1.jpg";
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
            <Link to={`/${latestArticle.slug}`}>
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
          <div className="grid grid-cols-2 gap-3 mt-4">
            {fetchArticle.map((value, ind) => {
              return (
                <Link to={`/${value.slug}`} key={ind}>
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
              <Link to={`/${value.slug}`} key={ind}>
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
        <div className="col-span-12 md:col-span-12 lg:col-span-4">
          <div>
            <img src={adsImg} alt="adsImg" className="w-full" />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default Home;
