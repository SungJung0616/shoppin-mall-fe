import React, {useState} from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { cartActions } from "../action/cartAction";
import { currencyFormat } from "../utils/number";

const CartProductCard = ({ item }) => {  
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.qty);

  const handleQtyChange = (id, value) => {
    //아이템 수량을 수정한다
    dispatch(cartActions.updateQty(id, value));
  };

  const deleteCart = (id) => {
    dispatch(cartActions.deleteCartItem(id));
  };

  const isOnSale = item.productId.category.includes("sale");
  const discounted = isOnSale?item.productId.price * 0.8 : item.productId.price;

  return (
    <div className="product-card-cart">
      <Row>
        <Col md={2} xs={12}>
          <img
            src={item.productId.image}
            width={112}
          />
        </Col>
        <Col md={10} xs={12}>
          <div className="display-flex space-between">
            <h3>{item.productId.name}</h3>
            <button className="trash-button">
              <FontAwesomeIcon
                icon={faTrash}
                width={24}
                onClick={() => deleteCart(item._id)}
              />
            </button>
          </div>

          {isOnSale ? (
            <div className="price-info">
               <span className="discounted-price">{currencyFormat(discounted)}</span>
            </div>
          ) : (
            <div className="product-info">{currencyFormat(item.productId.price)}</div>
          )}
          <div>Size: {item.size.toUpperCase()}</div>
          <div>Quantity: {item.qty}</div>
          <div>Total: {currencyFormat(discounted * item.qty)}</div>
          <div>
            수량선택:
            <Form.Select
              onChange={(event) => handleQtyChange(item._id, event.target.value)}
              required
              defaultValue={1}
              className="qty-dropdown"
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </Form.Select>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CartProductCard;
