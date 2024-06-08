import api from "../utils/api";
import * as types from "../constants/cart.constants";
import { commonUiActions } from "../action/commonUiAction";
const addToCart =
  ({ id, size }) =>
  async (dispatch) => {
    try{
      console.log("dispatch addTocart")
      dispatch({type: types.ADD_TO_CART_REQUEST})

      const response = await api.post("/cart",{productId: id, size, qty: 1})
      console.log("addToCart response",response)
      if (response.status !==200)throw new Error(response.error);
      
      dispatch({type: types.ADD_TO_CART_SUCCESS, payload:response.data.cartItemQty})
      commonUiActions.showToastMessage("Item has been added to the cart.", "success")
    }catch(error){
      dispatch({type:types.ADD_TO_CART_FAIL, payload: error.message})
      commonUiActions.showToastMessage(error.message, "error")
    }
  };

const getCartList = () => async (dispatch) => {
  try{
    dispatch({type:types.GET_CART_LIST_REQUEST})
    const response = await api.get("/cart")
    if(response.status !== 200)throw new Error(response.error)
    console.log("getCart response",response)
    dispatch({type:types.GET_CART_LIST_SUCCESS, payload:response.data.data})
  }catch(error){
    dispatch({type:types.GET_CART_LIST_FAIL, payload:error.error})
  }
};

const deleteCartItem = (id) => async (dispatch) => {};

const updateQty = (id, value) => async (dispatch) => {};
const getCartQty = () => async (dispatch) => {};
export const cartActions = {
  addToCart,
  getCartList,
  deleteCartItem,
  updateQty,
  getCartQty,
};
