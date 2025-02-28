import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchData } from "../../config/API/apiCalls";
import defaultImage from "../../assets/images/1.jpg";
import adsImg from "../../assets/images/ads_1.jpg";
import BigCard from "../../component/card/bigCard";
import MediumCard from "../../component/card/mediumCard";
const Home = () => {
  const [fetchArticle, setFetchArticle] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const articles = await fetchData();
      setFetchArticle(articles);
    };
    getArticles();
  }, []);

  return (
    <div className="py-5">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-12 lg:col-span-6">
          <BigCard />
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
          <MediumCard />
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
