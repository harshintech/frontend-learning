import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

export default function StarRating({ noOfStar }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  function handleClick(getCurrentIndex) {
    console.log(getCurrentIndex);
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    console.log(getCurrentIndex);
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }
  return (
    <div className="star-container fixstyle">
      <h1>Project No.3</h1>
      <div className="star-rating">
        {[...Array(noOfStar)].map((i, index) => {
          return (
            <FaStar
              key={index}
              className={index <= (hover || rating) ? "active" : "inactive"}
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
              size={40}
            />
          );
        })}
      </div>
    </div>
  );
}
