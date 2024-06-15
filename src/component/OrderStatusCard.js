import React from "react";
import { Row, Col, Badge } from "react-bootstrap";
import { badgeBg } from "../constants/order.constants";
import { currencyFormat } from "../utils/number";

const OrderStatusCard = ({ orderItem }) => {
  const orderNum = orderItem.orderNum || "N/A";
  const createdAt = orderItem.createdAt ? orderItem.createdAt.slice(0, 10) : "N/A";
  const productName = orderItem.items?.[0]?.productId?.name || "Unknown product";
  const totalPrice = orderItem.totalPrice ? currencyFormat(orderItem.totalPrice) : "0";
  const status = orderItem.status || "Unknown";


  return (
    <div>
      <Row className="status-card">
        <Col xs={2}>
          <img
             src={orderItem.items[0]?.productId?.image}
             alt={orderItem.items[0]?.productId?.image}
            height={96}
          />
        </Col>
        <Col xs={8} className="order-info">
          <div>
            <strong>주문번호: {orderNum}</strong>
          </div>

          <div className="text-12">{createdAt}</div>

          <div>
            {productName}
            {orderItem.items.length > 1 && ` 외 ${orderItem.items.length - 1}개`}
          </div>
          <div>{totalPrice}</div>
        </Col>
        <Col md={2} className="vertical-middle">
          <div className="text-align-center text-12">주문상태</div>
          <Badge bg={badgeBg[status]}>{status}</Badge>
        </Col>
      </Row>
    </div>
  );
};

export default OrderStatusCard;
