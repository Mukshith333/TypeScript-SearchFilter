import React, { useEffect, useState } from "react";
import star from "../assets/star_icon.png";

interface Rating {
  rating: number | undefined;
}

const Ratings: React.FC<Rating> = ({ rating }) => {
  const [starCount, setStarCount] = useState<number>(0);

  useEffect(() => {
    let roundrating: number = Math.floor(rating !== undefined ? rating : 1);
    switch (roundrating) {
      case 1:
        setStarCount(roundrating);
        break;
      case 2:
        setStarCount(roundrating);
        break;
      case 3:
        setStarCount(roundrating);
        break;
      case 4:
        setStarCount(roundrating);
        break;
      case 5:
        setStarCount(roundrating);
        break;
      default:
        setStarCount(roundrating);
        break;
    }
  }, [rating]);

  return (
    <>
      {Array.from({ length: starCount }).map((_, index) => (
        <img
          key={index}
          src={star}
          alt={`star-${index + 1}`}
          className="w-3.5"
        />
      ))}
    </>
  );

  {
    /* return (
    <div className="flex items-center gap-1 mt-2">
        {
            
        }
      <img src={star} alt="" className="w-3.5" />
    </div>
  );*/
  }
};

export default Ratings;
