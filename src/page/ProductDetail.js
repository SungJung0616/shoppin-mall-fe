import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../action/productAction";
import { ColorRing } from "react-loader-spinner";
import { cartActions } from "../action/cartAction";
import { commonUiActions } from "../action/commonUiAction";
import { currencyFormat } from "../utils/number";
import "../style/productDetail.style.css";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const [selectedStock, setSelectedStock] = useState("");
  const { id } = useParams();
  const [stockError, setStockError] = useState(false);

  const product = useSelector((state) => state.product.selectedProduct);
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);

  const navigate = useNavigate();

  useEffect(() => {
    // 상품 디테일 정보 가져오기
    dispatch(productActions.getProductDetail(id));
  }, [dispatch, id]);

  console.log("Product detail:", product);

  const addItemToCart = () => {
    if (!selectedStock) {
      setStockError(true);
      return;
    }
    // 로그인이 되어 있지 않은 경우 로그인 페이지로 이동
    // 카트에 아이템 추가하기
  };

  const selectStock = (value) => {
    setSelectedStock(value);
    setStockError(false);
  };

  if (loading) {
    return <ColorRing />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product || !product.data) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="product-detail-card">
      <Row>
        <Col sm={6}>
          <img
            src={product?.data.image}
            className="w-100"
            alt="image"
          />
        </Col>
        <Col className="product-info-area" sm={6}>
          <div className="product-info">{product?.data.name}</div>
          <div className="product-info">{currencyFormat(product?.data.price)}</div>
          <div className="product-info">{product?.data.description}</div>

          <Dropdown
            className="drop-down stock-drop-down"
            onSelect={selectStock}
          >
            <Dropdown.Toggle
              className="stock-drop-down"
              variant={stockError ? "outline-danger" : "outline-dark"}
              id="dropdown-basic"
              align="start"
            >
              {selectedStock === "" ? "Select Size" : selectedStock.toUpperCase()}
            </Dropdown.Toggle>

            <Dropdown.Menu className="stock-drop-down">
              {Object.entries(product.data.stock).map(([size, quantity]) => (
                <Dropdown.Item key={size} eventKey={size} disabled={quantity <= 0}>
                  {size.toUpperCase()} {quantity <= 0 ? "(Out of Stock)" : `(${quantity})`}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <div className="warning-message">
            {stockError && "Select Size"}
          </div>
          <Button variant="dark" className="add-button" onClick={addItemToCart}>
            Add Item
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
