import api from "../utils/api";
import * as types from "../constants/user.constants";
import { commonUiActions } from "./commonUiAction";
import * as commonTypes from "../constants/commonUI.constants";
const loginWithToken = () => async (dispatch) => {
  try{
    dispatch({type:types.LOGIN_WITH_TOKEN_REQUEST});
    const response = await api.get("/user/me");
    if(response.status !== 200)throw new Error(response.error)
    dispatch({type:types.LOGIN_WITH_TOKEN_SUCCESS, payload:response.data});

  }catch(error){
    dispatch({type:types.LOGIN_WITH_TOKEN_FAIL, payload:error.response?.data?.message || error.message});
    dispatch(logout());
  }

}; 
const loginWithEmail = ({email,password}) => async (dispatch) => {
  try{
    
    dispatch({type:types.LOGIN_REQUEST});
    const response = await api.post('/auth/login',{email,password});
    if(response.status !== 200)throw new Error(response.error)
    sessionStorage.setItem("token",response.data.token);
    dispatch({type:types.LOGIN_SUCCESS, payload:response.data});
    
  }catch(error){
    dispatch({type:types.LOGIN_FAIL, payload:error.response?.data?.message || error.message});
  }
};
const logout = () => async (dispatch) => {
  dispatch({type:types.LOGOUT});
  sessionStorage.removeItem("token");
};

const loginWithGoogle = (token) => async (dispatch) => {
  try{
    dispatch({type:types.GOOGLE_LOGIN_REQUEST})
    const response = await api.post("/auth/google", {token})
    sessionStorage.setItem("token",response.data.token);
    
    if(response.status !==200) throw new Error(response.error)
    dispatch({type:types.GOOGLE_LOGIN_SUCCESS, payload: response.data})

  }catch(error){
    dispatch({type:types.GOOGLE_LOGIN_FAIL, payload: error.error});
    dispatch(commonUiActions.showToastMessage(error.error, "error"));
  }
};

const registerUser =
  ({ email, name, password },navigate) => async (dispatch) => {
    try{
      dispatch( {type: types.REGISTER_USER_REQUEST})

      const response = await api.post('/user', {email,name,password});

      if(response.status !==200) throw new Error(response.error || "Failed to register")

      dispatch({type:types.REGISTER_USER_SUCCESS})
      dispatch(commonUiActions.showToastMessage("Register Success","success"));

      navigate("/login");
      
    }catch(error){
      dispatch({type: types.REGISTER_USER_FAIL, payload:error.response?.data?.message || error.message})
    }
  };

  const clearError =() =>async (dispatch) =>{
    dispatch({ type: types.CLEAR_ERROR })
  };

  const updateUser = (userData) => async (dispatch) => {
    try {      
      dispatch({ type: types.UPDATE_USER_REQUEST });
      const response = await api.put("/user/me", userData);      
      if (response.status !== 200) throw new Error(response.error);
      dispatch({ type: types.UPDATE_USER_SUCCESS, payload: response.data });
      dispatch(commonUiActions.showToastMessage("Profile updated successfully", "success"));
    } catch (error) {
      dispatch({ type: types.UPDATE_USER_FAIL, payload: error.response?.data?.message || error.message });
    }
  };


  const getUserList = (query) => async (dispatch) => {
    try {      
      dispatch({ type: types.USER_GET_REQUEST });      
      const response = await api.get("/auth/users", { params: { ...query } });      
      if (response.status !== 200) throw new Error(response.data.error);
      dispatch({ type: types.USER_GET_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: types.USER_GET_FAIL, payload: error.message });
    }
  };

  const updateUserLevel = (userId, level) => async (dispatch) => {
    try {
      dispatch({ type: types.USER_UPDATE_REQUEST });
      const response = await api.put("/users", { userId, level });
      if (response.status !== 200) throw new Error(response.data.error);
      dispatch({ type: types.USER_UPDATE_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: types.USER_UPDATE_FAIL, payload: error.message });
    }
  };

export const userActions = {
  loginWithToken,
  loginWithEmail,
  logout,
  loginWithGoogle,
  registerUser,
  clearError,
  updateUser,
  getUserList,
  updateUserLevel,
};
