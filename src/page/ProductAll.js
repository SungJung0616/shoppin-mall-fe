import React, { useEffect, useState } from "react";
import ProductCard from "../common/productCard/ProductCard";
import { Row, Col, Container } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../action/productAction";
import NewProduct from "../component/NewProduct";
import SaleProduct from "../component/SaleProduct";
import "./productAll.style.css";

const ProductAll = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.product.error);
  const { productList, totalPageNum, totalItemNum } = useSelector((state) => state.product);
  const [query] = useSearchParams();
  const searchQuery = query.get("name") || "";
  const category = query.get("category");
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    if (searchQuery) {      
      dispatch(productActions.getProductList({ name: searchQuery }));
      
    } else if (category) {
        dispatch(productActions.getProductList({ category }));
      }
     else {
      dispatch(productActions.getNewProducts());
      dispatch(productActions.getSaleProducts());
    }
  }, [searchQuery, category, dispatch]);

  useEffect(() => {
    setNoResults(productList.length === 0);
  }, [productList]);

  return (
    <Container className="productAll">
      {error && <div>Error: {error}</div>}
      {!category && !searchQuery ? (
        <>
          <NewProduct />
          <SaleProduct />
        </>
      ) : (
        <>
          {noResults ? (
            <div className="no-results">No results found</div>
          ) : (
            <Row>
              {productList.map((product) => (
                <Col key={product._id} md={3} sm={12}>
                  <ProductCard product={product} />
                </Col>
              ))}
            </Row>
          )}
        </>
      )}
    </Container>
  );
};

export default ProductAll;
