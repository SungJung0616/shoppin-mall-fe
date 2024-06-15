import api from "../utils/api";
import * as types from "../constants/product.constants";
import { toast } from "react-toastify";
import { commonUiActions } from "./commonUiAction";

const getProductList = (query) => async (dispatch) => {
  try{    
    dispatch({type:types.PRODUCT_GET_REQUEST})
    const response = await api.get("/product", { params: {...query }});
    if(response.status !== 200)throw new Error(response.error);
    dispatch({type:types.PRODUCT_GET_SUCCESS, payload : response.data})    
  }catch(error){
    dispatch({type:types.PRODUCT_GET_FAIL, payload: error.response})
  }
};

const getProductDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: types.GET_PRODUCT_DETAIL_REQUEST });   
    const response = await api.get(`/product/${id}`);
    if (response.status !== 200) throw new Error(response.error);
    dispatch({ type: types.GET_PRODUCT_DETAIL_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: types.GET_PRODUCT_DETAIL_FAIL, payload: error.message });
    dispatch(commonUiActions.showToastMessage(error.message, "error"));
  }

};

const createProduct = (formData) => async (dispatch) => {
  try{
    dispatch({type:types.PRODUCT_CREATE_REQUEST})
    const response = await api.post("/product", formData)
    dispatch({type:types.GET_PRODUCT_DETAIL_SUCCESS})
    dispatch(commonUiActions.showToastMessage("Product Upload success","success"))
    dispatch(getProductList({page: 1, name: ""}))
  }catch(error){
    dispatch({type:types.PRODUCT_CREATE_FAIL,payload: error.error})
    dispatch(commonUiActions.showToastMessage(error.error,"error"))
  }
};
const deleteProduct = (id) => async (dispatch) => {
  try {
    
    dispatch({ type: types.PRODUCT_DELETE_REQUEST });
    const response = await api.delete(`/product/${id}`);
    dispatch({ type: types.PRODUCT_DELETE_SUCCESS, payload: response.data });    
    dispatch(commonUiActions.showToastMessage("Product deleted successfully", "success"));
    dispatch(getProductList({page: 1, name: ""}))
  } catch (error) {
    dispatch({ type: types.PRODUCT_DELETE_FAIL, payload: error.error });
    dispatch(commonUiActions.showToastMessage(error.error, "error"));
  }
};

const editProduct = (formData, id) => async (dispatch) => {
  try{
    dispatch({type:types.PRODUCT_EDIT_REQUEST})
    const response = await api.put(`/product/${id}`, formData)
    if(response.status !== 200)throw new Error(response.error);
    dispatch({type:types.PRODUCT_EDIT_SUCCESS, payload : response.data.data})
    dispatch(getProductList({page:1,name:""}))
    dispatch(commonUiActions.showToastMessage("Product Update success","success"))

  }catch(error){
    dispatch({type:types.PRODUCT_EDIT_FAIL,payload: error.error})
    dispatch(commonUiActions.showToastMessage(error.error,"error"))
  }
};

const getNewProducts = () => async (dispatch) => {
  try {
    dispatch({ type: types.PRODUCT_GET_NEW_REQUEST });
    const response = await api.get("/product/new");
    if (response.status !== 200) throw new Error(response.error);
    dispatch({ type: types.PRODUCT_GET_NEW_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: types.PRODUCT_GET_NEW_FAIL, payload: error.message });
  }
};

const getSaleProducts = () => async (dispatch) => {
  try {
    dispatch({ type: types.PRODUCT_GET_SALE_REQUEST });
    const response = await api.get("/product/sale");
    if (response.status !== 200) throw new Error(response.error);
    dispatch({ type: types.PRODUCT_GET_SALE_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: types.PRODUCT_GET_SALE_FAIL, payload: error.message });
  }
};

export const productActions = {
  getProductList,
  createProduct,
  deleteProduct,
  editProduct,
  getProductDetail,
  getNewProducts,
  getSaleProducts,
};
