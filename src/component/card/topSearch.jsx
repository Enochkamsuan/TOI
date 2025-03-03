import React from "react";
import defaultImage from "../../assets/images/1.jpg";

const TopSearch = ({ data }) => {
  return (
    <div>
      <div>
        <img
          src={data.cover_image || defaultImage}
          alt="cover_image"
          className="w-full"
        />
      </div>
      <div className="text-xs">{data.title}</div>
    </div>
  );
};

export default TopSearch;
