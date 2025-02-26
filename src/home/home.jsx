import React, { useEffect, useState } from "react";
import bigcardImg from "../../src/assets/images/1.jpg";
import mediumCardimg from "../../src/assets/images/4.jpg";
import wideimg from "../../src/assets/images/2.jpg";
import Ads from "../component/advertisement/ads";
import axios from "axios";
// import { AllApiCall } from "../config/API's/apiCalls";

const Home = () => {
  // const [newsData, setNewsData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://toi2.petergangmei.com/api");
      console.log("API response:", response.data);
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
          <div>
            <img src={bigcardImg} alt="bigcard" className="w-full" />
          </div>
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
