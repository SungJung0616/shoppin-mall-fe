import React from "react";
import { useNavigate } from "react-router-dom";
import { currencyFormat } from "../../utils/number";
import "../../style/productCard.style.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const showProduct = (id) => {
      navigate(`/product/${id}`);
  };

  const isOnSale = product.category.includes("sale"); 
  const discountedPrice = isOnSale ? product.price * 0.8 : product.price; 

  return (
    <div 
      className="card" 
      onClick={() => showProduct(product?._id)} 
      style={{ backgroundImage: `url(${product?.image})` }}
    >
      <div className="overlay">
        <div className="card-info">
          <div>{product?.name}</div>
          {isOnSale ? (
            <div>
              <span className="original-price">{currencyFormat(product.price)}</span>
              <span className="discounted-price">{currencyFormat(discountedPrice)}</span>
            </div>
          ) : (
            <div>{currencyFormat(product.price)}</div>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default ProductCard;
