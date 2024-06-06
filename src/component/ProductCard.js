import React from "react";
import { useNavigate } from "react-router-dom";
import { currencyFormat } from "../utils/number";
import "../style/productCard.style.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const showProduct = (id) => {
    // 상품 디테일 페이지로 가기
    navigate(`/product/${id}`);
  };
  return (
    <div 
      className="card" 
      onClick={() => showProduct(product?._id)} 
      style={{ backgroundImage: `url(${product?.image})` }}
    >
      <div className="overlay">
        <div className="card-info">
          <div>{product?.name}</div>
          <div>{currencyFormat(product.price)}</div>
        </div>
      </div>
      
    </div>
  );
};

export default ProductCard;
