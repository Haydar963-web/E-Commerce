import { useParams } from "react-router-dom";
import { specialOffers } from "../../data/special-offers";
import { useEffect, useState } from "react";
import Rating from "../../components/rating/Rating";
import "./special-offer-page.css";
import ProductDescription from "./ProductDescription";

const SpecialOfferPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //
  const { id } = useParams();
  const product = specialOffers.find((p) => p.id === +id);
  //
  const { images, title, rating, reviews, price, discount } = product;
  const [imageIndex, setImageIndex] = useState(0);
  const finalPrice = price - (discount * price) / 100;
  return (
    <>
      <div className="special-offer-page">
        <div className="special-offer-page-img-wrapper">
          <img
            src={images[imageIndex]}
            alt=""
            className="special-offer-page-img"
          />
          <div className="special-offer-page-select-img">
            {images.map((source, index) => (
              <img
                onClick={() => setImageIndex(index)}
                key={index}
                src={source}
                alt=""
                className="select-img"
              />
            ))}
          </div>
        </div>
        <div className="special-offer-page-info">
          <h3 className="special-offer-page-title">{title}</h3>
          <Rating rating={rating} reviews={reviews} />
          <div className="special-offer-page-price">
            <b className="special-offer-price-item">${price}</b>
            <b className="special-offer-final-price-item">${finalPrice}</b>
          </div>
          <div className="special-offer-page-add-to-cart">
            <div>الكمية: </div>
            <input type="number" min="1" max="50" />
            <button className="add-to-cart-btn">إضافة إلى سلة التسوق</button>
          </div>
        </div>
      </div>
      <ProductDescription />
    </>
  );
};

export default SpecialOfferPage;
