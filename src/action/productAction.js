import api from "../utils/api";
import * as types from "../constants/product.constants";
import { toast } from "react-toastify";
import { commonUiActions } from "./commonUiAction";

const getProductList = (query) => async (dispatch) => {
  try{
    dispatch({type:types.PRODUCT_GET_REQUEST})
    const response = await api.get("/product", { params: {...query }});
    console.log("response",response)
    if(response.status !== 200)throw new Error(response.error);
    dispatch({type:types.PRODUCT_GET_SUCCESS, payload : response.data})
    
  }catch(error){
    dispatch({type:types.PRODUCT_GET_FAIL, payload: error.response})
  }
};
const getProductDetail = (id) => async (dispatch) => {};

const createProduct = (formData) => async (dispatch) => {
  try{
    dispatch({type:types.PRODUCT_CREATE_REQUEST})
    const response = await api.post("/product", formData)
    dispatch({type:types.GET_PRODUCT_DETAIL_SUCCESS})
    dispatch(commonUiActions.showToastMessage("Product Upload success","success"))

  }catch(error){
    dispatch({type:types.PRODUCT_CREATE_FAIL,payload: error.error})
    dispatch(commonUiActions.showToastMessage(error.error,"error"))
  }
};
const deleteProduct = (id) => async (dispatch) => {};

const editProduct = (formData, id) => async (dispatch) => {};

export const productActions = {
  getProductList,
  createProduct,
  deleteProduct,
  editProduct,
  getProductDetail,
};
