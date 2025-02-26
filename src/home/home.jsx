import React, { useEffect, useState } from "react";
// import bigcardImg from "../../src/assets/images/1.jpg";
import mediumCardimg from "../../src/assets/images/4.jpg";
import wideimg from "../../src/assets/images/2.jpg";
import Ads from "../component/advertisement/ads";
import axios from "axios";
import "animate.css";

const Home = () => {
  const [fetchArticle, setFetchArticle] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://toi2.petergangmei.com/api/articles/"
      );
      console.log("API response:", response.data.results);
      setFetchArticle(response.data.results);
    } catch (error) {
      console.error("error fetching API data", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="py-5">
      <div className="flex flex-col lg:flex-row lg:justify-center gap-4">
        <div className="w-full lg:w-[40%]">
          {fetchArticle.slice(0, 1).map((value, ind) => {
            return (
              <div
                key={ind}
                className="w-full h-64 bg-cover p-2 bg-center relative"
                style={{ backgroundImage: `url(${value.cover_image})` }}
              >
                <div className="text-white text-xl font-bold absolute bottom-1 right-2">
                  {value.title}
                </div>
              </div>
            );
          })}
          <div className="mt-4">
            <div className="w-full flex gap-3">
              <div className="w-1/2 flex gap-2 items-center">
                <div className="w-3/12 text-xs">Lorem ipsum dolor sit amet</div>
                <div className="w-3/4">
                  <img src={wideimg} alt="wideimg" className="rounded-md" />
                </div>
              </div>
              <div className="w-1/2 flex gap-2 items-center">
                <div className="w-3/12 text-xs">Lorem ipsum dolor sit amet</div>
                <div className="w-3/4">
                  <img src={wideimg} alt="wideimg" className="rounded-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[20%]">
          <div>
            <div>
              <div>
                <img
                  src={mediumCardimg}
                  alt="mediumCardimg"
                  className="w-full rounded-md"
                />
              </div>
              <div className="text-xs">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, neque! Temporibus ipsum
              </div>
            </div>
            <div>
              <div>
                <img
                  src={mediumCardimg}
                  alt="mediumCardimg"
                  className="w-full rounded-md"
                />
              </div>
              <div className="text-xs">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, neque! Temporibus ipsum
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[40%]">
          <Ads />
        </div>
      </div>
    </div>
  );
};

export default Home;
