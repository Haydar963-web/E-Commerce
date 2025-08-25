import "./slider.css";
import Rating from "../rating/Rating";
import { useState } from "react";
import { Link } from "react-router-dom";

const Slider = ({ data }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  // Handle Click
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex((prev) => prev - 1);
    } else {
      setSlideIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="slider-container">
      <button
        disabled={slideIndex === -data.length}
        onClick={() => handleClick("left")}
        className="bi bi-chevron-left arrow-left"
      ></button>
      <div
        style={{ transform: `translateX(${slideIndex * -220}px)` }}
        className="slider-wrapper"
      >
        {data.map((item) => (
          <Link to={`/products/${item.id}`} key={item.id} className="slide">
            <img src={item.image} alt={item.title} className="slide-img" />
            <h3 className="slide-title">{item.title}</h3>
            <Rating rating={item.rating} reviews={item.reviews} />
            <div className="item-price">${item.price}</div>
          </Link>
        ))}
      </div>
      <button
        disabled={slideIndex === 1}
        onClick={() => handleClick("right")}
        className="bi bi-chevron-right arrow-right"
      ></button>
    </div>
  );
};

export default Slider;
