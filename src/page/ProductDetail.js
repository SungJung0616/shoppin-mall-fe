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
  const [size, setSize] = useState("");
  const { id } = useParams();
  const [sizeError, setSizeError] = useState(false);

  const product = useSelector((state) => state.product.selectedProduct);  
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);

  const navigate = useNavigate();

   
  useEffect(() => {
    //상품 디테일 정보 가져오기
    dispatch(productActions.getProductDetail(id));
  }, [id]);

  console.log("Product detail:", product);
  
  const addItemToCart = () => {
    //사이즈를 아직 선택안했다면 에러
    // 아직 로그인을 안한유저라면 로그인페이지로
    // 카트에 아이템 추가하기
  };
  const selectSize = (value) => {
    // 사이즈 추가하기
    setSize(value);
    setSizeError(false);
  };

  //카트에러가 있으면 에러메세지 보여주기

  //에러가 있으면 에러메세지 보여주기
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
            className="drop-down size-drop-down"
            title={size}
            align="start"
            onSelect={(value) => selectSize(value)}
          >
            <Dropdown.Toggle
              className="size-drop-down"
              variant={sizeError ? "outline-danger" : "outline-dark"}
              id="dropdown-basic"
              align="start"
            >
              {size === "" ? "사이즈 선택" : size.toUpperCase()}
            </Dropdown.Toggle>

            <Dropdown.Menu className="size-drop-down">
              <Dropdown.Item>M</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div className="warning-message">
            {sizeError && "사이즈를 선택해주세요."}
          </div>
          <Button variant="dark" className="add-button" onClick={addItemToCart}>
            추가
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
