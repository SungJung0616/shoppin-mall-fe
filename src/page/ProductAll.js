import React, { useEffect } from "react";
import ProductCard from "../component/ProductCard";
import { Row, Col, Container } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../action/productAction";
import { commonUiActions } from "../action/commonUiAction";

const ProductAll = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.product.error);
  const { productList, totalPageNum, totalItemNum } = useSelector((state) => state.product);
  const [query] = useSearchParams();
  const searchQuery = query.get("name") || "";
   
  // 처음 로딩하면 상품리스트 불러오기
   
  useEffect(() => {
    // 검색 조건 넣어서 리스트 불러오기
    dispatch(productActions.getProductList({ name: searchQuery }));
}, [searchQuery]);

  return (
    <Container>
      {error && <div>Error: {error}</div>}
      <Row>
        {productList.map((product) => (
          <Col key={product._id} md={3} sm={12}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductAll;
