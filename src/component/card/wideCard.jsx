import React from "react";
import wideimg from "../../assets/images/2.jpg";

const WideCard = () => {
  return (
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
  );
};

export default WideCard;
