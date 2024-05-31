import React from "react";
import { useNavigate } from "react-router-dom";
import { currencyFormat } from "../utils/number";

const ProductCard = () => {
  const navigate = useNavigate();
  const showProduct = (id) => {
    // 상품 디테일 페이지로 가기
  };
  return (
    <div className="card" onClick={() => showProduct("hard_code")}>
      <img
        src="https://lp2.hm.com/hmgoepprod?set=source[/e0/b8/e0b829cfa5e7d45807fa6068704a6dd65558e735.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]"
        alt=""
      />
      <div>리넨셔츠</div>
      <div>₩ 45,000</div>
    </div>
  );
};

export default ProductCard;
