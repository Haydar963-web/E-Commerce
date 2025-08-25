import "./single-product.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import Rating from "../../components/rating/Rating";
import ProductionDescription from "../special-offer-page/ProductDescription";

const SingleProduct = () => {
  //
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //
  const { id } = useParams();
  //
  const product = products.find((p) => p.id === +id);
  //
  return (
    <div className="single-product">
      <div className="product-wrapper">
        <div className="product-image-wrapper">
          <img src={product.image} alt="" />
        </div>
        <div className="product-info">
          <h1 className="product-title">{product.title}</h1>
          <Rating rating={product.rating} reviews={product.reviews} />
          <div className="product-price">${product.price}</div>
          <div className="product-add-to-cart">
            الكمية:
            <input type="number" min="1" max="50" />
            <button className="add-to-cart-btn">إضافة إلى سلة التسوق</button>
          </div>
        </div>
      </div>
      <ProductionDescription />
    </div>
  );
};

export default SingleProduct;
