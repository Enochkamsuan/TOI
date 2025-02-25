import React from "react";
import mediumCardimg from "../../assets/images/4.jpg";

const MediumCard = () => {
  return (
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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          neque! Temporibus ipsum
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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          neque! Temporibus ipsum
        </div>
      </div>
    </div>
  );
};

export default MediumCard;
