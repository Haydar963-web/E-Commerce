import { Link } from "react-router-dom";
import { useState } from "react";
import Rating from "../rating/Rating";

const Offer = ({ offer }) => {
  const {
    title,
    firstImage,
    secondImage,
    price,
    discount,
    rating,
    reviews,
    id,
  } = offer;
  const [imageSrc, setImageSrc] = useState(firstImage);
  const finalPrice = price - (discount * price) / 100;
  return (
    <div className="offer">
      <div
        onMouseEnter={() => setImageSrc(secondImage)}
        onMouseLeave={() => setImageSrc(firstImage)}
        className="offer-image-wrapper"
      >
        <img src={imageSrc} alt={title} className="offer-image" />
      </div>
      <div className="offer-info">
        <h5 className="offer-title">{title}</h5>
        <Rating rating={rating} reviews={reviews} />
        <div className="offer-price">
          <b className="offer-price-item">${price}</b>
          <b className="offer-final-price-item">${finalPrice}</b>
        </div>
        <Link to={`/special-offer/${id}`} className="offer-see-more">
          عرض المزيد ..
        </Link>
        <div className="offer-discount">خصم {discount}%</div>
      </div>
    </div>
  );
};

export default Offer;
