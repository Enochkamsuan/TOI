import React from "react";
import BigCard from "../component/card/bigCard";
import WideCard from "../component/card/wideCard";
import MediumCard from "../component/card/mediumCard";
import Ads from "../component/advertisement/ads";

const Home = () => {
  return (
    <div className="py-5">
      <div className="flex flex-col lg:flex-row lg:justify-center gap-4">
        <div className="w-full lg:w-[40%]">
          <div>
            <BigCard />
          </div>
          <div className="mt-4">
            <WideCard />
          </div>
        </div>
        <div className="w-full lg:w-[20%]">
          <MediumCard />
        </div>
        <div className="w-full lg:w-[40%]">
          <Ads />
        </div>
      </div>
    </div>
  );
};

export default Home;
